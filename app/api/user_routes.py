from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Video, followers
from flask_login import current_user
from sqlalchemy import desc

user_routes = Blueprint("users", __name__)

# Get all Users
@user_routes.route("/")
def users():
    users = User.query.all()
    userList = [user.to_dict() for user in users]
    return jsonify(userList)


# Get all Users that the current_user doesn't follow
@user_routes.route("/notFollowed")
def notFollowedUsers():
    users = User.query.all()

    if current_user.is_authenticated:
        # If users does not include current_user.followers
        for follower in current_user.followers:
            if follower in users:
                users.remove(follower)
        userList = [user.to_dict() for user in users]
        return jsonify(userList)
    else:
        userList = [user.to_dict() for user in users]
        return jsonify(userList)


# Get a single User
@user_routes.route("/<int:id>")
def user(id):
    user = User.query.get(id)
    userDetails = user.to_dict()
    posts = (
        Video.query.filter(Video.userId == id).order_by(desc(Video.created_at)).all()
    )
    postsList = [post.to_dict() for post in posts]
    totalFollowings = len(user.followings)
    totalFollowers = len(user.followers)
    totalLikes = 0
    for post in posts:
        if len(post.likesOfVideo.all()) == 0:
            totalLikes += 0
            break
        totalLikes += len(post.likesOfVideo.all())
    if current_user.is_authenticated:
        currentUser = User.query.get(current_user.to_dict()["id"])
        if currentUser in user.followings:
            isFollowed = True
        else:
            isFollowed = False
    else:
        isFollowed = False
    returnObject = {
        **userDetails,
        "totalFollowers": totalFollowers,
        "totalFollowings": totalFollowings,
        "totalLikes": totalLikes,
        "isFollowed": isFollowed,
        "userPosts": postsList,
    }
    return returnObject


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
