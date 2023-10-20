const Scholarship   = require("../Models/Scholarship")


const submitScholarship=(async(req,res)=>{
   
try {
    const {scholarship}=req.body;
    
    const newScholarship=new Scholarship({scholarship})
    await newScholarship.save();
    res.status(201).send({message:"Scholarship saved successfully"})
} catch (error) {
    res.status(500).json({error: error})
    
}
})
const allScholarships=(async(request,res) => {
    try {
        const allScholarships = await Scholarship.find({}).sort({_id:-1});
        return res.status(200).json(allScholarships);
    } catch (error) {
        res.status(500).json({error: error})
    }
})

module.exports = {
    allScholarships,
    submitScholarship
}

