import db from ("../../models");

module.exports ={
    //find all artists
    findAll: function(req, res){
        db.Artist
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};