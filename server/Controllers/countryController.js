const Country   = require("../Models/Country")


const submitCountry=(async(req,res)=>{
   
try {
    const {country}=req.body;
    
    const newCountry=new Country({country})
    await newCountry.save();
    res.status(201).send({message:"Country saved successfully"})
} catch (error) {
    res.status(500).json({error: error})
    
}
})
const allCountry=(async(request,res) => {
    try {
        const allCountry = await Country.find({}).sort({_id:-1});
        return res.status(200).json(allCountry);
    } catch (error) {
        res.status(500).json({error: error})
    }
})

module.exports = {
    allCountry,
    submitCountry
}

