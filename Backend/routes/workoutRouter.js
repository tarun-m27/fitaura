const express = require("express");
const router = express.Router();
const { workoutPlan } = require("../controllers/workoutController");

router.post("/workoutplan", workoutPlan);

module.exports = router;
