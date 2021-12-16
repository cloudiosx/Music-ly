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

        comment1 = Comment(userId=1, videoId=1, content="User 1 comment")
        comment2 = Comment(userId=2, videoId=1, content="User 2 comment")
        comment3 = Comment(userId=3, videoId=2, content="User 3 comment")
        comment4 = Comment(userId=4, videoId=2, content="User 4 comment")

        hashtag1 = Hashtag(hashtag="#peace")
        hashtag2 = Hashtag(hashtag="#love")
        hashtag3 = Hashtag(hashtag="#respect")
        hashtag4 = Hashtag(hashtag="#globe")

        db.session.add(user1)
        db.session.add(user2)
        db.session.add(user3)
        db.session.add(user4)
        db.session.add(video1)
        db.session.add(video2)
        db.session.add(comment1)
        db.session.add(comment2)
        db.session.add(comment3)

        video1.likesOfVideo.append(user1)
        video1.likesOfVideo.append(user2)
        video2.likesOfVideo.append(user3)
        video2.likesOfVideo.append(user4)

        comment1.likesOfComment.append(user2)
        comment1.likesOfComment.append(user3)
        comment2.likesOfComment.append(user1)
        comment2.likesOfComment.append(user4)

        hashtag1.hashtagsOfVideo.append(video1)
        hashtag2.hashtagsOfVideo.append(video1)
        hashtag3.hashtagsOfVideo.append(video1)
        hashtag4.hashtagsOfVideo.append(video1)

        user1.followings.append(user2)
        user1.followings.append(user3)
        user1.followings.append(user4)
        user2.followings.append(user1)
        user2.followings.append(user3)
        user2.followings.append(user4)

        db.session.commit()

    db_setup()
