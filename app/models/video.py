from .db import db
from .videoHashtags import videoHashtags
import datetime
from sqlalchemy import DateTime


class Video(db.Model):
    __tablename__ = "videos"

    # Columns

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"))
    videoURL = db.Column(db.String(2000), nullable=False)
    s3Name = db.Column(db.String(2000))
    videoType = db.Column(db.String(40), nullable=False)
    topic = db.Column(db.String(255), nullable=False)
    music = db.Column(db.String(255))
    caption = db.Column(db.String(2000))
    created_at = db.Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(DateTime, default=datetime.datetime.utcnow)

    # Relationships

    user = db.relationship("User", back_populates="videos")
    comments = db.relationship("Comment", back_populates="video", cascade="all,delete")

    # Joins Table Relationship

    videoHashtags = db.relationship(
        "Hashtag",
        secondary=videoHashtags,
        backref=db.backref("hashtagsOfVideo", lazy="dynamic"),
    )
