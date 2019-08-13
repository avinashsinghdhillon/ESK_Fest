const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itinerarySchema = new Schema({
    userID: { type: Schema.Types.ObjectId, required: true, unique: true },
    events: [
        {
            type: Schema.Types.ObjectId,
            ref: "Event"
         }
        ]
}); 

const Itinerary = mongoose.model("Itinerary", itinerarySchema);

module.exports = Itinerary;