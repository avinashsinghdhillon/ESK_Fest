const eventsRouter = require("express").Router();
const eventsController = require("../../controllers/eventsController");

eventsRouter.route("/api/events")
    .get(eventsController.findAll);

eventsRouter.route("api/artists")
    .get(eventsController.findAllArtists);

eventsRouter.route("api/venues")
    .get(eventsController.findAllVenues);
module.exports = eventsRouter;