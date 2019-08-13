const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Events collection and inserts the events below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/esk"
);

const artistSeed = [
  {
    artistID: 1,
    artistName: "Adrian Reed Gospel Mass",
    artistPicture: "https://i.imgur.com/PRXh1ZD.jpg",
    artistYoutube: "https://www.youtube.com/embed/9HZu1rlwBfI"

  },
  {
    artistID: 2,
    artistName: "Andre Hayward",
    artistPicture: "https://i.imgur.com/FAOP6fb.jpg",
    artistAbout: "",
    artistSite: "https://eastsidemusic.com/meet-the-teachers/andre-hayward/",
    artistSpotify: "https://open.spotify.com/embed/track/1XEOnfdtuJRmvdG1jvpGuW",
    artistYoutube: "https://www.youtube.com/embed/GKCpaLR_r14&list=PLh6cmoyN1yneZ4Sb1zrLhF7bhLmDUU-nB&index=5"
  },
  {
    artistID: 3,
    artistName: "Andrea Dawson",
    artistPicture: "https://i.imgur.com/CsPSt9k.jpg",
    artistAbout: "",
    artistSite: "http://andrea-dawson.com/",
    artistSpotify: "https://open.spotify.com/embed/track/2u66IcKxHxadKe1YpHNxNT?si=XqN1O6t_SL6H_XEeCQNzYw",
    artistYoutube: "https://www.youtube.com/embed/VkBlf95HRCw"

  },
  {
    artistID: 4,
    artistName: "Barbara Lynn",
    artistPicture: "https://i.imgur.com/7kVMtuZ.jpg",
    artistAbout: "",
    artistSite: "https://www.chron.com/entertainment/music/article/Barbara-Lynn-receives-NEA-honor-13010469.php",
    artistSpotify: "https://open.spotify.com/embed/track/5CEREcGR5WaLt40YzTQ62e",
    artistYoutube: "https://www.youtube.com/embed/U6Y7sEO7Low"

  },
  {
    artistID: 5,
    artistName: "Big Jack Williams",
    artistPicture: "https://i.imgur.com/1rh3ZFX.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 6,
    artistName: "Bill Campbell",
    artistPicture: "https://i.imgur.com/3bGnfOG.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: "https://www.youtube.com/embed/WSicdduH0ds"

  },
  {
    artistID: 7,
    artistName: "Birdlegg",
    artistPicture: "https://i.imgur.com/k0XmE6O.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "https://open.spotify.com/embed/track/69CuiaKEedGZ91mvdzysZq",
    artistYoutube: "https://www.youtube.com/embed/tIq_tbz7Gf8"
  },
  {
    artistID: 8,
    artistName: "Bloodest Saxophone",
    artistPicture: "https://i.imgur.com/fQzVI6S.jpg",
    artistAbout: "",
    artistSite: "http://bloodsax.main.jp/?fbclid=IwAR1ptCsXR-CEAtyKj6qGp70J1X__tI76dOSxdQw3bpGr9OCSnwQuiRycD1s",
    artistSpotify: "https://open.spotify.com/embed/track/1wSL3lQHdSoGwtFbOis0Zm",
    artistYoutube: "https://www.youtube.com/embed/pqI7QIsJkR4"

  },
  {
    artistID: 9,
    artistName: "Blues Jazz Plus",
    artistPicture: "",
    artistAbout: "",
    artistSite: "https://www.newschoolofmusic.org/",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 10,
    artistName: "Brown Sugar",
    artistPicture: "https://i.imgur.com/4o6Wtbj.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 11,
    artistName: "Burley Manor Jr",
    artistPicture: "https://i.imgur.com/uFaS0Bi.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 12,
    artistName: "Carl Weathersby",
    artistPicture: "https://i.imgur.com/so4I3WP.png",
    artistAbout: "",
    artistSite: "http://www.carlweathersby.org/",
    artistSpotify: "https://open.spotify.com/embed/track/7Jxp79DHtduKJ7YPo4lDaC",
    artistYoutube: "https://www.youtube.com/embed/oLfkXAeboKA"

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
    artistPicture: "https://i.imgur.com/OoNZM4y.jpg",
    artistAbout: "",
    artistSite: "https://chuckrainey.com/",
    artistSpotify: "https://open.spotify.com/embed/track/2uqr9arJdbS5Huef2eFJol",
    artistYoutube: "https://www.youtube.com/embed/O2ahiZvCP8o&list=OLAK5uy_n4-JORxnqU0ZzwMNmJHMOqWRU6SZNa2JA&index=3"

  },
  {
    artistID: 15,
    artistName: "Classie Ballou",
    artistPicture: "https://i.imgur.com/Tu4gi8U.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "https://open.spotify.com/embed/track/4Q0oqa1l7WJXmtGaZbzPS0",
    artistYoutube: ""
  },
  {
    artistID: 16,
    artistName: "Corey Keller",
    artistPicture: "https://i.imgur.com/eda2s9g.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: "https://www.youtube.com/embed/C5CG5qe9wac"

  },
  {
    artistID: 17,
    artistName: "Crystal Thomas",
    artistPicture: "https://i.imgur.com/oQNm7t4.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "https://open.spotify.com/embed/track/4r17N5j0GXjbHFgUY5Dd1o",
    artistYoutube: ""
  },
  {
    artistID: 18,
    artistName: "Don Braden",
    artistPicture: "https://i.imgur.com/VS4YOia.jpg",
    artistAbout: "",
    artistSite: "http://www.donbraden.com/",
    artistSpotify: "https://open.spotify.com/embed/track/7Gq3gnDaQK8pfP8pnPjoG4",
    artistYoutube: ""
  },
  {
    artistID: 19,
    artistName: "Eastside Syndicate",
    artistPicture: "https://i.imgur.com/3mxteG9.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 20,
    artistName: "Ernie Durawa",
    artistPicture: "https://i.imgur.com/PiogG3j.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: "https://www.youtube.com/embed/BlRc3mp2F9Q"

  },
  {
    artistID: 21,
    artistName: "Gregg Smith",
    artistPicture: "https://i.imgur.com/Do8dLQS.jpg",
    artistAbout: "",
    artistSite: "https://greggasmithmusic.com/home",
    artistSpotify: "",
    artistYoutube: "https://www.youtube.com/embed/YW-lSDjkS1I"

  },
  {
    artistID: 22,
    artistName: "Hash Brown",
    artistPicture: "https://i.imgur.com/L7mB3rU.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 23,
    artistName: "James 'Killer Bug' Morris",
    artistPicture: "https://i.imgur.com/iddERyH.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 24,
    artistName: "James Fenner",
    artistPicture: "https://i.imgur.com/wkUaDUb.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 25,
    artistName: "Jason Moeller",
    artistPicture: "https://i.imgur.com/M4Gr5Vz.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: "https://www.youtube.com/embed/wUPZO3sHN5c"

  },
  {
    artistID: 26,
    artistName: "Jewel Brown",
    artistPicture: "https://i.imgur.com/Wx8zt3Z.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "https://open.spotify.com/embed/track/1ZZ4xYTORrkU9gY0isK6OR",
    artistYoutube: "https://www.youtube.com/embed/MegutC1rUok"

  },
  {
    artistID: 27,
    artistName: "Johnny LaTouf, MC",
    artistPicture: "https://i.imgur.com/n24ldhH.jpg",
    artistAbout: "Johnny LaTouf is the owner of Skylark Lounge, a generous supporter of the Eastside Kings Festival and blues musicians.",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 28,
    artistName: "Johnny Moeller",
    artistPicture: "https://i.imgur.com/w6JlGa0.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: "https://www.youtube.com/embed/wUPZO3sHN5c"

  },
  {
    artistID: 29,
    artistName: "Kaz Kazanoff",
    artistPicture: "https://i.imgur.com/7yV6N52.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "https://open.spotify.com/embed/track/327RfrgwD8WNelFhU4NCNr?si=kLuGQ9mYQGC28EcS3l86KQ",
    artistYoutube: "https://www.youtube.com/embed/4kNVSAXhycw"

  },
  {
    artistID: 30,
    artistName: "Keith Dunn",
    artistPicture: "https://i.imgur.com/EZAbbAo.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "https://open.spotify.com/embed/track/6BIpLmms6hIdSFI3GNTw8J",
    artistYoutube: "https://www.youtube.com/embed/8vM0Vq_v72c"

  },
  {
    artistID: 31,
    artistName: "Lady D",
    artistPicture: "https://i.imgur.com/5DYQT5V.jpg",
    artistAbout: "",
    artistSite: "https://www.facebook.com/ThaLadyD/videos/1700878136845745/",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 32,
    artistName: "Lavelle White",
    artistPicture: "https://i.imgur.com/qREXo0i.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "https://open.spotify.com/embed/track/7lOV91qKP6qRTrE5Hg9HCb",
    artistYoutube: "https://www.youtube.com/embed/dRpV94UuyHM"

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
    artistPicture: "https://i.imgur.com/bBlTxIl.jpg",
    artistAbout: "",
    artistSite: "https://luckypeterson.com/",
    artistSpotify: "https://open.spotify.com/embed/track/6QSH6q90XNj5VDi52qpe8B",
    artistYoutube: "https://www.youtube.com/embed/TI5GHHYE6Ko&list=PLYc0FapKFwGr4TvMHx_EqeSWnufyIEVLG&index=8"

  },
  {
    artistID: 35,
    artistName: "Mac McIntosh",
    artistPicture: "https://i.imgur.com/oLDCppD.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: "https://www.youtube.com/embed/Mi-n6UeZaDk"

  },
  {
    artistID: 36,
    artistName: "Margaret Wright",
    artistPicture: "https://i.imgur.com/ahM5j1V.png",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: "https://www.youtube.com/embed/t27HK1qdNiI"

  },
  {
    artistID: 37,
    artistName: "Matthew Robinson",
    artistPicture: "https://i.imgur.com/FoHmHJ7.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: "https://www.youtube.com/embed/piF1zkw8iKA"

  },
  {
    artistID: 38,
    artistName: "Mel Davis",
    artistPicture: "https://i.imgur.com/ruB4P1H.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: "https://www.youtube.com/embed/6ZHOgmJycmk"

  },
  {
    artistID: 39,
    artistName: "Mike Buck",
    artistPicture: "https://i.imgur.com/SeC7aBh.jpg",
    artistAbout: "Mike is one of the owners of Antone's Record Store, a generous supporter of the Eastside Kings Festival.",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 40,
    artistName: "Mike Keller",
    artistPicture: "https://i.imgur.com/H62VePx.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "https://open.spotify.com/embed/track/5m4Kj4yfqgJmjAoaJlzJd4?si=YOzGKFujRpa4LN3K8Sp_hQ",
    artistYoutube: "https://www.youtube.com/embed/KD3uE5vqMTo"

  },
  {
    artistID: 41,
    artistName: "Murali Coryell",
    artistPicture: "",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "https://open.spotify.com/embed/track/5cDIbJtehjhImG8eytKwGw?si=YIm4v7mrSHOVBJFZI9CXbg",
    artistYoutube: "https://www.youtube.com/embed/KNcZs2qFM-E"

  },
  {
    artistID: 42,
    artistName: "Nick Connolly",
    artistPicture: "https://i.imgur.com/GxNf2Wj.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: "https://www.youtube.com/embed/8NU0Ie3XQeY"

  },
  {
    artistID: 43,
    artistName: "Mike Stone",
    artistPicture: "",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 44,
    artistName: "Orange Jefferson",
    artistPicture: "https://i.imgur.com/JVzyxWv.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: "https://www.youtube.com/embed/esJapjFRTEI"

  },
  {
    artistID: 45,
    artistName: "PeeWee Calvin",
    artistPicture: "https://i.imgur.com/2nMSQx9.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 46,
    artistName: "Pierre Pelegrin",
    artistPicture: "https://i.imgur.com/gr6rVs3.jpg",
    artistAbout: "Pierre and his wife Justine are the owners of Justine's Brasserie, a generous supporter of the Eastside Kings Festival. He is also a member of the Eastside Kings Foundation board of directors.",
    artistSite: "https://www.justines1937.com/",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 47,
    artistName: "Ray Reed",
    artistPicture: "https://i.imgur.com/eiQf6sd.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: "https://www.youtube.com/embed/vNRL5XVrFJI"

  },
  {
    artistID: 48,
    artistName: "RL Griffin",
    artistPicture: "https://i.imgur.com/jFEEbvi.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: "https://www.youtube.com/embed/uYvBmXwipC0"

  },
  {
    artistID: 49,
    artistName: "Roger Wood, MC",
    artistPicture: "https://i.imgur.com/GTmNHUn.jpg",
    artistAbout: "Dr. Roger Wood is a music author, a Blues afficionado, and a huge supporter of the Eastside Kings Festival. We are grateful to Roger for being an MC for the festival.",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 50,
    artistName: "Scott Bock, MC",
    artistPicture: "https://i.imgur.com/uNdMNM2.jpg",
    artistAbout: "Scott Bock is a writer for Living Blues magazine. His support of the Eastside Kings Festival is greatly appreciated, and we are grateful to him for being an MC year after year.",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 51,
    artistName: "Shake Anderson Band",
    artistPicture: "https://i.imgur.com/AundVq7.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: "https://www.youtube.com/embed/RVCywyqBdYA&feature=youtu.be"

  },
  {
    artistID: 52,
    artistName: "Shimi",
    artistPicture: "https://i.imgur.com/7SjAkUt.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 53,
    artistName: "Shuji 'Apple Juice' Sato",
    artistPicture: "https://i.imgur.com/YNiY2XA.jpg",
    artistAbout: "",
    artistSite: "http://bloodsax.main.jp/?fbclid=IwAR1ptCsXR-CEAtyKj6qGp70J1X__tI76dOSxdQw3bpGr9OCSnwQuiRycD1s",
    artistSpotify: "",
    artistYoutube: "https://www.youtube.com/embed/pqI7QIsJkR4"

  },
  {
    artistID: 54,
    artistName: "Smiling Bobby",
    artistPicture: "https://i.imgur.com/veTdgok.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 55,
    artistName: "Soul Man Sam",
    artistPicture: "https://i.imgur.com/GImgEmT.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: "https://www.youtube.com/embed/bkW8DTXjn9E"

  },
  {
    artistID: 56,
    artistName: "Ms. Mack & The Daddies",
    artistPicture: "https://i.imgur.com/Wt1copK.jpg",
    artistAbout: "",
    artistSite: "https://www.facebook.com/mackdaddymusic/videos/1033365060177569/",
    artistSpotify: "",
    artistYoutube: ""
  },
  {
    artistID: 57,
    artistName: "The Blues Specialists",
    artistPicture: "https://i.imgur.com/uMIR03i.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: "https://www.youtube.com/embed/6ZHOgmJycmk"

  },
  {
    artistID: 58,
    artistName: "The Gladiators",
    artistPicture: "https://i.imgur.com/D7NF2xR.jpg",
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
    artistSpotify: "https://open.spotify.com/embed/track/6CM6bg4owVXEHo1g7QzWyg?si=GJkiV_KSTImLs5AtiYLhXQ",
    artistYoutube: "https://www.youtube.com/embed/bgVVJYS0fqI"

  },
  {
    artistID: 60,
    artistName: "TuTu Jones Band",
    artistPicture: "https://i.imgur.com/hDc3obW.png",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "https://open.spotify.com/embed/track/3T1iXyK8LzxE4QYbU30z2N",
    artistYoutube: "https://www.youtube.com/embed/S8-ubeKgrUg"

  },
  {
    artistID: 61,
    artistName: "Young Corn",
    artistPicture: "https://i.imgur.com/iRV7DhQ.png",
    artistAbout: "",
    artistSite: "http://bloodsax.main.jp/?fbclid=IwAR1ptCsXR-CEAtyKj6qGp70J1X__tI76dOSxdQw3bpGr9OCSnwQuiRycD1s",
    artistSpotify: "",
    artistYoutube: "https://www.youtube.com/embed/pqI7QIsJkR4"

  },
  {
    artistID: 62,
    artistName: "Curley Cormier",
    artistPicture: "https://i.imgur.com/i6q5sPI.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: "https://www.youtube.com/embed/vXcGNx-KioM"

  },
  {
    artistID: 63,
    artistName: "Mike Milligan",
    artistPicture: "https://i.imgur.com/jDWDZIW.jpg",
    artistAbout: "",
    artistSite: "",
    artistSpotify: "",
    artistYoutube: "https://www.youtube.com/embed/v04SFLh_QCI"

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
  }
]

