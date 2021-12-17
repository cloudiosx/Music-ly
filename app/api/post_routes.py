from flask import Blueprint, jsonify, request
from flask_login import current_user
from app.models import Video

post_routes = Blueprint("posts", __name__)

# GET /posts
@post_routes.route("/")
def posts():
    return "You are in the post index route"


# GET /posts/filtered
@post_routes.route("/filtered")
def posts():
    return "You are in the filtered post index route"
