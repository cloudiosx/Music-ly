from flask import Blueprint, jsonify, request
from app.models import db, Video, User, Comment
from sqlalchemy import desc

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
    userDetails = user.to_dict()
    returnObject = {"User": {**userDetails}, **postDetails}
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


# UPDATE a post's like

# # POST /posts/like
# @post_routes.route("/<int:id>/like", methods=["POST"])
# def addLikeOnPost(id):
#     userId = request.json["userId"]
#     postId = request.json["postId"]
#     post = Video.query.get(postId)
#     post.likesOfVideo.append(userId)
#     db.session.commit()
#     return "Like has been added. Success!"


# # DELETE /posts/like
# @post_routes.route("/<int:id>/like", methods=["DELETE"])
# def removeLikeOnPost(id):
#     userId = request.json["userId"]
#     postId = request.json["postId"]
#     post = Video.query.get(postId)
#     post.likesOfVideo.remove(userId)
#     db.session.commit()
#     return "Like has been removed. Success!"
