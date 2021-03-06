from .db import db


videoLikes = db.Table(
    "videoLikes",
    db.Column("userId", db.Integer, db.ForeignKey("users.id"), primary_key=True),
    db.Column("videoId", db.Integer, db.ForeignKey("videos.id"), primary_key=True),
)
