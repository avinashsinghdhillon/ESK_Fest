const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Events collection and inserts the events below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/esk"
);

const artistSeed = [
  {
    artistID: 0,
    artistName: "",
    artistPicture: "",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 1,
    artistName: "Adrian Reed Gospel Mass",
    artistYoutube: "https://www.youtube.com/watch?time_continue=55&v=IrcSmpOs-EA"
  },
  {
    artistID: 2,
    artistName: "Andre Hayward",
    artistPicture: "https://eastsidemusic.com/wp-content/uploads/2017/01/528798_4073025378524_1688142703_n.jpg",
    artistAbout: "",
    artistSite: "https://eastsidemusic.com/meet-the-teachers/andre-hayward/",
    artistSpotify: "https://open.spotify.com/track/1XEOnfdtuJRmvdG1jvpGuW",
    artistYoutube: "https://www.youtube.com/watch?v=GKCpaLR_r14&list=PLh6cmoyN1yneZ4Sb1zrLhF7bhLmDUU-nB&index=5"
  },
  {
    artistID: 3,
    artistName: "Andrea Dawson",
    artistPicture: "http://andrea-dawson.com/img/thumbs/promo1.jpg",
    artistAbout: "",
    artistSite: "http://andrea-dawson.com/",
    artistSpotify: "",
    artistYoutube: "https://youtu.be/VkBlf95HRCw"
  },
  {
    artistID: 4,
    artistName: "Barbara Lynn",
    artistPicture: "http://blog.ponderosastomp.com/wp-content/uploads/2015/06/BarbaraLynn63.jpg",
    artistAbout: "",
    artistSite: "https://www.chron.com/entertainment/music/article/Barbara-Lynn-receives-NEA-honor-13010469.php",
    artistSpotify: "https://open.spotify.com/track/5CEREcGR5WaLt40YzTQ62e",
    artistYoutube: "https://www.youtube.com/watch?v=U6Y7sEO7Low"
  },
  {
    artistID: 5,
    artistName: "Big Jack Williams",
    artistPicture: "https://media.licdn.com/dms/image/C4E03AQGwVU7Ffw7zTw/profile-displayphoto-shrink_800_800/0?e=1570665600&v=beta&t=OeRR8kBQbV7bpY_avz6zSSCd_HduvrhKEst12oB7lYg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 6,
    artistName: "Bill Campbell",
    artistPicture: "https://i.ytimg.com/vi/WSicdduH0ds/hqdefault.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 7,
    artistName: "Birdlegg",
    artistPicture: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/12079084_1070606249650755_6408743538498699032_n.jpg?_nc_cat=108&_nc_oc=AQkEzUvJVNIhnVEvLIh1QyPhloebqRw4BvLKLHANZQVITKedCJ6yAlc2Sgy3HMJvvXo&_nc_ht=scontent-ort2-1.xx&oh=0ed7d899fd35c5f57bc3a797fb3d4b44&oe=5DE67C60",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "https://open.spotify.com/track/69CuiaKEedGZ91mvdzysZq",
    artistYoutube: "https://www.youtube.com/watch?v=tIq_tbz7Gf8"
  },
  {
    artistID: 8,
    artistName: "Bloodest Saxophone",
    artistPicture: "https://scontent.faus1-1.fna.fbcdn.net/v/t1.0-9/29597822_1700496680039606_9109238817085062677_n.jpg?_nc_cat=111&_nc_oc=AQkVvwPXFZD_WQelg_SHz8hnCJ98Ji-LGHKmZdefLMiy7USyF9RmWbo4oOrJyZZtyDPbahCGvWKCwLW9WfAxPH5S&_nc_ht=scontent.faus1-1.fna&oh=1930b359963f9f155f1c7d3d8782b8b1&oe=5DD5250E",
    artistAbout: "",
    artistSite: "http://bloodsax.main.jp/?fbclid=IwAR1ptCsXR-CEAtyKj6qGp70J1X__tI76dOSxdQw3bpGr9OCSnwQuiRycD1s",
    artistSpotify: "https://open.spotify.com/track/1wSL3lQHdSoGwtFbOis0Zm",
    artistYoutube: "https://www.youtube.com/watch?v=pqI7QIsJkR4"
  },
  {
    artistID: 9,
    artistName: "Blues Jazz Plus",
    artistPicture: "",
    artistAbout: "The New School of Music is a 501(c)(3) nonprofit community music school founded in 2013. We provide world-class jazz & blues masterclasses, workshops, and concerts in the Austin area. Previous clinicians/ performers include Don Braden, Andre Hayward, Tom Brechtlein, Eddie Gomez Trio, Alex Coke, Murali Coryell, Ernie Durawa, Mike Flanigin, Sue Foley, Chris Layton, and Denny Freeman.",
    artistSite: "https://www.newschoolofmusic.net/",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 10,
    artistName: "Brown Sugar",
    artistPicture: "https://scontent.faus1-1.fna.fbcdn.net/v/t1.0-9/41788147_1679291582179809_6125589121852243968_n.jpg?_nc_cat=101&_nc_oc=AQlh9DN2fRZSb4K9a6jnla5lNXpFHM1CLCo9YmE3Wp8UY-esaZPWiUuPSHJCk3q-jMrmnkHrfowX2iaZBpGoC7_0&_nc_ht=scontent.faus1-1.fna&oh=0f366e338a3134f8739bb11426608c54&oe=5DE0509F",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 11,
    artistName: "Burley Manor Jr",
    artistPicture: "",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 12,
    artistName: "Carl Weathersby",
    artistPicture: "https://photos.bandsintown.com/thumb/8319855.jpeg",
    artistAbout: "",
    artistSite: "http://www.carlweathersby.org/",
    artistSpotify: "https://open.spotify.com/track/7Jxp79DHtduKJ7YPo4lDaC",
    artistYoutube: "https://youtu.be/oLfkXAeboKA"
  },
  {
    artistID: 13,
    artistName: "Cecil Hogan",
    artistPicture: "",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 14,
    artistName: "Chuck Rainey",
    artistPicture: "http://chuckrainey.com/wp-content/uploads/2015/03/3675748_orig.jpg",
    artistAbout: "",
    artistSite: "https://chuckrainey.com/",
    artistSpotify: "https://open.spotify.com/track/2uqr9arJdbS5Huef2eFJol",
    artistYoutube: "https://www.youtube.com/watch?v=O2ahiZvCP8o&list=OLAK5uy_n4-JORxnqU0ZzwMNmJHMOqWRU6SZNa2JA&index=3"
  },
  {
    artistID: 15,
    artistName: "Classie Ballou",
    artistPicture: "http://www.absmag.fr/wp-content/uploads/2017/08/classieballou-bis.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "https://open.spotify.com/track/4Q0oqa1l7WJXmtGaZbzPS0",
    artistYoutube: ""
  },
  {
    artistID: 16,
    artistName: "Corey Keller",
    artistPicture: "https://scontent.fftw1-1.fna.fbcdn.net/v/t31.0-8/12194736_794810897294553_7856540980212221690_o.jpg?_nc_cat=111&_nc_oc=AQlb3hmwlcihFpIY4VqjvXKr-kQbwprniD3cOjq087gBa4ynWdFt5k_jsuhPw_q369k&_nc_ht=scontent.fftw1-1.fna&oh=62cb60eae155bd641b20aa19556dcd60&oe=5DA4D33C",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: "https://youtu.be/C5CG5qe9wac"
  },
  {
    artistID: 17,
    artistName: "Crystal Thomas",
    artistPicture: "https://cdbaby.name/artist/c/r/crystalthomas3.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "https://open.spotify.com/track/4r17N5j0GXjbHFgUY5Dd1o",
    artistYoutube: ""
  },
  {
    artistID: 18,
    artistName: "Don Braden",
    artistPicture: "http://www.donbraden.com/images/DB%20by%20Will%20Hauser_6499%20E1cm.jpg",
    artistAbout: "",
    artistSite: "http://www.donbraden.com/",
    artistSpotify: "https://open.spotify.com/track/7Gq3gnDaQK8pfP8pnPjoG4",
    artistYoutube: ""
  },
  {
    artistID: 19,
    artistName: "Eastside Syndicate",
    artistPicture: "https://gp1.wac.edgecastcdn.net/802892/http_public_production/artists/images/3084710/original/resize:248x186/crop:x142y44w724h542/hash:1467395310/1362527457_488414221199879_1214049152_n.jpg?1467395310",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 20,
    artistName: "Ernie Durawa",
    artistPicture: "https://www.txstate.edu/cachee80a581ae26788da9181af1af4f44a23/imagehandler/scaler/gato-docs.its.txstate.edu/jcr:2fe47598-306e-4309-bc20-2c751e64f590/1965_or_1966sm.jpg?mode=fit&width=432",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 21,
    artistName: "Gregg Smith",
    artistPicture: "https://imagery.zoogletools.com/u/261759/e8756c09497185f526d97eb42060b0d7107eedbb/photo/grsmith-143.jpg",
    artistAbout: "",
    artistSite: "https://greggasmithmusic.com/home",
    artistSpotify: "",
    artistYoutube: "https://youtu.be/YW-lSDjkS1I"
  },
  {
    artistID: 22,
    artistName: "Hash Brown",
    artistPicture: "https://s.hdnux.com/photos/66/76/45/14412124/3/920x920.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 23,
    artistName: "James 'Killer Bug' Morris",
    artistPicture: "https://scontent.faus1-1.fna.fbcdn.net/v/t1.0-9/54515484_10156174120792514_4866167022603468800_n.jpg?_nc_cat=100&_nc_oc=AQk8cKMN8RpmC3TA-y6VrJSnxKK04eXL2xkKcuGmjR7ULMn-LVlfKZS8X_5ym93UmkaQFTpt2dan4QRYabhk_7qs&_nc_ht=scontent.faus1-1.fna&oh=44ce78f1b14f0fd702815b9bcaabab44&oe=5DE7A1B5",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 24,
    artistName: "James Fenner",
    artistPicture: "",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 25,
    artistName: "Jason Moeller",
    artistPicture: "https://scontent.faus1-1.fna.fbcdn.net/v/t31.0-8/13112801_1082616131801639_761232208215079285_o.jpg?_nc_cat=107&_nc_oc=AQnCb1TmJKj4K8cqLnPpmj8eq1E1acla-hy4HZqHDw1HO_70j0BWssciz27eVwC3KOyhNWyVoSGJY_1Y-5HzK2cD&_nc_ht=scontent.faus1-1.fna&oh=f6a03153ebb893941d3e24d55bbf0dae&oe=5DEAD0D4",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 26,
    artistName: "Jewel Brown",
    artistPicture: "http://bluesjunctionproductions.com/yahoo_site_admin/assets/images/10943844_564746530327408_5582291932400111792_n.190130132_std.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "https://open.spotify.com/track/1ZZ4xYTORrkU9gY0isK6OR",
    artistYoutube: "https://www.youtube.com/watch?v=MegutC1rUok"
  },
  {
    artistID: 27,
    artistName: "Johnny LaTouf, MC",
    artistPicture: "https://i1.sndcdn.com/artworks-000239007989-hz6zfb-t500x500.jpg",
    artistAbout: "Johnny LaTouf is the owner of Skylark Lounge, a generous supporter of the Eastside Kings Festival and blues musicians.",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 28,
    artistName: "Johnny Moeller",
    artistPicture: "https://scontent.faus1-1.fna.fbcdn.net/v/t31.0-8/13112801_1082616131801639_761232208215079285_o.jpg?_nc_cat=107&_nc_oc=AQnCb1TmJKj4K8cqLnPpmj8eq1E1acla-hy4HZqHDw1HO_70j0BWssciz27eVwC3KOyhNWyVoSGJY_1Y-5HzK2cD&_nc_ht=scontent.faus1-1.fna&oh=f6a03153ebb893941d3e24d55bbf0dae&oe=5DEAD0D4",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 29,
    artistName: "Kaz Kazanoff",
    artistPicture: "https://scontent.faus1-1.fna.fbcdn.net/v/t1.0-9/49739111_10157198870228463_5685837152810696704_n.jpg?_nc_cat=107&_nc_oc=AQnNhb5bFIKlh3ncO0LxRpi6RhOPZQ4Vj74wd3kar1xnFu9Yrne4c5M3c16GgQastDMomdMUp4nu9r5xbQMTd29r&_nc_ht=scontent.faus1-1.fna&oh=c84509fd73c3bf93f4cb59f5224030d3&oe=5DE3F6F9",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 30,
    artistName: "Keith Dunn",
    artistPicture: "https://scontent.faus1-1.fna.fbcdn.net/v/t1.0-9/43023513_1699379583504342_446324020623704064_n.jpg?_nc_cat=108&_nc_oc=AQla9B_S1HD-S0v0PSOklhMFM98OoXcf8okMXB45E-S0vaEtQL3Wxmn0IoP3lCMWQTeGFOdc9Jx0_p5i-MxWVtqN&_nc_ht=scontent.faus1-1.fna&oh=54fc3b5978b0ab4f4f9656dc0e052384&oe=5DD814B1",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "https://open.spotify.com/track/6BIpLmms6hIdSFI3GNTw8J",
    artistYoutube: "https://www.youtube.com/watch?v=8vM0Vq_v72c"
  },
  {
    artistID: 31,
    artistName: "Lady D",
    artistPicture: "https://scontent.faus1-1.fna.fbcdn.net/v/t31.0-8/12885732_1680533962213496_3774963263196003649_o.jpg?_nc_cat=110&_nc_oc=AQmI1-VSNiG3wBOt6X3V5aZUYKSP976v9bMvKxjlCDII8kxj6M5LLNjwGBsecJHPpnqP6oS-ZkAvP3Uiq52iGotF&_nc_ht=scontent.faus1-1.fna&oh=d6138f0657f8db2481ec0433990226b9&oe=5DE27882",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: "https://www.facebook.com/ThaLadyD/videos/1700878136845745/"
  },
  {
    artistID: 32,
    artistName: "Lavelle White",
    artistPicture: "https://scontent.faus1-1.fna.fbcdn.net/v/t1.0-9/10404253_252850634902844_9000365098548372968_n.jpg?_nc_cat=109&_nc_oc=AQl3Cq60pjXkCtq-Z1gdNI-BoJrfEtXXak6sXgl12TOFUXcmcHZW3aOlWO51mwoXRZ41E_artfZpzR29vgja45AO&_nc_ht=scontent.faus1-1.fna&oh=4d39625314b2c089ff4b30ba672831d7&oe=5DE44631",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "https://open.spotify.com/track/7lOV91qKP6qRTrE5Hg9HCb",
    artistYoutube: ""
  },
  {
    artistID: 33,
    artistName: "Leroy Williams",
    artistPicture: "",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 34,
    artistName: "Lucky Peterson",
    artistPicture: "https://scontent.faus1-1.fna.fbcdn.net/v/t1.0-9/57080006_10156221375977514_2352383691444977664_n.jpg?_nc_cat=105&_nc_oc=AQlslQ3Cpi5DdFJ-DsVqLx37SSQ2erLuucoJsEh__lE4Qx7nLuEbSHHHQnqIuCIIBrKpnaHACbIVqf8IitUHs_gI&_nc_ht=scontent.faus1-1.fna&oh=221fe7cd4a79874dee4269cacbf21f38&oe=5DA11807",
    artistAbout: "",
    artistSite: "https://luckypeterson.com/",
    artistSpotify: "https://open.spotify.com/track/6QSH6q90XNj5VDi52qpe8B",
    artistYoutube: "https://www.youtube.com/watch?v=TI5GHHYE6Ko&list=PLYc0FapKFwGr4TvMHx_EqeSWnufyIEVLG&index=8"
  },
  {
    artistID: 35,
    artistName: "Mac McIntosh",
    artistPicture: "https://pbs.twimg.com/media/DsVLjHGU0AAgAcd.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 36,
    artistName: "Margaret Wright",
    artistPicture: "http://static.wixstatic.com/media/72e1d1_a4f3ad6085e942f1b88281a9593b991d.jpg/v1/fill/w_259,h_348,al_c,q_80,usm_0.66_1.00_0.01/72e1d1_a4f3ad6085e942f1b88281a9593b991d.webp",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 37,
    artistName: "Matthew Robinson",
    artistPicture: "https://scontent.fftw1-1.fna.fbcdn.net/v/t1.0-9/41691143_1679291835513117_510880501523808256_n.jpg?_nc_cat=101&_nc_oc=AQlD3lKhTqmStjVzYBXB66EV0sSSbhu--ZFNApXulGS2CrD6O1CbH2IK2mSyWSOgVlM&_nc_ht=scontent.fftw1-1.fna&oh=980f1dc70b8e376f4cec940be15c314e&oe=5DEC3D2C",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: "https://youtu.be/piF1zkw8iKA"
  },
  {
    artistID: 38,
    artistName: "Mel Davis",
    artistPicture: "https://bluesvibe.files.wordpress.com/2014/01/mel-davis-1.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 39,
    artistName: "Mike Buck",
    artistPicture: "https://image-ticketfly.imgix.net/00/01/83/50/23-og.jpg?w=950&h=690",
    artistAbout: "Mike is one of the owners of Antone's Record Store, a generous supporter of the Eastside Kings Festival.",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 40,
    artistName: "Mike Keller",
    artistPicture: "https://scontent.fftw1-1.fna.fbcdn.net/v/t31.0-8/12194736_794810897294553_7856540980212221690_o.jpg?_nc_cat=111&_nc_oc=AQlb3hmwlcihFpIY4VqjvXKr-kQbwprniD3cOjq087gBa4ynWdFt5k_jsuhPw_q369k&_nc_ht=scontent.fftw1-1.fna&oh=62cb60eae155bd641b20aa19556dcd60&oe=5DA4D33C",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: "https://youtu.be/KD3uE5vqMTo"
  },
  {
    artistID: 41,
    artistName: "Murali Coryell",
    artistPicture: "",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 42,
    artistName: "Nick Connolly",
    artistPicture: "https://austinplaymeimyours.files.wordpress.com/2011/05/img_3088.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 43,
    artistName: "Nico Leophonte",
    artistPicture: "https://scontent.fftw1-1.fna.fbcdn.net/v/t1.0-9/28795107_1494265750696510_189629665181171712_n.jpg?_nc_cat=101&_nc_oc=AQnxeUIPQmlKAOYK4SvxpPIR8EZ9oikOnYxHxhpE1sRKvJbGfvruLab-6jTl-IrYZ04&_nc_ht=scontent.fftw1-1.fna&oh=97ffcc0720ea57c23feeb25c03c777c3&oe=5DECBA4A",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 44,
    artistName: "Orange Jefferson",
    artistPicture: "https://scontent.fftw1-1.fna.fbcdn.net/v/t1.0-9/40665422_10155803952627253_8320881369378979840_o.jpg?_nc_cat=109&_nc_oc=AQktxY4_ZDG1u8qlmRtWHH7fH0TN3DlP2hHReqNhAz38_uzMR0t0RcIXWU9nD0Xum7w&_nc_ht=scontent.fftw1-1.fna&oh=46ef1a7bc1d6f15bc364e06fcab3910f&oe=5DA1AA50",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 45,
    artistName: "PeeWee Calvin",
    artistPicture: "https://scontent.fftw1-1.fna.fbcdn.net/v/t31.0-8/16722805_10154321604117514_4810332527603151996_o.jpg?_nc_cat=100&_nc_oc=AQkoCqnxcBLn-mmPcLngsGq-gmfYB_j5YqFOgXfE1Unzk7H_CX81Il4YOd4JfmcbHcA&_nc_ht=scontent.fftw1-1.fna&oh=4fad8ec426183e2c4798d972a63bef7d&oe=5DD474DD",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 46,
    artistName: "Pierre Pelegrin",
    artistPicture: "http://www.absmag.fr/wp-content/uploads/2019/04/Pierre.jpg",
    artistAbout: "Pierre and his wife Justine are the owners of Justine's Brasserie, a generous supporter of the Eastside Kings Festival. He is also a member of the Eastside Kings Foundation board of directors.",
    artistSite: "https://www.justines1937.com/",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 47,
    artistName: "Ray Reed",
    artistPicture: "https://www.star-telegram.com/news/local/community/fort-worth/lfydjw/picture85259857/alternates/FREE_768/Ray%20Reed",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 48,
    artistName: "RL Griffin",
    artistPicture: "https://scontent.fftw1-1.fna.fbcdn.net/v/t1.0-9/67818496_10156483257332514_515492879787884544_n.jpg?_nc_cat=104&_nc_oc=AQmD7ZcGoBl9_he_3kmTcrogX-eZ16DA7XkBFtTBktqQHa1ZUs41OR09n4rScIjjexw&_nc_ht=scontent.fftw1-1.fna&oh=775976dadddfb7412c878556e3f97591&oe=5DE183C4",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: "https://www.youtube.com/watch?v=uYvBmXwipC0"
  },
  {
    artistID: 49,
    artistName: "Roger Wood, MC",
    artistPicture: "https://scontent.faus1-1.fna.fbcdn.net/v/t31.0-8/457519_10150889025972514_564556137_o.jpg?_nc_cat=111&_nc_oc=AQla2TatyguyOhJla_QJdrHqogVKiOcyu4JM74Bt_5Np6S-9DxksmcskVJnT2VTOjKu5AsSwDJ50TcervOQMGwbc&_nc_ht=scontent.faus1-1.fna&oh=07a333b1576d2ccc8aaaf51ce29ca5f8&oe=5DE653A8",
    artistAbout: "Dr. Roger Wood is a music author, a Blues afficionado, and a huge supporter of the Eastside Kings Festival. We are grateful to Roger for being an MC for the festival.",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 50,
    artistName: "Scott Bock, MC",
    artistPicture: "../../client/images/Scott M. Bock Headshot 2.jpg",
    artistAbout: "Scott Bock is a writer for Living Blues magazine. His support of the Eastside Kings Festival is greatly appreciated, and we are grateful to him for being an MC year after year.",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 51,
    artistName: "Shake Anderson Band",
    artistPicture: "https://static1.squarespace.com/static/586154f7d1758e4fc99b0b2d/58769937f7e0ab30297062a3/58769942a5790a29d2aa1311/1484168177535/facebook+closeup+cropped.jpg?format=1000w",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: "https://www.youtube.com/watch?v=RVCywyqBdYA&feature=youtu.be"
  },
  {
    artistID: 52,
    artistName: "Shimi",
    artistPicture: "https://scontent.fftw1-1.fna.fbcdn.net/v/t1.0-9/34644218_10155566884297514_2398727535325085696_n.jpg?_nc_cat=109&_nc_oc=AQn9WbaxUjn416A97HnjkYsbTgVRqSAHgc2XWllVdfpld3UOCuNXEywHwB1NDTes9Zc&_nc_ht=scontent.fftw1-1.fna&oh=755aef72401974d5b4f9685e278bea06&oe=5DD87B3D",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 53,
    artistName: "Shuji 'Apple Juice' Sato",
    artistPicture: "http://smashingmag.com/tour/trphoto/sama/060429bloodsax/img_8878.jpg",
    artistAbout: "",
    artistSite: "http://bloodsax.main.jp/?fbclid=IwAR1ptCsXR-CEAtyKj6qGp70J1X__tI76dOSxdQw3bpGr9OCSnwQuiRycD1s",
    artistSpotify: "",
    artistYoutube: "https://www.youtube.com/watch?v=pqI7QIsJkR4"
  },
  {
    artistID: 54,
    artistName: "Smiling Bobby",
    artistPicture: "https://scontent.fftw1-1.fna.fbcdn.net/v/t31.0-8/10497474_750348201724024_7347258931308411427_o.jpg?_nc_cat=106&_nc_oc=AQlwKLkHE_SUuKsDy_xWH5HcpsKi0AdpzlRF8CfYmT6htGdn11K4nRZ4b5OpvBhe1vg&_nc_ht=scontent.fftw1-1.fna&oh=6530de5cd631ac2b7a225aba3db31b8f&oe=5DE30EE4",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 55,
    artistName: "Soul Man Sam",
    artistPicture: "https://image-ticketfly.imgix.net/00/02/66/81/77-og.jpg?w=500&h=334&fit=crop&crop=top",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: "https://youtu.be/bkW8DTXjn9E"
  },
  {
    artistID: 56,
    artistName: "Tamara Mack & The Mack Daddies",
    artistPicture: "https://scontent.fftw1-1.fna.fbcdn.net/v/t1.0-9/47393038_1953714551589315_8039045593940623360_n.jpg?_nc_cat=108&_nc_oc=AQmolsb-mwuu2SRzw9JLR9cdw1M_pSFetIleN9szXgoWw27t74c5rg2PWaACYX6jEzc&_nc_ht=scontent.fftw1-1.fna&oh=c4d365655c15b685bf5a1eb73d9ef8dc&oe=5DA2B02B",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: "https://www.facebook.com/mackdaddymusic/videos/1033365060177569/"
  },
  {
    artistID: 57,
    artistName: "The Blues Specialists",
    artistPicture: "https://scontent.fftw1-1.fna.fbcdn.net/v/t1.0-9/67773355_10212935051964554_3237415252438024192_o.jpg?_nc_cat=100&_nc_oc=AQnqUjVJJO1lzqR9O6kliHJReRUX4pJHTq9DvdXZTXonrghZBmbZvLfFQ9vpSuntefI&_nc_ht=scontent.fftw1-1.fna&oh=4392a6a481001614185b54f9990e8e0f&oe=5DDEFD08",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 58,
    artistName: "The Gladiators",
    artistPicture: "http://www.bogfire.com/img/itw_4_lg.jpg",
    artistAbout: "House band at the Silver Slipper in Houston, TX.",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 59,
    artistName: "Tom Brechtlein",
    artistPicture: "",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 60,
    artistName: "TuTu Jones Band",
    artistPicture: "https://i2.wp.com/www.tolbertsrestaurant.com/wp-content/uploads/2019/03/tutu.jpg?fit=800%2C533&ssl=1",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "https://open.spotify.com/track/3T1iXyK8LzxE4QYbU30z2N",
    artistYoutube: "https://www.youtube.com/watch?v=S8-ubeKgrUg"
  },
  {
    artistID: 61,
    artistName: "Young Corn",
    artistPicture: "http://static.wixstatic.com/media/11749e_d45d3205389a40fbbb29ba9dd6098fcb~mv2_d_4032_2688_s_4_2.jpg/v1/fill/w_631,h_421,al_c,q_80,usm_0.66_1.00_0.01/11749e_d45d3205389a40fbbb29ba9dd6098fcb~mv2_d_4032_2688_s_4_2.webp",
    artistAbout: "",
    artistSite: "http://bloodsax.main.jp/?fbclid=IwAR1ptCsXR-CEAtyKj6qGp70J1X__tI76dOSxdQw3bpGr9OCSnwQuiRycD1s",
    artistSpotify: "",
    artistYoutube: "https://www.youtube.com/watch?v=pqI7QIsJkR4"
  },
  {
    artistID: 62,
    artistName: "Curley Cormier",
    artistPicture: "https://scontent.fftw1-1.fna.fbcdn.net/v/t1.0-9/67599843_10156483232787514_5623817133566722048_n.jpg?_nc_cat=108&_nc_oc=AQk35vJIVSYiCdueRK-ba_v_lJ4VdaFXmbPRbfYemrpX_TQGuVdingUaYd3gGAZAe3g&_nc_ht=scontent.fftw1-1.fna&oh=562d710b89c9d82d0586254366bafdb4&oe=5DD74CDF",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 63,
    artistName: "Mike Milligan",
    artistPicture: "https://scontent.fftw1-1.fna.fbcdn.net/v/t31.0-8/12891038_998578553557629_573424629459222966_o.jpg?_nc_cat=103&_nc_eui2=AeEwZI2n5qdc9I20DtigjyupINt45jAgvP3Kb_42iCs3Xq8kB7rRQAk6z2V0ZOZZ6CAfjIKegTVf86VfOrfnPygENBDo2XEi-R-kdriViy3epg&_nc_oc=AQkh0dPaXun9Y-ugYK9BBOhKn8w8bliXYwkLcHC5J4ozgNXqT6WypKEC2JBhmhBxfp8&_nc_ht=scontent.fftw1-1.fna&oh=d46c001637911e335625cfb6229dff6c&oe=5DE6CE25",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 64,
    artistName: "Joe Hill",
    artistPicture: "",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 65,
    artistName: "Tracy Ki",
    artistPicture: "",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 66,
    artistName: "Charles Similen",
    artistPicture: "",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 67,
    artistName: "Mark Steenis",
    artistPicture: "",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 68,
    artistName: "Mike Stone",
    artistPicture: "",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  }
]

