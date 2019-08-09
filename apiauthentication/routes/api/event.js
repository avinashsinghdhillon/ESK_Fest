const eventsRouter = require("express").Router();
const eventsController = require("../../controllers/eventsController");

eventsRouter.route("/events")
    .get(eventsController.findAll);

eventsRouter.route("/artists")
    .get(eventsController.findAllArtists);

eventsRouter.route("/venues")
    .get(eventsController.findAllVenues);
module.exports = eventsRouter;