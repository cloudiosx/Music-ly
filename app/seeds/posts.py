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

    michaelPost1 = Video(
        userId=12,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/MichaelLe/michaelpost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="original sound - Michael Le",
        caption="#ad Been hearing in 4D since i got these ✨😂 @JBLAudio #TourOne",
    )

    usimPost1 = Video(
        userId=13,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/Usim/usimpost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="Alors on danse - Slowed - Stromae",
        caption="Tag who you see🙈 // Insta: Usimmango💕",
    )

    djprecisePost1 = Video(
        userId=14,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/DJPrecise/djprecisepost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Music",
        music="original sound - DJ Precise",
        caption="What do you think?? 👀 #beggin #maneskin #djtiktok #dj",
    )

    ianPost1 = Video(
        userId=15,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/IanAsher/ianpost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Music",
        music="original sound - Ian Asher",
        caption="Money x How You Like That #blackpink #lisa @blackpinkofficial",
    )

    tannerPost1 = Video(
        userId=16,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/TannerPeeler/tannerpost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="Leave (Get Out) - JoJo",
        caption="It was an emotional time of our lives, ALRIGHT?! 👀😂 #tannersmiles #feelingthemusic",
    )

    shawnPost1 = Video(
        userId=17,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/ShawnRevels/shawnpost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Family",
        music="Get You The Moon - Kina",
        caption="Right in the feels. #fyp #fypシ #love #sad #inspiration",
    )

    tuzelityPost1 = Video(
        userId=18,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/TuzelityDance/tuzelitypost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="Astronomia - Chiky Dee Jay",
        caption="😎💥 Neon Mode 😱🔥 #tuzelity",
    )

    zachandpatPost1 = Video(
        userId=19,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/ZachAndPatValentine/zachandpatpost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="Unlock it (Lock It) [Jeff Prior Mix] - Charli XCX",
        caption="@indiana @mads.yo @Riley Lewis @brooklynqueen3 @JAIME ADLER @ALY JADE @tatimcquay @goodgalmadox @gabby.marie06 @francescasboutique",
    )

    interscopePost1 = Video(
        userId=20,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/InterscopeRecords/interscopepost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Music",
        music="good 4 u - Olivia Rodrigo",
        caption="@livbedumb #good4u #oliviarodrigo #geffen #geffenrecords",
    )

    eliePost1 = Video(
        userId=21,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/ElieFeghaly/eliepost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Music",
        music="9 PM 'Till I Come - ATB",
        caption="#eliefeghaly7 #dubai #realestate #fyp #viral #followme #like #foryoupage #explore #uk #usa #saudi #russia #world #europe #turkey #tiktok #tiktokarab",
    )

    lancePost1 = Video(
        userId=22,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/LanceStewart/lancepost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Family",
        music="I'm Just a Kid - Simple Plan",
        caption="Remaking our baby photos 🤣 @xosabrinanicolexo",
    )

    yzPost1 = Video(
        userId=23,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/YZ/yzpost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Art",
        music="Lalala - Y2K & bbno$",
        caption="Don’t laugh about my skate skills #yzfamily #tutorial #fürdich #fyp",
    )

    tommyPost1 = Video(
        userId=24,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/TommyBracco/tommypost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="Blinding Lights - MACDADDYZ",
        caption="Bracco boys in their element #BlindingLightsChallenge #fyp #foryou #foryourpage @philipbracco @philbracco",
    )

    rosePost1 = Video(
        userId=25,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/Rose/rosepost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="WAP（feat. Megan Thee Stallion） - Cardi B",
        caption="#10M !! Here you go🙄",
    )

    curtisPost1 = Video(
        userId=26,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/CurtisRoach/curtispost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="BORED IN THE HOUSE - Curtis Roach",
        caption="You ever be bored at the house bored?🔥🔥 #checkthisout #bored #fyp #foryou #xycba #rap #viral",
    )

    zoiPost1 = Video(
        userId=27,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/Zoifishh/zoipost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="Supalonely (feat. Gus Dapperton) - BENEE",
        caption="not my usual content but this song was too catchy to not make a dance to LMAO🥺🥺 try it and tag me !! #foryou #foryour #foryoupage #foryourpage",
    )

    davidPost1 = Video(
        userId=28,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/DavidDobrik/davidpost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="Pew Pew Pew - Auntie Hammy",
        caption="Hahahahhah wow he killed this @imkevinhart",
    )

    kyliePost1 = Video(
        userId=29,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/KylieJenner/kyliepost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="OUT WEST (feat. Young Thug) - JACKBOYS & Travis Scott",
        caption="out west ???",
    )

    lorenPost1 = Video(
        userId=30,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/LorenGray/lorenpost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Duet",
        music="I Like Him - Princess Nokia",
        caption="#duet with @babyariel assigning myself the role of toxic best friend cuz I love her video . luv u ariel🥺",
    )

    trePost1 = Video(
        userId=31,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/TreClements/trepost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="Vibe (If I Back It Up) - Cookiee Kawaii",
        caption="vibe check",
    )

    ulaPost1 = Video(
        userId=32,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/Ula/ulapost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Singing",
        music="original sound - Tik Toker",
        caption="not too perfect, not too bad #promqueen #beachbunny",
    )

    aydonPost1 = Video(
        userId=33,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/AydonHolley/aydonpost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="Sober Up (feat. Rivers Cuomo) - AJR",
        caption="Why is this so funny in reverse 🤣 #foryou #tiktok @haileyevert",
    )

    dwaynePost1 = Video(
        userId=34,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/DwayneJohnson/dwaynepost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Storytelling",
        music="ROXANNE - Arizona Zervas",
        caption="I'll bring the rock, you bring the sand. #ThatsSoTikTok #MisheardLyrics @candyken",
    )

    katiePost1 = Video(
        userId=35,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/KatieFeeney/katiepost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="Lottery - K CAMP",
        caption="which renegade do you prefer? @jazzi.groom dance creds: @_.xoxlaii",
    )

    curtisWatersPost1 = Video(
        userId=36,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/CurtisWaters/curtiswaterspost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="Stunnin' (feat. Harm Franklin) - Curtis Waters",
        caption="lemme know what u think of my song! #music #nc #fyp #stunnin #curtiswaters",
    )

    avivaPost1 = Video(
        userId=37,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/AvivaSofia/avivapost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="Roses (Imanbek Remix) - SAINt JHN",
        caption="tiktok songs used to be so much catchier",
    )

    hannahPost1 = Video(
        userId=38,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/HannahBrookeSanders/hannahpost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="Laxed (Siren Beat) - Jawsh 685",
        caption="We had matching swimsuits we HAD to do it @skylartisdale",
    )

    hannahRyleePost1 = Video(
        userId=39,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/HannahRylee/hannahryleepost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="23 - Mike WiLL Made-It",
        caption="i'm so awkward LOL sorey",
    )

    geniusPost1 = Video(
        userId=40,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/Genius/geniuspost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Singing",
        music="Wrong - Luh Kel",
        caption="@realtrillkel doesn't even need AutoTune 🔥🔥🔥 #verified #wrong",
    )

    urbanPost1 = Video(
        userId=41,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/UrbanTheory/urbanpost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="Cradles - Sub Urban",
        caption="Always remember the 5th of november 🎭 💥 #urban #urbantheory #geometryart #tuttingdance #vforvendetta #dark #5thnovember",
    )

    aureliaPost1 = Video(
        userId=42,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/AureliaDobre/aureliapost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Lifestyle",
        music="Trampoline - SHAED",
        caption="I love jumping on the #trampoline ! 🤩 #jump #fyp #foryou",
    )

    nbaPost1 = Video(
        userId=43,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/Nba/nbapost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="Old Town Road - Lil Nas X",
        caption="🗣 “I got the horses in the back!”",
    )

    kylePost1 = Video(
        userId=44,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/Kyle/kylepost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Singing",
        music="Hey Julie! (feat. Lil Yachty) - KYLE",
        caption="Simpler times! @lilyachty #heyjulie",
    )

    barstooluPost1 = Video(
        userId=45,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/Barstoolu/barstoolupost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="Earth - Lil Dicky",
        caption="Imagine seeing Lil Dicky in your Zoom University class (via ig/joe_more96)",
    )

    viralErikPost1 = Video(
        userId=46,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/ViralErik/viralerikpost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Comedy",
        music="Crystal Dolphin - Engelwood",
        caption="When someone coughs in 2020 #foryou #fyp",
    )

    yaenaPost1 = Video(
        userId=47,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/YaenaFujimoto/yaenafujimotopost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="Caroline - Joshua Ona",
        caption="addicted to this song lmao #caroline #amine @amine",
    )

    edPost1 = Video(
        userId=48,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/EdSheeran/edsheeranpost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Singing",
        music="original sound - Jerrica Alyssa",
        caption="#duet with jerricaalyssa Loving these duet vids #EqualsAlbum",
    )

    theProfessorPost1 = Video(
        userId=49,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/TheProfessor/theprofessorpost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Lifestyle",
        music="God's Plan - Drake",
        caption="Fan: “Yo Professor I remember when y’all used to break ankles on the And 1 Mixtape. That was Lit. Wish you still did that nowadays.”Me Yesterday:",
    )

    newrulesbandPost1 = Video(
        userId=50,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/NewRulesBand/newrulesbandpost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Singing",
        music="Beggin' - Måneskin",
        caption="Boyband meets your FYP 🤝 #maneskin #beggin #fyp",
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
    db.session.add(michaelPost1)
    db.session.add(usimPost1)
    db.session.add(djprecisePost1)
    db.session.add(ianPost1)
    db.session.add(tannerPost1)
    db.session.add(shawnPost1)
    db.session.add(tuzelityPost1)
    db.session.add(zachandpatPost1)
    db.session.add(interscopePost1)
    db.session.add(eliePost1)
    db.session.add(lancePost1)
    db.session.add(yzPost1)
    db.session.add(tommyPost1)
    db.session.add(rosePost1)
    db.session.add(curtisPost1)
    db.session.add(zoiPost1)
    db.session.add(davidPost1)
    db.session.add(kyliePost1)
    db.session.add(lorenPost1)
    db.session.add(trePost1)
    db.session.add(ulaPost1)
    db.session.add(aydonPost1)
    db.session.add(dwaynePost1)
    db.session.add(katiePost1)
    db.session.add(curtisWatersPost1)
    db.session.add(avivaPost1)
    db.session.add(hannahPost1)
    db.session.add(hannahRyleePost1)
    db.session.add(geniusPost1)
    db.session.add(urbanPost1)
    db.session.add(aureliaPost1)
    db.session.add(nbaPost1)
    db.session.add(kylePost1)
    db.session.add(barstooluPost1)
    db.session.add(viralErikPost1)
    db.session.add(yaenaPost1)
    db.session.add(edPost1)
    db.session.add(theProfessorPost1)
    db.session.add(newrulesbandPost1)

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
