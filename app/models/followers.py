from .db import db

followers = db.Table(
    "followers",
    db.Column(
        "personDoingTheFollowing",
        db.Integer,
        db.ForeignKey("users.id"),
        primary_key=True,
    ),
    db.Column(
        "personReceivingTheFollowing",
        db.Integer,
        db.ForeignKey("users.id"),
        primary_key=True,
    ),
)
