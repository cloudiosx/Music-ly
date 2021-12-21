from app.models import db, Video


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

    db.session.commit()


def undo_posts():
    db.session.execute("TRUNCATE videos RESTART IDENTITY CASCADE;")
    db.session.commit()
