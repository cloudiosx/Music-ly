from app.models import db, Video
from .users import addison, charli, zach


def seed_posts():
    addisonPost1 = Video(
        userId=1,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/AddisonRae/addisonpost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Beauty",
        music="FEEL THE GROOVE - Queens Road, Fabian Graetz",
        caption="My holiday season must-haves from @American Eagle 🎄❤️ #aepartner #aejeans",
    )

    charliPost1 = Video(
        userId=2,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/CharliDAmelio/charlipost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="original sound - charli d’amelio",
        caption="introducing our final @socialtourist drop of 2021! shop vol 7 now #wethetourists #socialtouristcofounder",
    )

    zachPost1 = Video(
        userId=3,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/ZachKing/zachpost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Pranks",
        music="original sound - Zach King",
        caption="The snowball at the end wrecked me! #winterwonderland #letitsnow",
    )

    bellaPost1 = Video(
        userId=4,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/BellaPoarch/bellapost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="My Universe - Coldplay x BTS",
        caption="I was screaming all night😅💜",
    )

    khabanePost1 = Video(
        userId=5,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/KhabaneLame/khabanepost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="suono originale - Khabane lame",
        caption="🤷🏿‍♂️#learnfromkhaby #learnontiktok #learnwithtiktok #stitch",
    )

    willPost1 = Video(
        userId=6,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/WillSmith/willpost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="original sound - EbonyEboy",
        caption="Also, fries.",
    )

    kimberlyPost1 = Video(
        userId=7,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/KimberlyLoaiza/kimberlypost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="sonido original - Carol Castro",
        caption="Me encanta este trend 🤩 Dc @elrodcontreras @carolcastromx",
    )

    dixiePost1 = Video(
        userId=8,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/DixieDAmelio/dixiepost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="original sound - dixie",
        caption="@socialtourist vol 7 is here! our final drop of 2021 #wethetourists #socialtouristcofounder",
    )

    spencerPost1 = Video(
        userId=9,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/SpencerX/spencerpost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="original sound - Spencer X",
        caption="#ad If you’ve got a JBL, you already know 🔊 lets see what you can duet w/ me #JBLPartyBox @JBLAudio",
    )

    imaginePost1 = Video(
        userId=10,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/ImagineDragons/imaginepost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="Enemy - from the series Arcane League of Legends - Imagine Dragons & JID & Arcane & League Of Legends",
        caption="ENEMY",
    )

    jasonPost1 = Video(
        userId=11,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/JasonDerulo/jasonpost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="In Da Getto - J Balvin & Skrillex",
        caption="Couldn’t find a Halloween costume that fit @twistedpennywise @Ghostface Papi @Freddy Krueger @Jeremy Olenski #happyhalloween",
    )

    db.session.add(addisonPost1)
    db.session.add(charliPost1)
    db.session.add(zachPost1)
    db.session.add(bellaPost1)
    db.session.add(khabanePost1)
    db.session.add(willPost1)
    db.session.add(kimberlyPost1)
    db.session.add(dixiePost1)
    db.session.add(spencerPost1)
    db.session.add(imaginePost1)
    db.session.add(jasonPost1)

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
