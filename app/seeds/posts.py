from app.models import db, Video
from .users import addison, charli, zach


def seed_posts():
    addisonPost1 = Video(
        userId=1,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/loginVideo1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="comedy",
        music="Phao - 2 Phut Hon (KAIZ Remix)",
        caption="This is sick",
    )
    charliPost1 = Video(
        userId=2,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/loginVideo1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="comedy",
        music="Phao - 2 Phut Hon (KAIZ Remix)",
        caption="This is sick",
    )
    zachPost1 = Video(
        userId=3,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/loginVideo1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="comedy",
        music="Phao - 2 Phut Hon (KAIZ Remix)",
        caption="This is sick",
    )

    db.session.add(addisonPost1)
    db.session.add(charliPost1)
    db.session.add(zachPost1)

    addisonPost1.likesOfVideo.append(charli)
    addisonPost1.likesOfVideo.append(zach)
    charliPost1.likesOfVideo.append(addison)
    charliPost1.likesOfVideo.append(zach)

    db.session.commit()


def undo_posts():
    db.session.execute("TRUNCATE videos RESTART IDENTITY CASCADE;")
    db.session.commit()


# id = db.Column(db.Integer, primary_key=True)
# userId = db.Column(db.Integer, db.ForeignKey("users.id"))
#     videoURL = db.Column(db.String(2000), nullable=False)
#     s3Name = db.Column(db.String(2000))
#     videoType = db.Column(db.String(40), nullable=False)
#     topic = db.Column(db.String(255), nullable=False)
#     music = db.Column(db.String(255))
#     caption = db.Column(db.String(2000))
#     created_at = db.Column(DateTime, default=datetime.datetime.utcnow)
#     updated_at = db.Column(DateTime, default=datetime.datetime.utcnow)
