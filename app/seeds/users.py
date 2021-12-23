from app.models import db, User


addison = User(
    fullname="Addison Rae",
    username="addisonre",
    email="addison@addison.com",
    password="password",
    photoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/AddisonRae/addisonrae.jpg",
    s3Name="s3Name",
    verified=True,
)

charli = User(
    fullname="Charli D'Amelio",
    username="charlidamelio",
    email="charli@charli.com",
    password="password",
    photoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/CharliDAmelio/charlidamelio.jpg",
    s3Name="s3Name",
    verified=True,
)

zach = User(
    fullname="Zach King",
    username="zachking",
    email="zach@zach.com",
    password="password",
    photoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/ZachKing/zachking.jpg",
    s3Name="s3Name",
    verified=True,
)

bella = User(
    fullname="Bella Poarch",
    username="bellapoarch",
    email="bella@bella.com",
    password="password",
    photoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/BellaPoarch/bellapoarch.jpg",
    s3Name="s3Name",
    verified=True,
)

khabane = User(
    fullname="Khabane Lame",
    username="khaby.lame",
    email="khaby@khaby.com",
    password="password",
    photoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/KhabaneLame/khabanelame.jpg",
    s3Name="s3Name",
    verified=True,
)

will = User(
    fullname="Will Smith",
    username="willsmith",
    email="will@will.com",
    password="password",
    photoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/WillSmith/willsmith.jpg",
    s3Name="s3Name",
    verified=True,
)

kimberly = User(
    fullname="Kimberly Loaiza",
    username="kimberly.loaiza",
    email="kimberly@kimberly.com",
    password="password",
    photoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/KimberlyLoaiza/kimberlyloaiza.jpg",
    s3Name="s3Name",
    verified=True,
)

dixie = User(
    fullname="Dixie D'Amelio",
    username="dixiedamelio",
    email="dixie@dixie.com",
    password="password",
    photoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/DixieDAmelio/dixiedamelio.jpg",
    s3Name="s3Name",
    verified=True,
)

spencer = User(
    fullname="Spencer X",
    username="spencerx",
    email="spencer@spencer.com",
    password="password",
    photoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/SpencerX/spencerx.jpg",
    s3Name="s3Name",
    verified=True,
)

imaginedragons = User(
    fullname="Imagine Dragons",
    username="imaginedragons",
    email="imaginedragons@imaginedragons.com",
    password="password",
    photoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/ImagineDragons/imaginedragons.jpg",
    s3Name="s3Name",
    verified=True,
)

jason = User(
    fullname="Jason Derulo",
    username="jasonderulo",
    email="jason@jason.com",
    password="password",
    photoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/JasonDerulo/jasonderulo.jpg",
    s3Name="s3Name",
    verified=True,
)

# Adds a demo user, you can add other users here if you want
def seed_users():

    db.session.add(addison)
    db.session.add(charli)
    db.session.add(zach)
    db.session.add(bella)
    db.session.add(khabane)
    db.session.add(will)
    db.session.add(kimberly)
    db.session.add(dixie)
    db.session.add(spencer)
    db.session.add(imaginedragons)
    db.session.add(jason)

    charli.followings.append(zach)
    charli.followings.append(addison)
    addison.followings.append(charli)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute("TRUNCATE users RESTART IDENTITY CASCADE;")
    db.session.commit()
