from flask import Blueprint, jsonify, request
from sqlalchemy.orm.session import Session
from flask_login import current_user
from app.models import followers, User, Video, db
import ast

follow_routes = Blueprint("followers", __name__)

# POST /followers/new
@follow_routes.route("/new", methods=["POST"])
def new_follow():
    if current_user.is_authenticated:
        requestBody = ast.literal_eval(request.data.decode("utf-8"))
        # postId = requestBody["postId"]
        userId = requestBody["userId"]

        # post = Video.query.get(postId)
        # postDetails = post.to_dict()
        user = User.query.get(userId)
        currentUser = User.query.get(current_user.to_dict()["id"])

        if currentUser not in user.followers:
            user.followers.append(currentUser)
            db.session.commit()
            return "You have followed the user successfully"
        else:
            user.followers.remove(currentUser)
            db.session.commit()
            return "You have unfollowed the user successfully"
