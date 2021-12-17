from flask import Blueprint, request, jsonify
from flask_login import login_required
from app.models import Comment

comment_routes = Blueprint("comments", __name__)

# POST /comments/new
@comment_routes.route("/new", methods=["POST"])
def new_comment():
    return "We are in the create comment route"


# UPDATE /comments/:id/edit
@comment_routes.route("/<int:id>/edit", methods=["POST"])
def update_comment():
    return "We are in the edit comment route"


# DELETE /comments/:id
@comment_routes.route("/<int:id>", methods=["DELETE"])
def delete_comment():
    return "We are in the delete comment route"
