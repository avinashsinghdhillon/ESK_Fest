const router = require("express").Router;
const eventsController = require("../../controllers/eventsController");

router.route("/api/events")
    .get(eventsController.findAll);


module.exports = router;