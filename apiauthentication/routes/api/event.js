const eventsRouter = require("express").Router();
const eventsController = require("../../controllers/eventsController");

eventsRouter.route("/api/events")
    .get(eventsController.findAll);

module.exports = eventsRouter;