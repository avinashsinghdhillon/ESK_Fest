const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    LocationID: { type: Number, required: true, unique: true },
    locationName: { type: String, required: true },
    locationAddress: { type: String, required: false },
    locationPhone: { type: Number, required: false },
    locationSite: { type: String, required: false },
    locationNote: { type: String, required: false }
});

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;