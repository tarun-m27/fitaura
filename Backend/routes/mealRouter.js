const express = require("express");
const router = express.Router();
const { mealPlan } = require("../controllers/mealController");

router.post("/mealplan", mealPlan);

module.exports = router;
