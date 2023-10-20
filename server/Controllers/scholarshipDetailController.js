const ScholarshipDetail   = require("../Models/ScholarshipDetail")


const submitScholarshipDetail=(async(req,res)=>{
   
try {
    const {scholarship,country,program,university,startMonth,startYear}=req.body;
    
    const newProgram=new ScholarshipDetail({scholarship,country,program,university,startMonth,startYear})
    await newProgram.save();
    res.status(201).send({message:"Scholarship saved successfully"})
} catch (error) {
    res.status(500).json({error: error})
    
}
})
const allScholarshipDetailList=(async(request,res) => {
    try {
        const allCoursesListing = await ScholarshipDetail.find({}).sort({_id:-1});
        return res.status(200).json(allCoursesListing);
    } catch (error) {
        res.status(500).json({error: error})
    }
})
const scholarship_filter=(async(req,res) => {
    try {
        const {scholarship,country,program,university,startMonth,startYear}=req.query;
        const allCoursesListing = await ScholarshipDetail.find({
            $or: [
                { scholarship },
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
    allScholarshipDetailList,
    submitScholarshipDetail,
    scholarship_filter
}

