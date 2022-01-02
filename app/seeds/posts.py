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

    addisonPost2 = Video(
        userId=1,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/AddisonRae/addisonpost2.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Beauty",
        music="original sound - Addison Rae",
        caption="Our TWICE AS NICE and TRI-ME kits are now available at @sephora and on the @itembeauty website!! #itemcofounder",
    )

    addisonPost3 = Video(
        userId=1,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/AddisonRae/addisonpost3.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Beauty",
        music="seeing triple edit - kendall <3",
        caption="#ColorCustomizer",
    )

    addisonPost4 = Video(
        userId=1,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/AddisonRae/addisonpost4.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Beauty",
        music="Sweat – Pandora ME remix - Charli XCX",
        caption="Join the #123PandoraME challenge with me and the rest of the @pandorame collective: @charlixcx @dontecolley @Cecilia Cantarano🌙 @Beabadoobee",
    )

    addisonPost5 = Video(
        userId=1,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/AddisonRae/addisonpost5.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Lifestyle",
        music="Desire - Gryffin Remix - Years & Years",
        caption="How is this real life?! Thank you to everyone who follows and supports me. I love y’all so much ❤️",
    )

    addisonPost6 = Video(
        userId=1,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/AddisonRae/addisonpost6.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Lifestyle",
        music="Summer Nights - nvsh",
        caption="Catch me this summer, if you can 🌴🌸☀️ tell me what’s on your summer bucket list using emoji’s only! @americaneagle #aepartner #aejeans",
    )

    addisonPost7 = Video(
        userId=1,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/AddisonRae/addisonpost7.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="original sound - payton graber",
        caption="#duet with addisonre one take wonders @kourtneykardashian",
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

    charliPost2 = Video(
        userId=2,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/CharliDAmelio/charlipost2.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Food",
        music="Santa Tell Me - Ariana Grande",
        caption="last holiday yt video is out now go watch all 13!!!!",
    )

    charliPost3 = Video(
        userId=2,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/CharliDAmelio/charlipost3.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Lifestyle",
        music="Pretty Girl - Clairo",
        caption="yesterday",
    )

    charliPost4 = Video(
        userId=2,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/CharliDAmelio/charlipost4.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Family",
        music="Be Happy - Dixie",
        caption="@dixiedamelio",
    )

    charliPost5 = Video(
        userId=2,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/CharliDAmelio/charlipost5.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="original sound - Jesse Geraldo",
        caption="dc @Jarred Manista @nickfpauley @Jesse Geraldo",
    )

    charliPost6 = Video(
        userId=2,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/CharliDAmelio/charlipost6.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Outdoors",
        music="send my love - favsoundds",
        caption="capri 📍",
    )

    charliPost7 = Video(
        userId=2,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/CharliDAmelio/charlipost7.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="original sound - charli d’amelio",
        caption="#thedamelioshow is out now on @hulu @dameliosonhulu !!!",
    )

    zachPost1 = Video(
        userId=3,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/ZachKing/zachpost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="original sound - Zach King",
        caption="The snowball at the end wrecked me! #winterwonderland #letitsnow",
    )

    zachPost2 = Video(
        userId=3,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/ZachKing/zachpost2.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="original sound - Zach King",
        caption="We built a really big #gingerbreadhouse to pull this #trick off.",
    )

    zachPost3 = Video(
        userId=3,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/ZachKing/zachpost3.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="original sound - Zach King",
        caption="Proof #aliens do exist?",
    )

    zachPost4 = Video(
        userId=3,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/ZachKing/zachpost4.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="original sound - Zach King",
        caption="How to #parallel #park",
    )

    zachPost5 = Video(
        userId=3,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/ZachKing/zachpost5.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="original sound - Zach King",
        caption="Sometimes life is not as it seems @itsdanielmac",
    )

    zachPost6 = Video(
        userId=3,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/ZachKing/zachpost6.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="original sound - Zach King",
        caption="Ever wonder why it’s called Fast Food?",
    )

    zachPost7 = Video(
        userId=3,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/ZachKing/zachpost7.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="original sound - Zach King",
        caption="Learning some #trickshots from @dudeperfect",
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

    bellaPost2 = Video(
        userId=4,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/BellaPoarch/bellapost2.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="Title - Meghan Trainor",
        caption="@bretmanrock ✨",
    )

    bellaPost3 = Video(
        userId=4,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/BellaPoarch/bellapost3.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="original sound - justdancegame",
        caption="#duet with justdance_officialgame Excited to partner with Just Dance to celebrate #GivingTuesday ! Show me your moves💃🏻🥰 #JustDance2022",
    )

    bellaPost4 = Video(
        userId=4,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/BellaPoarch/bellapost4.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="California Gurls - Katy Perry",
        caption="I didn’t have anybody to do this trend with🥲",
    )

    bellaPost5 = Video(
        userId=4,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/BellaPoarch/bellapost5.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="INFERNO - Sub Urban & Bella Poarch",
        caption="Who’s that Pokémon!!!😆💛",
    )

    bellaPost6 = Video(
        userId=4,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/BellaPoarch/bellapost6.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="Backyardigans x Little Einsteins - Fin Draper Music",
        caption="I ❤️ NY",
    )

    bellaPost7 = Video(
        userId=4,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/BellaPoarch/bellapost7.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="Alors on danse - Slowed - Stromae",
        caption="just wanted to join in on the trend😅",
    )

    willPost1 = Video(
        userId=5,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/WillSmith/willpost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="original sound - EbonyEboy",
        caption="Also, fries.",
    )

    willPost2 = Video(
        userId=5,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/WillSmith/willpost2.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="original sound - Tik Toker",
        caption="Big mood for #kingrichard week!!",
    )

    willPost3 = Video(
        userId=5,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/WillSmith/willpost3.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="original sound - Will Smith",
        caption="Reply to @muryborkono I took the stairs obviously",
    )

    willPost4 = Video(
        userId=5,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/WillSmith/willpost4.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="original sound - Will Smith",
        caption="3 fast 3 furious",
    )

    willPost5 = Video(
        userId=5,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/WillSmith/willpost5.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="A Moment Apart - ODESZA",
        caption="This gives new meaning to “deep end” of the pool 😧 #DeepDiveDubai is INSANE!! #BestShapeOfMyLife",
    )

    willPost6 = Video(
        userId=5,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/WillSmith/willpost6.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="original sound - Will Smith",
        caption="Hit him with the snack attack ;-) @lilnasx",
    )

    willPost7 = Video(
        userId=5,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/WillSmith/willpost7.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="The Fresh Prince Of Bel-Air - TV Themes",
        caption="Jeff got flip turned right to the other side of the planet 😂. #FreshPrinceReunion 📹: @chrisashley",
    )

    dixiePost1 = Video(
        userId=6,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/DixieDAmelio/dixiepost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="original sound - dixie",
        caption="@socialtourist vol 7 is here! our final drop of 2021 #wethetourists #socialtouristcofounder",
    )

    dixiePost2 = Video(
        userId=6,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/DixieDAmelio/dixiepost2.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="Christmas City 30 - Auracle",
        caption="living in my cute custom red tracksuit and sipping my favorite red velvet latte from @originaldonutshop ❤️ #DSHPPartner",
    )

    dixiePost3 = Video(
        userId=6,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/DixieDAmelio/dixiepost3.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Family",
        music="love and drugs - Dixie fanpage 🤍💛",
        caption="best friend",
    )

    dixiePost4 = Video(
        userId=6,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/DixieDAmelio/dixiepost4.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Family",
        music="original sound - dixie",
        caption="headliner looks only🖤 @socialtourist vol 6 is out now! #wethetourists #socialtouristcofounder",
    )

    dixiePost5 = Video(
        userId=6,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/DixieDAmelio/dixiepost5.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Family",
        music="original sound - dixie",
        caption="@The D’Amelio Show on Hulu out now!!!",
    )

    dixiePost6 = Video(
        userId=6,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/DixieDAmelio/dixiepost6.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Beauty",
        music="suono originale - Valentino",
        caption="#ad 🖤 @valentino #metgala #valentinohautecouture",
    )

    dixiePost7 = Video(
        userId=6,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/DixieDAmelio/dixiepost7.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="Psycho (feat. Rubi Rose) - Dixie",
        caption="make a vid 👀🤍🤍",
    )

    spencerPost1 = Video(
        userId=7,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/SpencerX/spencerpost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Singing",
        music="original sound - Spencer X",
        caption="#ad If you’ve got a JBL, you already know 🔊 lets see what you can duet w/ me #JBLPartyBox @JBLAudio",
    )

    spencerPost2 = Video(
        userId=7,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/SpencerX/spencerpost2.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Singing",
        music="original sound - Spencer X",
        caption="Double fire beatbox 🗣🔥🔥🤯",
    )

    spencerPost3 = Video(
        userId=7,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/SpencerX/spencerpost3.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Singing",
        music="original sound - Spencer X",
        caption="Merry Xmas everyone!! 🗣🎄💚",
    )

    spencerPost4 = Video(
        userId=7,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/SpencerX/spencerpost4.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Singing",
        music="original sound - Spencer X",
        caption="#ad Disney Beatbox Edition 🗣️ follow @Disney+ to join in on the #DisneyPlusDay celebration!",
    )

    spencerPost5 = Video(
        userId=7,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/SpencerX/spencerpost5.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Singing",
        music="original sound - Spencer X",
        caption="Sound effect beatbox challenge Vs MYSELF!?! Water edition 🗣💧🤯",
    )

    spencerPost6 = Video(
        userId=7,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/SpencerX/spencerpost6.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Singing",
        music="Water - Spencer X",
        caption="Water music video OUT NOW!! 🗣💧💧💧",
    )

    spencerPost7 = Video(
        userId=7,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/SpencerX/spencerpost7.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Singing",
        music="original sound - Spencer X",
        caption="Beat a long cold (literally) with #Zicam Lozenges! #AD #ZicamZincThatCold #ColdShortening",
    )

    imaginePost1 = Video(
        userId=8,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/ImagineDragons/imaginepost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="Enemy - from the series Arcane League of Legends - Imagine Dragons & JID & Arcane & League Of Legends",
        caption="ENEMY",
    )

    imaginePost2 = Video(
        userId=8,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/ImagineDragons/imaginepost2.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Singing",
        music="Enemy - from the series Arcane League of Legends - Imagine Dragons & JID & Arcane & League Of Legends",
        caption="in case you missed our performance at The Game Awards... check out full video on YouTube",
    )

    imaginePost3 = Video(
        userId=8,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/ImagineDragons/imaginepost3.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="Enemy - from the series Arcane League of Legends - Imagine Dragons & JID & Arcane & League Of Legends",
        caption="ENEMY - out now",
    )

    imaginePost4 = Video(
        userId=8,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/ImagineDragons/imaginepost4.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Singing",
        music="Follow You - Imagine Dragons",
        caption="Dan with our friends @berywambeatbox",
    )

    imaginePost5 = Video(
        userId=8,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/ImagineDragons/imaginepost5.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Singing",
        music="original sound - Imagine Dragons",
        caption="The way you smile.",
    )

    imaginePost6 = Video(
        userId=8,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/ImagineDragons/imaginepost6.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="Follow You - Imagine Dragons",
        caption="When Sammich steals my sock! @benamckee_",
    )

    imaginePost7 = Video(
        userId=8,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/ImagineDragons/imaginepost7.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Music",
        music="Follow You - Imagine Dragons",
        caption="spring vibes #followyou",
    )

    jasonPost1 = Video(
        userId=9,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/JasonDerulo/jasonpost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="In Da Getto - J Balvin & Skrillex",
        caption="Couldn’t find a Halloween costume that fit @twistedpennywise @Ghostface Papi @Freddy Krueger @Jeremy Olenski #happyhalloween",
    )

    jasonPost2 = Video(
        userId=9,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/JasonDerulo/jasonpost2.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="Jr Stit x bruno mars x adele - Margaux_lbt",
        caption="We all had our personal wins & losses in 2021 most of which seemed like a movie rather than life… well here’s to more memories we’ll create in 2022",
    )

    jasonPost3 = Video(
        userId=9,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/JasonDerulo/jasonpost3.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="original sound - Jason Derulo",
        caption="#answer to neatofindsplus 2nd most viewed this year #2021recap",
    )

    jasonPost4 = Video(
        userId=9,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/JasonDerulo/jasonpost4.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="Acapulco - Jason Derulo",
        caption="#answer to nasrinmiah786 4th most viewed this year #2021recap @jena",
    )

    jasonPost5 = Video(
        userId=9,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/JasonDerulo/jasonpost5.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="Teach Me How To Dougie - Classics Reborn",
        caption="#answer to neatofindsplus 7th most viewed this year #2021recap",
    )

    jasonPost6 = Video(
        userId=9,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/JasonDerulo/jasonpost6.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="Please Don't Go - Mike Posner",
        caption="8th most viewed this year #2021recap",
    )

    jasonPost7 = Video(
        userId=9,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/JasonDerulo/jasonpost7.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Entertainment",
        music="brutal - Olivia Rodrigo",
        caption="Has anyone seen @skylar_derulo 🧐@itswillcarmack",
    )

    michaelPost1 = Video(
        userId=10,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/MichaelLe/michaelpost1.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="original sound - Michael Le",
        caption="#ad Been hearing in 4D since i got these ✨😂 @JBLAudio #TourOne",
    )

    michaelPost2 = Video(
        userId=10,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/MichaelLe/michaelpost2.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Lifestyle",
        music="Alex and his gf are racist - ✌︎︎",
        caption="crazy year its been😳😂",
    )

    michaelPost3 = Video(
        userId=10,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/MichaelLe/michaelpost3.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="Rollin' Rolls - TikTok Remix - Charmin",
        caption="Charmin’s new bop makin’ my thang move. Duet me with your best 👀😂#ToiletTunesdance  #CharminPartner",
    )

    michaelPost4 = Video(
        userId=10,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/MichaelLe/michaelpost4.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="Own Brand Freestyle - FelixThe1st & Dreya Mac",
        caption="@itsmetiffany 🔥 dc: @dreyamac",
    )

    michaelPost5 = Video(
        userId=10,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/MichaelLe/michaelpost5.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="Astronaut in The Ocean x Ci Ci Cimoy Cimoy - yrslv",
        caption="sexy jutsu is sasukes only weakness😏 @itskingchris",
    )

    michaelPost6 = Video(
        userId=10,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/MichaelLe/michaelpost6.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="INDUSTRY BABY - Lil Nas X & Jack Harlow",
        caption="THANK YOU GUYS FOR 50M!! In celebration, heres a new anime series Ill be doing for every M we get (: enjoy",
    )

    michaelPost7 = Video(
        userId=10,
        videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/MichaelLe/michaelpost7.mp4",
        s3Name="s3Name",
        videoType="comment",
        topic="Dance",
        music="Love Nwantiti(Dance Ver) - FYP🖤🇲🇺",
        caption="lovin the vibes✨ dc @Tracy Joseph",
    )

    # usimPost1 = Video(
    #     userId=11,
    #     videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/Usim/usimpost1.mp4",
    #     s3Name="s3Name",
    #     videoType="comment",
    #     topic="Dance",
    #     music="Alors on danse - Slowed - Stromae",
    #     caption="Tag who you see🙈 // Insta: Usimmango💕",
    # )

    # djprecisePost1 = Video(
    #     userId=12,
    #     videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/DJPrecise/djprecisepost1.mp4",
    #     s3Name="s3Name",
    #     videoType="comment",
    #     topic="Music",
    #     music="original sound - DJ Precise",
    #     caption="What do you think?? 👀 #beggin #maneskin #djtiktok #dj",
    # )

    # rosePost1 = Video(
    #     userId=13,
    #     videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/Rose/rosepost1.mp4",
    #     s3Name="s3Name",
    #     videoType="comment",
    #     topic="Dance",
    #     music="WAP（feat. Megan Thee Stallion） - Cardi B",
    #     caption="#10M !! Here you go🙄",
    # )

    # kyliePost1 = Video(
    #     userId=14,
    #     videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/KylieJenner/kyliepost1.mp4",
    #     s3Name="s3Name",
    #     videoType="comment",
    #     topic="Dance",
    #     music="OUT WEST (feat. Young Thug) - JACKBOYS & Travis Scott",
    #     caption="out west ???",
    # )

    # dwaynePost1 = Video(
    #     userId=15,
    #     videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/DwayneJohnson/dwaynepost1.mp4",
    #     s3Name="s3Name",
    #     videoType="comment",
    #     topic="Storytelling",
    #     music="ROXANNE - Arizona Zervas",
    #     caption="I'll bring the rock, you bring the sand. #ThatsSoTikTok #MisheardLyrics @candyken",
    # )

    # geniusPost1 = Video(
    #     userId=16,
    #     videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/Genius/geniuspost1.mp4",
    #     s3Name="s3Name",
    #     videoType="comment",
    #     topic="Singing",
    #     music="Wrong - Luh Kel",
    #     caption="@realtrillkel doesn't even need AutoTune 🔥🔥🔥 #verified #wrong",
    # )

    # urbanPost1 = Video(
    #     userId=17,
    #     videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/UrbanTheory/urbanpost1.mp4",
    #     s3Name="s3Name",
    #     videoType="comment",
    #     topic="Dance",
    #     music="Cradles - Sub Urban",
    #     caption="Always remember the 5th of november 🎭 💥 #urban #urbantheory #geometryart #tuttingdance #vforvendetta #dark #5thnovember",
    # )

    # barstooluPost1 = Video(
    #     userId=18,
    #     videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/Barstoolu/barstoolupost1.mp4",
    #     s3Name="s3Name",
    #     videoType="comment",
    #     topic="Entertainment",
    #     music="Earth - Lil Dicky",
    #     caption="Imagine seeing Lil Dicky in your Zoom University class (via ig/joe_more96)",
    # )

    # edPost1 = Video(
    #     userId=19,
    #     videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/EdSheeran/edsheeranpost1.mp4",
    #     s3Name="s3Name",
    #     videoType="comment",
    #     topic="Singing",
    #     music="original sound - Jerrica Alyssa",
    #     caption="#duet with jerricaalyssa Loving these duet vids #EqualsAlbum",
    # )

    # newrulesbandPost1 = Video(
    #     userId=20,
    #     videoURL="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/NewRulesBand/newrulesbandpost1.mp4",
    #     s3Name="s3Name",
    #     videoType="comment",
    #     topic="Singing",
    #     music="Beggin' - Måneskin",
    #     caption="Boyband meets your FYP 🤝 #maneskin #beggin #fyp",
    # )

    db.session.add(addisonPost1)
    db.session.add(charliPost1)
    db.session.add(zachPost1)
    db.session.add(bellaPost1)
    db.session.add(willPost1)
    db.session.add(dixiePost1)
    db.session.add(spencerPost1)
    db.session.add(imaginePost1)
    db.session.add(jasonPost1)
    db.session.add(michaelPost1)

    db.session.add(addisonPost2)
    db.session.add(charliPost2)
    db.session.add(zachPost2)
    db.session.add(bellaPost2)
    db.session.add(willPost2)
    db.session.add(dixiePost2)
    db.session.add(spencerPost2)
    db.session.add(imaginePost2)
    db.session.add(jasonPost2)
    db.session.add(michaelPost2)

    db.session.add(addisonPost3)
    db.session.add(charliPost3)
    db.session.add(zachPost3)
    db.session.add(bellaPost3)
    db.session.add(willPost3)
    db.session.add(dixiePost3)
    db.session.add(spencerPost3)
    db.session.add(imaginePost3)
    db.session.add(jasonPost3)
    db.session.add(michaelPost3)

    db.session.add(addisonPost4)
    db.session.add(charliPost4)
    db.session.add(zachPost4)
    db.session.add(bellaPost4)
    db.session.add(willPost4)
    db.session.add(dixiePost4)
    db.session.add(spencerPost4)
    db.session.add(imaginePost4)
    db.session.add(jasonPost4)
    db.session.add(michaelPost4)

    db.session.add(addisonPost5)
    db.session.add(charliPost5)
    db.session.add(zachPost5)
    db.session.add(bellaPost5)
    db.session.add(willPost5)
    db.session.add(dixiePost5)
    db.session.add(spencerPost5)
    db.session.add(imaginePost5)
    db.session.add(jasonPost5)
    db.session.add(michaelPost5)

    db.session.add(addisonPost6)
    db.session.add(charliPost6)
    db.session.add(zachPost6)
    db.session.add(bellaPost6)
    db.session.add(willPost6)
    db.session.add(dixiePost6)
    db.session.add(spencerPost6)
    db.session.add(imaginePost6)
    db.session.add(jasonPost6)
    db.session.add(michaelPost6)

    db.session.add(addisonPost7)
    db.session.add(charliPost7)
    db.session.add(zachPost7)
    db.session.add(bellaPost7)
    db.session.add(willPost7)
    db.session.add(dixiePost7)
    db.session.add(spencerPost7)
    db.session.add(imaginePost7)
    db.session.add(jasonPost7)
    db.session.add(michaelPost7)

    # db.session.add(usimPost1)
    # db.session.add(djprecisePost1)
    # db.session.add(rosePost1)
    # db.session.add(kyliePost1)
    # db.session.add(dwaynePost1)
    # db.session.add(geniusPost1)
    # db.session.add(urbanPost1)
    # db.session.add(barstooluPost1)
    # db.session.add(edPost1)
    # db.session.add(newrulesbandPost1)

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
