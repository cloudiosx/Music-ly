from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Video, followers
from flask_login import current_user
from sqlalchemy import desc

user_routes = Blueprint("users", __name__)

# Get all Users
@user_routes.route("/")
@login_required
def users():
    users = User.query.all()
    userList = [user.to_dict() for user in users]
    return jsonify(userList)


# Get all Users that the current_user doesn't follow
@user_routes.route("/notFollowed")
def notFollowedUsers():
    users = User.query.all()
    # If users does not include current_user.followers
    for follower in current_user.followers:
        if follower in users:
            users.remove(follower)
    userList = [user.to_dict() for user in users]
    return jsonify(userList)


# Get a single User
@user_routes.route("/<int:id>")
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


# Get all of a User's posts
@user_routes.route("/<int:id>/posts")
def user_posts(id):
    posts = (
        Video.query.filter(Video.userId == id).order_by(desc(Video.created_at)).all()
    )
    postsList = [post.to_dict() for post in posts]
    return jsonify(postsList)


# Edit a user's profile
@user_routes.route("/<int:id>/edit", methods=["POST"])
def user_edit(id):
    user = User.query.get(id)
    return "You are in the edit user profile route"
