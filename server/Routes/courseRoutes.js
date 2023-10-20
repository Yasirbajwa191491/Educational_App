const {allCoursesList,submitCourse,course_filter}=require('../Controllers/courseController');
const express = require("express");

const router = express.Router();
router.route("/submitCourse").post(submitCourse);
router.route("/allCoursesList").get(allCoursesList);
router.route("/course-filter").get(course_filter);

module.exports = router;
