from flask import Blueprint, jsonify, request
from app.models import db, Video, User, Comment
from flask_login import current_user
from sqlalchemy import desc

post_routes = Blueprint("posts", __name__)

# GET /posts
@post_routes.route("/")
def posts():
    currentUserId = current_user.id
    posts = (
        Video.query.join(User, User.id == Video.userId)
        .add_columns(User.fullname, User.username, User.photoURL)
        .order_by(desc(Video.created_at))
        .all()
    )
    # newList = []
    returnObject = {}
    for post in posts:
        postDetails = post[0].to_dict()
        postDetails["User"] = {
            "fullname": post[1],
            "username": post[2],
            "photoURL": post[3],
        }
        # newList.append(postDetails)
        if post.likesOfVideo.includes(currentUserId):
            isLiked = True
        else:
            isLiked = False
        totalLikes = post.likesOfVideo.length
        totalComments = Comment.query.filter_by(videoId=post.id).all().length
        returnObject["Post"] = postDetails
        returnObject["isLiked"] = isLiked
        returnObject["totalLikes"] = totalLikes
        returnObject["totalComments"] = totalComments

    # return jsonify(newList)
    return returnObject


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
    userDetails = user.to_dict()
    currentUserId = current_user.id
    if post.likesOfVideo.includes(currentUserId):
        isLiked = True
    else:
        isLiked = False
    totalLikes = post.likesOfVideo.length
    totalComments = Comment.query.filter_by(videoId=id).all().length
    returnObject = {
        "User": {**userDetails},
        **postDetails,
        "isLiked": isLiked,
        "totalLikes": totalLikes,
        "totalComments": totalComments,
    }
    return returnObject


# POST /posts/new
@post_routes.route("/new", methods=["POST"])
def new_post():
    new_post = Video(
        userId=request.json["userId"],
        videoURL=request.json["videoURL"],
        videoType=request.json["videoType"],
        topic=request.json["topic"],
        music=request.json["music"],
        caption=request.json["caption"],
    )
    db.session.add(new_post)
    db.session.commit()
    return new_post.to_dict()


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


@post_routes.route("/<int:id>/like", methods=["POST"])
def likePost(id):
    post = Video.query.get(id)
    userId = request.json["userId"]
    postId = request.json["videoId"]

    if post.likesOfVideo.includes(userId):
        post.likesOfVideo.remove(userId)
        db.session.commit()
        return "You have unliked the post successfully"
    else:
        post.likesOfVideo.append(userId)
        db.session.commit()
        return "You have liked the post successfully"
