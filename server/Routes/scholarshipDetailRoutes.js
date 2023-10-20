const {allScholarshipDetailList,submitScholarshipDetail,scholarship_filter}=require('../Controllers/scholarshipDetailController');
const express = require("express");

const router = express.Router();
router.route("/submitScholarshipDetail").post(submitScholarshipDetail);
router.route("/allScholarshipDetailList").get(allScholarshipDetailList);
router.route("/scholarship_filter").get(scholarship_filter);

module.exports = router;
