from flask import Blueprint, request, jsonify
from flask_login import login_required
from app.models import Hashtag

hashtag_routes = Blueprint("hashtags", __name__)

# POST /hashtags/new
@hashtag_routes.route("/new", methods=["POST"])
def new_hashtag():
    return "We are in the create hashtag route"


# UPDATE /comments/:id/edit
@hashtag_routes.route("/<int:id>/edit", methods=["POST"])
def update_hashtag():
    return "We are in the edit hashtag route"


# DELETE /comments/:id
@hashtag_routes.route("/<int:id>", methods=["DELETE"])
def delete_hashtag():
    return "We are in the delete hashtag route"
