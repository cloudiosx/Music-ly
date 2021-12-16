from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
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

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {"id": self.id, "username": self.username, "email": self.email}
