const router = require('express-promise-router')();
const eventsController = require('../../controllers/eventsController');


router.route("/saveEventToItinerary")
  .post(eventsController.saveEventToItinerary);

router.route("/deleteItinerary")
  .post(eventsController.deleteItinerary);

router.route("/getUserItineraries")
  .get(eventsController.getUserItineraries);

module.exports = router;