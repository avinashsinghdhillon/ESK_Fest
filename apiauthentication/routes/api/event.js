const eventsRouter = require("express").Router();
const eventsController = require("../../controllers/eventsController");

eventsRouter.route("/eventsByDay")
  .get(eventsController.findAllByDay);

  eventsRouter.route("/findEventById")
  .get(eventsController.findEventById);

eventsRouter.route("/events")
  .get(eventsController.findAll);

eventsRouter.route("/artists")
  .get(eventsController.findAllArtists);

eventsRouter.route("/venues")
  .get(eventsController.findAllVenues);

// //check this route - we would need to set this one up...
// eventsRouter.route("/save")
//     .put(eventsController.saveEventsListItem);

module.exports = eventsRouter;