const locationSeed = [
  {
    locationID: 1,
    locationName: "Antone's Night Club",
    locationAddress: "305 E 5th St, Austin, TX 78701",
    locationPhone: "(512) 814-0361",
    locationSite: "https://www.antonesnightclub.com/",
    locationNote: ""
  },

  {
    locationID: 2,
    locationName: "Austin Vintage Guitar Shop",
    locationAddress: "4306 Red River, Austin, TX 78751",
    locationPhone: "(512) 428-9100",
    locationSite: "https://www.austinvintageguitars.com/",
    locationNote: ""
  },

  {
    locationID: 3,
    locationName: "Big Easy Bar & Grill",
    locationAddress: "1806 East 12th Street, Ausitn, TX 78702",
    locationPhone: "(512) 406-9237",
    locationSite: "https://www.theoriginalneworleanspoboygumboshop.com/",
    locationNote: ""
  },

  {
    locationID: 4,
    locationName: "Dozen Street Bar",
    locationAddress: "1808 East 12th Street, Austin, TX 78702",
    locationPhone: "(512) 236-1770",
    locationSite: "https://do512.com/venues/dozen-street",
    locationNote: ""
  },

  {
    locationID: 5,
    locationName: "Full Circle Bar",
    locationAddress: "1810 East 12th Street, Austin, TX 78702",
    locationPhone: "(512) 814-0211",
    locationSite: "http://www.fullcirclebar.com/austin",
    locationNote: ""
  },

  {
    locationID: 6,
    locationName: "Justine's Brasserie",
    locationAddress: "4710 E 5th St, Austin, TX 78702",
    locationPhone: "(512) 385-2900",
    locationSite: "https://www.justines1937.com/",
    locationNote: ""
  },

  {
    locationID: 7,
    locationName: "Mission Possible",
    locationAddress: "1818 East 12th Street, Austin, TX 78702",
    locationPhone: "(512) 494-0953",
    locationSite: "https://mpaustin.org/",
    locationNote: ""
  },

  {
    locationID: 8,
    locationName: "Mission Possible Parking Lot",
    locationAddress: "1100 Chicon, Austin, TX 78702",
    locationPhone: "(512) 494-0953",
    locationSite: "https://mpaustin.org/",
    locationNote: ""
  },

  {
    locationID: 9,
    locationName: "Show Palace",
    locationAddress: "",
    locationPhone: "",
    locationSite: "",
    locationNote: ""
  },

  {
    locationID: 10,
    locationName: "Silver Slipper",
    locationAddress: "3717 Crane St, Houston, TX 77026",
    locationPhone: "(713) 673-9004",
    locationSite: "",
    locationNote: ""
  },

  {
    locationID: 11,
    locationName: "Skylark Lounge",
    locationAddress: "2039 Airport Blvd, Austin, TX 78722",
    locationPhone: "(512) 730-0759",
    locationSite: "http://skylarkaustin.com/",
    locationNote: ""
  },
]

