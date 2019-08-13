const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventID: { type: Number, required: true },
  artists: [
    {
      type: Schema.Types.ObjectId,
      ref: "Artist"
    }
  ],
  locationID: {type: Number, required: true },
  startDate: { type: Date, required: false },
  endDate: { type: Date, required: false },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;