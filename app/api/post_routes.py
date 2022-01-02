from flask import Blueprint, jsonify, request
from app.models import *
from app.forms import UploadForm
from flask_login import current_user
from sqlalchemy import desc
from app.utilities import upload_file_to_s3, allowed_file, get_unique_filename

post_routes = Blueprint("posts", __name__)

# GET /posts
@post_routes.route("/")
def posts():
    posts = (
        Video.query.join(User, User.id == Video.userId)
        .add_columns(User.fullname, User.username, User.photoURL)
        .order_by(desc(Video.created_at))
        .all()
    )

    newList = []
    for post in posts:
        postDetails = post[0].to_dict()
        postDetails["User"] = {
            "fullname": post[1],
            "username": post[2],
            "photoURL": post[3],
        }
        user = User.query.get(postDetails["userId"])
        if current_user.is_authenticated:
            currentUser = User.query.get(current_user.to_dict()["id"])
            if currentUser in post[0].likesOfVideo.all():
                isLiked = True
            else:
                isLiked = False
            print("post", post)
            print("user followers ======>", user.followers)
            if current_user in user.followers:
                print("user followers ======>", user.followers)
                isFollowed = True
            else:
                isFollowed = False
        else:
            isLiked = False
            isFollowed = False

        postDetails["isLiked"] = isLiked
        postDetails["isFollowed"] = isFollowed
        totalLikes = len(post[0].likesOfVideo.all())
        totalComments = len(Comment.query.filter_by(videoId=post[0].id).all())
        postDetails["totalLikes"] = totalLikes
        postDetails["totalComments"] = totalComments
        newList.append(postDetails)
    return jsonify(newList)


# GET /posts/filtered
@post_routes.route("/filtered")
def filtered_posts():
    return "You are in the filtered post index route"


# GET /posts/:id
@post_routes.route("/<int:id>")
def post(id):
    post = Video.query.get(id)
    postDetails = post.to_dict()
    user = User.query.get(postDetails["userId"])
    if current_user.is_authenticated:
        currentUser = User.query.get(current_user.to_dict()["id"])
        if currentUser in post.likesOfVideo.all():
            isLiked = True
        else:
            isLiked = False
        if currentUser in user.followers:
            isFollowed = True
        else:
            isFollowed = False
    else:
        isLiked = False
        isFollowed = False
    userDetails = user.to_dict()
    totalLikes = len(post.likesOfVideo.all())
    totalComments = len(Comment.query.filter_by(videoId=id).all())
    returnObject = {
        "User": {**userDetails},
        **postDetails,
        "isLiked": isLiked,
        "isFollowed": isFollowed,
        "totalLikes": totalLikes,
        "totalComments": totalComments,
    }
    return returnObject


# POST /posts/new
@post_routes.route("/new", methods=["POST"])
def new_post():
    currentUser = User.query.get(current_user.to_dict()["id"])
    videoForm = UploadForm()
    videoForm["csrf_token"].data = request.cookies["csrf_token"]

    # if 'videoURL' not in videoForm.data:
    #     return {"errors": "video required"}, 400

    video = videoForm.data["file"]

    if not allowed_file(video.filename):
        return {"errors": "file type not permitted"}, 400

    video.filename = get_unique_filename(video.filename)
    upload = upload_file_to_s3(video)

    if "url" not in upload:
        return upload, 400

    url = upload["url"]

    if videoForm.validate_on_submit():
        new_post = Video(
            userId=current_user.to_dict()["id"],
            videoURL=url,
            videoType=videoForm.data["videoType"],
            topic=videoForm.data["topic"],
            music=videoForm.data["music"],
            caption=videoForm.data["caption"],
        )
        db.session.add(new_post)
        db.session.commit()
        returnObject = {
            **new_post.to_dict(),
            "User": currentUser.to_dict(),
            "isLiked": False,
            "isFollowed": False,
            "totalLikes": 0,
            "totalComments": 0,
            "comments": [],
        }
        return returnObject
    return {"errors": "There was something wrong with uploading the file"}, 401


# UPDATE /posts/edit
@post_routes.route("/<int:id>/edit", methods=["POST"])
def updatePost(id):
    postToUpdate = Video.query.get(id)
    postToUpdate.caption = request.json["caption"]
    db.session.commit()
    updatedPost = Video.query.get(id)
    return jsonify(updatedPost.to_dict())


# DELETE /posts/:id
@post_routes.route("/<int:id>", methods=["DELETE"])
def deletePost(id):
    postToDelete = Video.query.get(id)
    db.session.delete(postToDelete)
    db.session.commit()
    return jsonify(postToDelete.to_dict())


# GET a post's comment


@post_routes.route("/<int:id>/comments")
def post_comments(id):
    returnObject = []
    comments = Comment.query.filter_by(videoId=id).all()
    for comment in comments:
        returnObject.append(comment.to_dict())
    return jsonify(returnObject)


# POST a like on a post


@post_routes.route("/<int:id>/like", methods=["PUT"])
def likePost(id):
    if current_user.is_authenticated:
        post = Video.query.get(id)
        user = User.query.get(current_user.to_dict()["id"])

        if user in post.likesOfVideo.all():
            post.likesOfVideo.remove(user)
            db.session.commit()
            return "You have unliked the post successfully"
        else:
            post.likesOfVideo.append(user)
            db.session.commit()
            return "You have liked the post successfully"
