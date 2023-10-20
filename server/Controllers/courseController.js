const CourseDetail   = require("../Models/CourseDetail")


const submitCourse=(async(req,res)=>{
   
try {
    const {courseName,country,program,university,startMonth,startYear,duration}=req.body;
    
    const newProgram=new CourseDetail({courseName,country,program,university,startMonth,startYear,duration})
    await newProgram.save();
    res.status(201).send({message:"Course saved successfully"})
} catch (error) {
    res.status(500).json({error: error})
    
}
})
const allCoursesList=(async(request,res) => {
    try {
        const allCoursesListing = await CourseDetail.find({}).sort({_id:-1});
        return res.status(200).json(allCoursesListing);
    } catch (error) {
        res.status(500).json({error: error})
    }
})
const course_filter=(async(req,res) => {
    try {
        const {country,program,university,startMonth,startYear}=req.query;
        const allCoursesListing = await CourseDetail.find({
            $or: [
                { country },
              { program },
              { university },
              { startMonth},
              { startYear}
              ]
        }).sort({_id:-1});
        return res.status(200).json(allCoursesListing);
    } catch (error) {
        res.status(500).json({error: error})
    }
})

module.exports = {
    allCoursesList,
    submitCourse,
    course_filter
}

