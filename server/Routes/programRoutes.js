const {allPrograms,submitProgram}=require('../Controllers/programController');
const express = require("express");

const router = express.Router();
router.route("/submitProgram").post(submitProgram);
router.route("/allPrograms").get(allPrograms);

module.exports = router;
