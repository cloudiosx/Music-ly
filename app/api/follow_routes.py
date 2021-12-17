from flask import Blueprint, jsonify, request
from sqlalchemy.orm.session import Session
from app.models import followers, User, db

follow_routes = Blueprint("followers", __name__)

# POST /followers/new
@follow_routes.route("/new", methods=["POST"])
def new_follow():
    return "We are in the new follow route"
