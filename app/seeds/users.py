from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    john = User(
        fullname="John",
        username="kimjohn",
        email="john@john.com",
        password="password",
        photoURL="photo",
        s3Name="s3Name",
        verified=False,
    )

    jackie = User(
        fullname="Jackie",
        username="kimjackie",
        email="jackie@jackie.com",
        password="password",
        photoURL="photo",
        s3Name="s3Name",
        verified=False,
    )

    david = User(
        fullname="David",
        username="kimDavid",
        email="david@david.com",
        password="password",
        photoURL="photo",
        s3Name="s3Name",
        verified=False,
    )

    db.session.add(john)
    db.session.add(jackie)
    db.session.add(david)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute("TRUNCATE users RESTART IDENTITY CASCADE;")
    db.session.commit()
