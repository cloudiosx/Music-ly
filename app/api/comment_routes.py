from flask import Blueprint, request, jsonify
from app.models import db, Comment

# from flask_login import current_user

comment_routes = Blueprint("comments", __name__)

# POST /comments/new
@comment_routes.route("/new", methods=["POST"])
def new_comment():
    comment = Comment(
        userId=request.json["userId"],
        videoId=request.json["postId"],
        content=request.json["content"],
    )
    db.session.add(comment)
    db.session.commit()
    return jsonify(comment.to_dict())


# UPDATE /comments/:id/edit
@comment_routes.route("/<int:id>/edit", methods=["PUT"])
def update_comment(id):
    commentToUpdate = Comment.query.get(id)
    commentToUpdate.content = request.json["content"]
    db.session.commit()
    updatedComment = Comment.query.get(id)
    return jsonify(updatedComment.to_dict())


# DELETE /comments/:id
@comment_routes.route("/<int:id>", methods=["DELETE"])
def delete_comment(id):
    commentToDelete = Comment.query.get(id)
    db.session.delete(commentToDelete)
    db.session.commit()
    return jsonify(commentToDelete.to_dict())
