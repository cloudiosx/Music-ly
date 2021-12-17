from .db import db


videoHashtags = db.Table(
    "videoHashtags",
    db.Column("videoId", db.Integer, db.ForeignKey("videos.id"), primary_key=True),
    db.Column("hashtagId", db.Integer, db.ForeignKey("hashtags.id"), primary_key=True),
)
