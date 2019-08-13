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
    .sort({startDate: 'asc', startTime: 'asc'})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},
  findAllArtists: function(req, res) {
    db.Artist
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => { console.log(err); res.status(422).json(err) });
},
findAllVenues: function(req, res) {
  db.Location
    .find({})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
}
};