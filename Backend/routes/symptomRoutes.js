const express = require("express");
const router = express.Router();
const { predictDisease } = require("../controllers/symptomController");

router.post("/symptoms", predictDisease);

module.exports = router;
