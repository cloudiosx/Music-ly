from .db import db
from .followers import followers
from .videoLikes import videoLikes
from .commentLikes import commentLikes
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin, current_user
import datetime
from sqlalchemy import DateTime


class User(db.Model, UserMixin):
    __tablename__ = "users"

    # Columns

    id = db.Column(db.Integer, primary_key=True)
    fullname = db.Column(db.String(40), nullable=False, unique=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    photoURL = db.Column(db.String(2000), nullable=False)
    s3Name = db.Column(db.String(2000))
    verified = db.Column(db.Boolean, default=False, nullable=False)
    created_at = db.Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(DateTime, default=datetime.datetime.utcnow)

    # Relationships

    videos = db.relationship("Video", back_populates="user")
    comments = db.relationship("Comment", back_populates="user")

    # Joins Table Relationship

    videoLikes = db.relationship(
        "Video",
        secondary=videoLikes,
        backref=db.backref("likesOfVideo", lazy="dynamic"),
    )
    commentLikes = db.relationship(
        "Comment",
        secondary=commentLikes,
        backref=db.backref("likesOfComment", lazy="dynamic"),
    )

    # Self-Reference Joins Table Relationship

    followings = db.relationship(
        "User",
        secondary=followers,
        primaryjoin=(followers.c.personDoingTheFollowing == id),
        secondaryjoin=(followers.c.personReceivingTheFollowing == id),
        backref=db.backref("followers"),
    )

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "photoURL": self.photoURL,
            "fullname": self.fullname,
            "verified": self.verified,
            "isFollowed": current_user in self.followers,
            "totalFollowings": len(self.followings),
            "followingPost": sorted(
                [video.to_dict() for video in self.videos],
                key=lambda i: i["created_at"],
                reverse=True,
            )[0],
        }
