const {allCountry,submitCountry}=require('../Controllers/countryController');
const express = require("express");

const router = express.Router();
router.route("/submitCountry").post(submitCountry);
router.route("/allcountries").get(allCountry);

module.exports = router;
