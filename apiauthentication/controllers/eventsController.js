const db = require("../../models");

module.exports = {
  //find all artists
  findAll: function (req, res) {
    db.Event
      .find({})
      // .populate("artists")
      // console.log("artists populated")
      // console.log(res.data)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllByDay: function (req, res) {
    db.Event
      .find({})
      .sort({ startDate: 'asc', locationID: 'asc', startTime: 'asc' })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllArtists: function (req, res) {
    db.Artist
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => { console.log(err); res.status(422).json(err) });
  },
  findAllVenues: function (req, res) {
    db.Location
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //check this logic...
  // saveEventsListItem: function (req, res) {
  //   db.Event
  //     .findById({ id: req._id })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  saveEventToItinerary: function (req, res) {
    db.Itinerary
      .create({ 
        userID: req.body.userID,
        events: req.body.eventID
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deleteItinerary: function (req, res) {
    db.Itinerary
      .deleteOne({ id: req._id })
      .then(res.status(200))
      .catch(err => res.status(422).json(err));
  },
  getUserItineraries: function (req, res) {
    console.log("In get itinerary. Req.body " , req.body)
    db.Itinerary
      .find({})
      .populate({path:"events", populate:{path: "artists"}})
      .then(function(results){
        console.log(results)
        res.json(results);
      })
      .catch(err => res.status(422).json(err));
  },
  findEventById: function (req, res){
    db.Event
      .findById({ id: req._id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};