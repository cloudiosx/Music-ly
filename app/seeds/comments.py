from app.models import db, Comment


def seed_comments():
    addisonComment1 = Comment(userId=1, videoId=1, content="This is so cool!")
    charliComment1 = Comment(userId=2, videoId=1, content="This is so cool!")
    zachComment1 = Comment(userId=3, videoId=1, content="This is so cool!")

    db.session.add(addisonComment1)
    db.session.add(charliComment1)
    db.session.add(zachComment1)

    db.session.commit()


def undo_comments():
    db.session.execute("TRUNCATE comments RESTART IDENTITY CASCADE;")
    db.session.commit()
