from app.models import db, User


addison = User(
    fullname="Addison Rae",
    username="addisonre",
    email="addison@addison.com",
    password="password",
    photoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/addison.jpg",
    s3Name="s3Name",
    verified=False,
)

charli = User(
    fullname="Charli D'Amelio",
    username="charlidamelio",
    email="charli@charli.com",
    password="password",
    photoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/charli.jpg",
    s3Name="s3Name",
    verified=False,
)

zach = User(
    fullname="Zach King",
    username="zachking",
    email="zach@zach.com",
    password="password",
    photoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/zach.jpg",
    s3Name="s3Name",
    verified=False,
)

# Adds a demo user, you can add other users here if you want
def seed_users():

    db.session.add(addison)
    db.session.add(charli)
    db.session.add(zach)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute("TRUNCATE users RESTART IDENTITY CASCADE;")
    db.session.commit()
