const {allUniversity,submitUniversity}=require('../Controllers/universityController');
const express = require("express");

const router = express.Router();
router.route("/submitUniversity").post(submitUniversity);
router.route("/allUniversity").get(allUniversity);

module.exports = router;