const locationSeed = [
  {
    locationID: 1,
    locationName: "Antone's Night Club",
    locationAddress: "305 E 5th St, Austin, TX 78701",
    locationPhone: "(512) 814-0361",
    locationSite: "https://www.antonesnightclub.com/",
    locationNote: "",
    locationMap: "https://i.imgur.com/TPRVZnh.png"
  },

  {
    locationID: 2,
    locationName: "Austin Vintage Guitar Shop",
    locationAddress: "4306 Red River, Austin, TX 78751",
    locationPhone: "(512) 428-9100",
    locationSite: "https://www.austinvintageguitars.com/",
    locationNote: "",
    locationMap: "https://i.imgur.com/h2RtvuJ.png"
  },

  {
    locationID: 3,
    locationName: "Big Easy Bar & Grill",
    locationAddress: "1806 East 12th Street, Ausitn, TX 78702",
    locationPhone: "(512) 406-9237",
    locationSite: "https://www.theoriginalneworleanspoboygumboshop.com/",
    locationNote: "",
    locationMap: "https://i.imgur.com/hcw9oqb.png"
  },

  {
    locationID: 4,
    locationName: "Dozen Street Bar",
    locationAddress: "1808 East 12th Street, Austin, TX 78702",
    locationPhone: "(512) 236-1770",
    locationSite: "https://do512.com/venues/dozen-street",
    locationNote: "",
    locationMap: "https://i.imgur.com/HZwzzyg.png"
  },

  {
    locationID: 5,
    locationName: "Full Circle Bar",
    locationAddress: "1810 East 12th Street, Austin, TX 78702",
    locationPhone: "(512) 814-0211",
    locationSite: "http://www.fullcirclebar.com/austin",
    locationNote: "",
    locationMap: "https://i.imgur.com/f93bMWO.png"
  },

  {
    locationID: 6,
    locationName: "Justine's Brasserie",
    locationAddress: "4710 E 5th St, Austin, TX 78702",
    locationPhone: "(512) 385-2900",
    locationSite: "https://www.justines1937.com/",
    locationNote: "",
    locationMap: "https://i.imgur.com/UUeYfsS.png"
  },

  {
    locationID: 7,
    locationName: "Mission Possible",
    locationAddress: "1818 East 12th Street, Austin, TX 78702",
    locationPhone: "(512) 494-0953",
    locationSite: "https://mpaustin.org/",
    locationNote: "",
    locationMap: "https://i.imgur.com/XLWKIjB.png"
  },

  {
    locationID: 8,
    locationName: "Mission Possible Parking Lot",
    locationAddress: "1100 Chicon, Austin, TX 78702",
    locationPhone: "(512) 494-0953",
    locationSite: "https://mpaustin.org/",
    locationNote: "",
    locationMap: "https://i.imgur.com/XLWKIjB.png"
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
    userType: "local",
    email: "email@email.com",
    userPassword: "Password1",
    googleID: "",
    firstName: "Test",
    lastName: "User1"
  },
  {
    userType: "local",
    email: "1@email.com",
    userPassword: "Password1",
    googleID: "",
    firstName: "Test",
    lastName: "User2"
  },
  {
    userType: "local",
    email: "3@email.com",
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
    artistIdArr: [8],
    startTime: "20:00",
    endTime: "21:30",
  },

  {
    eventID: 2,
    startDate: "09/13/2019",
    endDate: "09/13/2019",
    locationID: 1,
    artistIdArr: [34, 14, 25, 28, 24, 61],
    startTime: "21:45",
    endTime: "23:00",
  },

  {
    eventID: 3,
    startDate: "09/13/2019",
    endDate: "09/14/2019",
    locationID: 1,
    artistIdArr: [60],
    startTime: "23:15",
    endTime: "1:00",
  },

  {
    eventID: 4,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 2,
    artistIdArr: [50, 14, 15, 61, 13, 54, 53],
    startTime: "13:00",
    endTime: "14:00",
  },

  {
    eventID: 5,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 8,
    artistIdArr: [49],
    startTime: "17:20",
    endTime: "20:00",
  },

  {
    eventID: 6,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 8,
    artistIdArr: [60],
    startTime: "17:20",
    endTime: "18:30",
  },

  {
    eventID: 7,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 8,
    artistIdArr: [
      34, 14, 28, 25, 24, 17, 29
    ],
    startTime: "19:00",
    endTime: "20:00",
  },

  {
    eventID: 8,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 5,
    artistIdArr: [27],
    startTime: "16:30",
    endTime: "21:30",
  },

  {
    eventID: 9,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 5,
    artistIdArr: [36],
    startTime: "16:30",
    endTime: "17:30",
  },

  {
    eventID: 10,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 5,
    artistIdArr: [7],
    startTime: "17:30",
    endTime: "18:00",
  },

  {
    eventID: 11,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 5,
    artistIdArr: [32],
    startTime: "18:00",
    endTime: "18:30",
  },

  {
    eventID: 12,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 5,
    artistIdArr: [55],
    startTime: "19:00",
    endTime: "20:00",
  },

  {
    eventID: 13,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 5,
    artistIdArr: [10],
    startTime: "20:30",
    endTime: "21:00",
  },

  {
    eventID: 14,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 5,
    artistIdArr: [3],
    startTime: "21:00",
    endTime: "21:30",
  },

  {
    eventID: 15,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 4,
    artistIdArr: [19, 37],
    startTime: "16:00",
    endTime: "17:00",
  },

  {
    eventID: 16,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 4,
    artistIdArr: [56],
    startTime: "17:30",
    endTime: "19:00",
  },

  {
    eventID: 17,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 4,
    artistIdArr: [35, 8],
    startTime: "19:30",
    endTime: "20:30",
  },

  {
    eventID: 18,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 4,
    artistIdArr: [17, 8, 29],
    startTime: "21:00",
    endTime: "22:00",
  },

  {
    eventID: 19,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 3,
    artistIdArr: [63],
    startTime: "16:30",
    endTime: "18:00",
  },

  {
    eventID: 20,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 3,
    artistIdArr: [13],
    startTime: "17:20",
    endTime: "18:00",
  },

  {
    eventID: 21,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 3,
    artistIdArr: [15],
    startTime: "18:20",
    endTime: "19:20",
  },

  {
    eventID: 22,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 3,
    artistIdArr: [54],
    startTime: "19:50",
    endTime: "20:50",
  },

  {
    eventID: 23,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 3,
    artistIdArr: [30],
    startTime: "21:20",
    endTime: "22:20",
  },

  {
    eventID: 24,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 7,
    artistIdArr: [18, 2],
    startTime: "17:00",
    endTime: "18:00",
  },

  {
    eventID: 25,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 7,
    artistIdArr: [26],
    startTime: "18:20",
    endTime: "19:05",
  },

  {
    eventID: 26,
    startDate: "09/14/2019",
    endDate: "09/14/2019",
    locationID: 7,
    artistIdArr: [9],
    startTime: "19:25",
    endTime: "20:20",
  },

  {
    eventID: 27,
    startDate: "09/15/2019",
    endDate: "09/15/2019",
    locationID: 8,
    artistIdArr: [21],
    startTime: "17:20",
    endTime: "18:20",
  },

  {
    eventID: 28,
    startDate: "09/15/2019",
    endDate: "09/15/2019",
    locationID: 8,
    artistIdArr: [48, 5, 33],
    startTime: "18:40",
    endTime: "20:00",
  },

  {
    eventID: 29,
    startDate: "09/15/2019",
    endDate: "09/15/2019",
    locationID: 5,
    artistIdArr: [47],
    startTime: "16:30",
    endTime: "17:00",
  },

  {
    eventID: 30,
    startDate: "09/15/2019",
    endDate: "09/15/2019",
    locationID: 5,
    artistIdArr: [23],
    startTime: "17:00",
    endTime: "17:30",
  },

  {
    eventID: 31,
    startDate: "09/15/2019",
    endDate: "09/15/2019",
    locationID: 5,
    artistIdArr: [30],
    startTime: "18:00",
    endTime: "19:00",
  },

  {
    eventID: 32,
    startDate: "09/15/2019",
    endDate: "09/15/2019",
    locationID: 5,
    artistIdArr: [44],
    startTime: "19:30",
    endTime: "20:00",
  },

  {
    eventID: 33,
    startDate: "09/15/2019",
    endDate: "09/15/2019",
    locationID: 5,
    artistIdArr: [7],
    startTime: "20:00",
    endTime: "20:30",
  },

  {
    eventID: 34,
    startDate: "09/15/2019",
    endDate: "09/15/2019",
    locationID: 4,
    artistIdArr: [38, 57],
    startTime: "17:00",
    endTime: "18:00",
  },

  {
    eventID: 35,
    startDate: "09/15/2019",
    endDate: "09/15/2019",
    locationID: 4,
    artistIdArr: [58],
    startTime: "18:30",
    endTime: "21:00",
  },

  {
    eventID: 36,
    startDate: "09/15/2019",
    endDate: "09/15/2019",
    locationID: 3,
    artistIdArr: [31],
    startTime: "16:00",
    endTime: "16:45",
  },

  {
    eventID: 37,
    startDate: "09/15/2019",
    endDate: "09/15/2019",
    locationID: 3,
    artistIdArr: [12],
    startTime: "17:00",
    endTime: "18:00",
  },

  {
    eventID: 38,
    startDate: "09/15/2019",
    endDate: "09/15/2019",
    locationID: 3,
    artistIdArr: [4],
    startTime: "18:30",
    endTime: "19:30",
  },

  {
    eventID: 39,
    startDate: "09/15/2019",
    endDate: "09/15/2019",
    locationID: 3,
    artistIdArr: [51, 14],
    startTime: "20:00",
    endTime: "21:00",
  },

  {
    eventID: 40,
    startDate: "09/15/2019",
    endDate: "09/15/2019",
    locationID: 7,
    artistIdArr: [1],
    startTime: "17:15",
    endTime: "18:15",
  },

  {
    eventID: 41,
    startDate: "09/15/2019",
    endDate: "09/15/2019",
    locationID: 7,
    artistIdArr: [8, 17],
    startTime: "18:45",
    endTime: "20:00",
  },

  {
    eventID: 42,
    startDate: "09/17/2019",
    endDate: "09/18/2019",
    locationID: 6,
    artistIdArr: [8, 7, 17],
    startTime: "21:30",
    endTime: "1:00",
  }

]

