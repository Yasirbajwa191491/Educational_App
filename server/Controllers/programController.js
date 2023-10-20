const Program   = require("../Models/Program")


const submitProgram=(async(req,res)=>{
   
try {
    const {program}=req.body;
    
    const newProgram=new Program({program})
    await newProgram.save();
    res.status(201).send({message:"Program saved successfully"})
} catch (error) {
    res.status(500).json({error: error})
    
}
})
const allPrograms=(async(request,res) => {
    try {
        const allPrograms = await Program.find({}).sort({_id:-1});
        return res.status(200).json(allPrograms);
    } catch (error) {
        res.status(500).json({error: error})
    }
})

module.exports = {
    allPrograms,
    submitProgram
}

