from flask import Blueprint, jsonify, request
from flask_login import current_user
from app.models import Video, User
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
    return "You are in the post id route"


# POST /posts/new
@post_routes.route("/new", methods=["POST"])
def new_post():
    return "You are in the create post id route"


# UPDATE /posts/edit
@post_routes.route("/<int:id>/edit", methods=["POST"])
def updatePost(id):
    return "You are in the update post id route"


# DELETE /posts/:id
@post_routes.route("/<int:id>", methods=["DELETE"])
def deletePost(id):
    return "You are in the delete post id route"


# POST /posts/like
@post_routes.route("/<int:id>/like", methods=["POST"])
def likePost(id):
    return "You are in the create like under post id route"
