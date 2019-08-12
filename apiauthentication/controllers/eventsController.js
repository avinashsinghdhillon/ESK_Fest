const db = require("../../models");

module.exports ={
    //find all artists
    findAll: function(req, res){
        db.Event
            .find({})
            // .populate("artists")
            // console.log("artists populated")
            // console.log(res.data)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findAllArtists: function(req, res){
        db.Artist
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findAllVenues: function(req, res){
        db.Location
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};