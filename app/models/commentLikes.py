from .db import db


commentLikes = db.Table(
    "commentLikes",
    db.Column("userId", db.Integer, db.ForeignKey("users.id"), primary_key=True),
    db.Column("commentId", db.Integer, db.ForeignKey("comments.id"), primary_key=True),
)
