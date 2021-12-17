from app.models import db, Video


def seed_posts():
    johnPost1 = Video(
        userId=1,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/loginVideo1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="comedy",
        music="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/%5BMP3DOWNLOAD.TO%5D+Phao+-+2+Phut+Hon+(KAIZ+Remix)+_+9D+AUDIO+%F0%9F%8E%A7-320k.mp3",
        caption="This is sick",
    )
    jackiePost1 = Video(
        userId=2,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/loginVideo1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="comedy",
        music="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/%5BMP3DOWNLOAD.TO%5D+Phao+-+2+Phut+Hon+(KAIZ+Remix)+_+9D+AUDIO+%F0%9F%8E%A7-320k.mp3",
        caption="This is sick",
    )
    davidPost1 = Video(
        userId=3,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/loginVideo1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="comedy",
        music="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/%5BMP3DOWNLOAD.TO%5D+Phao+-+2+Phut+Hon+(KAIZ+Remix)+_+9D+AUDIO+%F0%9F%8E%A7-320k.mp3",
        caption="This is sick",
    )

    db.session.add(johnPost1)
    db.session.add(jackiePost1)
    db.session.add(davidPost1)

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
