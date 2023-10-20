const University   = require("../Models/University")


const submitUniversity=(async(req,res)=>{
   
try {
    const {university}=req.body;
    
    const newuniversity=new University({university})
    await newuniversity.save();
    res.status(201).send({message:"University saved successfully"})
} catch (error) {
    res.status(500).json({error: error})
    
}
})
const allUniversity=(async(request,res) => {
    try {
        const allUniversity = await University.find({}).sort({_id:-1});
        return res.status(200).json(allUniversity);
    } catch (error) {
        res.status(500).json({error: error})
    }
})

module.exports = {
    allUniversity,
    submitUniversity
}