const userSeed = [
  {
    userID: 1,
    userType: "local",
    userEmail: "email@email.com",
    userPassword: "Password1",
    googleID: "",
    firstName: "Test",
    lastName: "User1"
  },
  {
    userID: 2,
    userType: "local",
    userEmail: "1@email.com",
    userPassword: "Password1",
    googleID: "",
    firstName: "Test",
    lastName: "User2"
  },
  {
    userID: 3,
    userType: "local",
    userEmail: "3@email.com",
    userPassword: "Password1",
    googleID: "",
    firstName: "Test",
    lastName: "User3"
  }
]


const eventSeed = [
  {
    eventID: 1,
    startDate: "09/13/2019",
    endDate: "09/13/2019",
    locationID: 1,
    artists: [
      {
        artistID: 8
      }
    ],
    startTime: "20:00",
    endTime: "21:30",
  },

  {
    eventID: 2,
    startDate: "09/13/2019",
    endDate: "09/13/2019",
    locationID: 1,
    artists: [
      {
        artistID: [34, 14, 25, 28, 24, 61]
      }
    ],
    startTime: "21:45",
    endTime: "23:00",
  },

  {
    eventID: 3,
    startDate: "09/13/2019",
    endDate: "09/14/2019",
    locationID: 1,
    artists: [
      {
        artistID: 60
      }
    ],
    startTime: "23:15",
    endTime: "1:00",
  },

  {
    eventID: 4,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 2,
    artists: [
      {
        artistID: [50, 14, 15, 61, 13, 54, 53]
      }
    ],
    startTime: "13:00",
    endTime: "14:00",
  },

  {
    eventID: 5,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 8,
    artists: [
      {
        artistID: 49
      }
    ],
    startTime: "17:20",
    endTime: "20:00",
  },

  {
    eventID: 6,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 8,
    artists: [
      {
        artistID: 60
      }
    ],
    startTime: "17:20",
    endTime: "18:30",
  },

  {
    eventID: 7,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 8,
    artists: [
      {
        artistID: [34, 14, 28, 25, 24, 17, 29]
      }
    ],
    startTime: "19:00",
    endTime: "20:00",
  },

  {
    eventID: 8,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 5,
    artists: [
      {
        artistID: 27
      }
    ],
    startTime: "16:30",
    endTime: "21:30",
  },

  {
    eventID: 9,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 5,
    artists: [
      {
        artistID: 36
      }
    ],
    startTime: "16:30",
    endTime: "17:30",
  },

  {
    eventID: 10,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 5,
    artists: [
      {
        artistID: 7
      }
    ],
    startTime: "17:30",
    endTime: "18:00",
  },

  {
    eventID: 11,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 5,
    artists: [
      {
        artistID: 32
      }
    ],
    startTime: "18:00",
    endTime: "18:30",
  },

  {
    eventID: 12,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 5,
    artists: [
      {
        artistID: 55
      }
    ],
    startTime: "19:00",
    endTime: "20:00",
  },

  {
    eventID: 13,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 5,
    artists: [
      {
        artistID: 10
      }
    ],
    startTime: "20:30",
    endTime: "21:00",
  },

  {
    eventID: 14,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 5,
    artists: [
      {
        artistID: 3
      }
    ],
    startTime: "21:00",
    endTime: "21:30",
  },

  {
    eventID: 15,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 4,
    artists: [
      {
        artistID: [19, 37]
      }
    ],
    startTime: "16:00",
    endTime: "17:00",
  },

  {
    eventID: 16,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 4,
    artists: [
      {
        artistID: 56
      }
    ],
    startTime: "17:30",
    endTime: "19:00",
  },

  {
    eventID: 17,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 4,
    artists: [
      {
        artistID: [35, 8]
      }
    ],
    startTime: "19:30",
    endTime: "20:30",
  },

  {
    eventID: 18,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 4,
    artists: [
      {
        artistID: [17, 8, 29]
      }
    ],
    startTime: "21:00",
    endTime: "22:00",
  },

  {
    eventID: 19,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 3,
    artists: [
      {
        artistID: 63
      }
    ],
    startTime: "16:30",
    endTime: "18:00",
  },

  {
    eventID: 20,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 3,
    artists: [
      {
        artistID: 13
      }
    ],
    startTime: "17:20",
    endTime: "18:00",
  },

  {
    eventID: 21,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 3,
    artists: [
      {
        artistID: 15
      }
    ],
    startTime: "18:20",
    endTime: "19:20",
  },

  {
    eventID: 22,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 3,
    artists: [
      {
        artistID: 54
      }
    ],
    startTime: "19:50",
    endTime: "20:50",
  },

  {
    eventID: 23,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 3,
    artists: [
      {
        artistID: 30
      }
    ],
    startTime: "21:20",
    endTime: "22:20",
  },

  {
    eventID: 24,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 7,
    artists: [
      {
        artistID: [18, 2]
      }
    ],
    startTime: "17:00",
    endTime: "18:00",
  },

  {
    eventID: 25,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 7,
    artists: [
      {
        artistID: 26
      }
    ],
    startTime: "18:20",
    endTime: "19:05",
  },

  {
    eventID: 26,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 7,
    artists: [
      {
        artistID: 9
      }
    ],
    startTime: "19:25",
    endTime: "20:20",
  },

  {
    eventID: 27,
    startDate: "09/15/2019",
    endDate: "09/15/2019",
    locationID: 8,
    artists: [
      {
        artistID: 21
      }
    ],
    startTime: "17:20",
    endTime: "18:20",
  },

  {
    eventID: 28,
    startDate: "09/15/2019",
    endDate: "09/15/2019",
    locationID: 8,
    artists: [
      {
        artistID: [48, 5, 33]
      }
    ],
    startTime: "18:40",
    endTime: "20:00",
  },

  {
    eventID: 29,
    startDate: "09/15/2019",
    endDate: "09/15/2019",
    locationID: 5,
    artists: [
      {
        artistID: 47
      }
    ],
    startTime: "16:30",
    endTime: "17:00",
  },

  {
    eventID: 30,
    startDate: "09/15/2019",
    endDate: "09/15/2019",
    locationID: 5,
    artists: [
      {
        artistID: 23
      }
    ],
    startTime: "17:00",
    endTime: "17:30",
  },

  {
    eventID: 31,
    startDate: "09/15/2019",
    endDate: "09/15/2019",
    locationID: 5,
    artists: [
      {
        artistID: 30
      }
    ],
    startTime: "18:00",
    endTime: "19:00",
  },

  {
    eventID: 32,
    startDate: "09/15/2019",
    endDate: "09/15/2019",
    locationID: 5,
    artists: [
      {
        artistID: 44
      }
    ],
    startTime: "19:30",
    endTime: "20:00",
  },

  {
    eventID: 33,
    startDate: "09/15/2019",
    endDate: "09/15/2019",
    locationID: 5,
    artists: [
      {
        artistID: 7
      }
    ],
    startTime: "20:00",
    endTime: "20:30",
  },

  {
    eventID: 34,
    startDate: "09/15/2019",
    endDate: "09/15/2019",
    locationID: 4,
    artists: [
      {
        artistID: [38, 57]
      }
    ],
    startTime: "17:00",
    endTime: "18:00",
  },

  {
    eventID: 35,
    startDate: "09/15/2019",
    endDate: "09/15/2019",
    locationID: 4,
    artists: [
      {
        artistID: 58
      }
    ],
    startTime: "18:30",
    endTime: "21:00",
  },

  {
    eventID: 36,
    startDate: "09/15/2019",
    endDate: "09/15/2019",
    locationID: 3,
    artists: [
      {
        artistID: 31
      }
    ],
    startTime: "16:00",
    endTime: "16:45",
  },

  {
    eventID: 37,
    startDate: "09/15/2019",
    endDate: "09/15/2019",
    locationID: 3,
    artists: [
      {
        artistID: 12
      }
    ],
    startTime: "17:00",
    endTime: "18:00",
  },

  {
    eventID: 38,
    startDate: "09/15/2019",
    endDate: "09/15/2019",
    locationID: 3,
    artists: [
      {
        artistID: 4
      }
    ],
    startTime: "18:30",
    endTime: "19:30",
  },

  {
    eventID: 39,
    startDate: "09/15/2019",
    endDate: "09/15/2019",
    locationID: 3,
    artists: [
      {
        artistID: [51, 14]
      }
    ],
    startTime: "20:00",
    endTime: "21:00",
  },

  {
    eventID: 40,
    startDate: "09/15/2019",
    endDate: "09/15/2019",
    locationID: 7,
    artists: [
      {
        artistID: 1
      }
    ],
    startTime: "17:15",
    endTime: "18:15",
  },

  {
    eventID: 41,
    startDate: "09/15/2019",
    endDate: "09/15/2019",
    locationID: 7,
    artists: [
      {
        artistID: [8, 17]
      }
    ],
    startTime: "18:45",
    endTime: "20:00",
  },

  {
    eventID: 42,
    startDate: "09/17/2019",
    endDate: "09/18/2019",
    locationID: 6,
    artists: [
      {
        artistID: [8, 7, 17]
      }
    ],
    startTime: "21:30",
    endTime: "1:00",
  }

]



db.Artist
  .remove({})
  .then(() => db.Artist.collection.insertMany(artistSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
  })
  .catch(err => {
    console.error(err);
  });

db.Location
  .remove({})
  .then(() => db.Location.collection.insertMany(locationSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
  })
  .catch(err => {
    console.error(err);
  });

db.Event
  .remove({})
  .then(() => db.Event.collection.insertMany(eventSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
  })
  .catch(err => {
    console.error(err);
  });

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
  })
  .catch(err => {
    console.error(err);
  });