const itinerarySeed=[
  {
    userID: 1,
    events: [42, 12, 4, 6]
  },
  {
    userID: 2,
    events: [4, 1, 7, 11]
  }
]



db.Artist
  .deleteMany()
  .then(() => db.Artist.collection.insertMany(artistSeed))
  .then(data => {
    console.log(data.result.n + " artist records inserted!");
    const updatedEventSeed = eventSeed.map(event => {
      event.artists = event.artistIdArr.map(artistIndex => {
        return data.insertedIds[artistIndex-1]
      })
      return event;
    });



    db.Event
      .deleteMany()
      .then(() => db.Event.collection.insertMany(updatedEventSeed))
      .then(data => {
        console.log(data.result.n + " event records inserted!");
      })
      .catch(err => {
        console.error(err);
      });

  })
  .catch(err => {
    console.error(err);
  });

db.Location
  .deleteMany()
  .then(() => db.Location.collection.insertMany(locationSeed))
  .then(data => {
    console.log(data.result.n + " location records inserted!");
  })
  .catch(err => {
    console.error(err);
  });


db.User
  .deleteMany()
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " user records inserted!");
  })
  .catch(err => {
    console.error(err);
});

db.Itinerary
  .deleteMany()
  .then(() => db.Itinerary.collection.insertMany(itinerarySeed))
  .then(data => {
    console.log(data.result.n + " itinerary records inserted!!");
  })
  .catch(err => {
    console.error(err);
});