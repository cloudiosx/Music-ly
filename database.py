from app import app
from app.models import *

with app.app_context():

    def db_setup():
        db.drop_all()
        db.create_all()

        user1 = User(
            fullname="John",
            username="kimjohn",
            email="john@john.com",
            hashed_password="password",
            photoURL="photo",
            s3Name="s3Name",
            verified=False,
        )

        user2 = User(
            fullname="Amber",
            username="amberPark",
            email="amber@amber.com",
            hashed_password="password",
            photoURL="photo",
            s3Name="s3Name",
            verified=False,
        )

        user3 = User(
            fullname="Stacy",
            username="stacyWong",
            email="stacy@stacy.com",
            hashed_password="password",
            photoURL="photo",
            s3Name="s3Name",
            verified=False,
        )

        user4 = User(
            fullname="Jesse",
            username="jesseKim",
            email="jesse@jesse.com",
            hashed_password="password",
            photoURL="photo",
            s3Name="s3Name",
            verified=False,
        )

        video1 = Video(
            userId=1,
            videoURL="video",
            s3Name="s3Name",
            videoType="duet",
            topic="pop",
            music="DJ Khaled",
            caption="We the best music",
        )

        video2 = Video(
            userId=2,
            videoURL="video",
            s3Name="s3Name",
            videoType="duet",
            topic="rap",
            music="Eminem",
            caption="8 Mile",
        )

        db.session.add(user1)
        db.session.add(user2)
        db.session.add(user3)
        db.session.add(user4)
        db.session.add(video1)
        db.session.add(video2)
        db.session.commit()

        video1.likesOfVideo.append(user1)
        video1.likesOfVideo.append(user2)

        video2.likesOfVideo.append(user3)
        video2.likesOfVideo.append(user4)

        db.session.commit()

    db_setup()
