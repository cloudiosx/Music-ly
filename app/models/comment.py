from .db import db
import datetime
from sqlalchemy import DateTime


class Comment(db.Model):
    __tablename__ = "comments"

    # Columns

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"))
    videoId = db.Column(db.Integer, db.ForeignKey("videos.id"))
    content = db.Column(db.String(100), nullable=False)
    created_at = db.Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(DateTime, default=datetime.datetime.utcnow)

    # Relationships

    user = db.relationship("User", back_populates="comments", lazy="subquery")
    video = db.relationship("Video", back_populates="comments")

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "videoId": self.videoId,
            "content": self.content,
            "created_at": self.created_at,
            "photoURL": self.user.photoURL,
            "fullname": self.user.fullname,
            "username": self.user.username,
        }
