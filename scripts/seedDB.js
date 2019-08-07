const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Events collection and inserts the events below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reacteventlist"
);

const artistSeed = [
  {
    artistID: 1,
    artistName: "Adrian Reed",
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
    userType: "",
    userEmail: "",
    userPassword: "",
    googleID: "",
    firstName: "",
    lastName: ""
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
  .then(() => db.Artists.collection.insertMany(artistSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Location
  .remove({})
  .then(() => db.Locations.collection.insertMany(locationSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Event
  .remove({})
  .then(() => db.Events.collection.insertMany(eventSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.User
  .remove({})
  .then(() => db.Users.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });