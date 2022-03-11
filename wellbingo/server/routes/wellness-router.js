const express = require("express");

const WellnessCtrl = require("../controllers/wellness-ctrl");

const router = express.Router();

router.get("/all", WellnessCtrl.getAllItems);

module.exports = router;

