const itineraryRouter = require("express").Router();
const db = require("../../../models")

itineraryRouter.route("/newItinerary")
    .post((req,res)=>{
        db.Event.findById(req.body.eventId).then((event)=>{
            console.log(event._id);
            let id = req.user._id
            db.Itinerary.findOne({userID:id}).populate({path:"events",populate:{
                path:"artists"
            }}).then((itinerary)=>{
                if(itinerary){
                    itinerary.events.push(event._id)
                    itinerary.save();
                    return res.json(itinerary);
                }
                db.Itinerary.create({userID:id}).then(async (itinerary)=>{
                    itinerary.events.push(event._id)
                    await itinerary.save();
                    db.Itinerary.findById(itinerary._id).populate(
                        {
                            path:"events",
                            populate:{
                                path:"artists"
                        }
                        }
                ).then((itineraryPop)=>{
                        return res.json(itineraryPop);
                })
            })
        })
    })
})
itineraryRouter.route("/getItinerary")
    .get((req,res)=>{
        db.Itinerary.findOne({userID:req.user._id}).populate({path:"events",populate:{
            path:"artists"
        }}).then((itinerary)=>{
            if(itinerary){       
                return res.json(itinerary);
            }
        })
    })

module.exports = itineraryRouter;