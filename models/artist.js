const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema({
    artistID: { type: Number, required: true, unique: true },
    artistName: { type: String, required: true },
    artistPicture: { type: String, required: false },
    artistAbout: { type: String, required: false },
    artistSite: { type: String, required: false },
    artistSpotify: { type: String, required: false },
    artistYoutube: { type: String, required: false }
});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;