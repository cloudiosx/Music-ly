from .db import db
import datetime
from sqlalchemy import DateTime


class Hashtag(db.Model):
    __tablename__ = "hashtags"

    # Columns

    id = db.Column(db.Integer, primary_key=True)
    videoId = db.Column(db.Integer, db.ForeignKey("videos.id"))
    hashtag = db.Column(db.String(50), nullable=False)
    created_at = db.Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(DateTime, default=datetime.datetime.utcnow)

    # Relationships

    video = db.relationship("Video", back_populates="hashtags")
