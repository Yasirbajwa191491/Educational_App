const {allScholarships,submitScholarship}=require('../Controllers/scholarshipController');
const express = require("express");

const router = express.Router();
router.route("/submitScholarship").post(submitScholarship);
router.route("/allScholarships").get(allScholarships);

module.exports = router;
