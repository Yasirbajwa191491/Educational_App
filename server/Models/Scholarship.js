const {Schema,model}=require("mongoose");

const scholarshipSchema=new Schema({
	scholarship:{
		type: String,
		required:[true,"Scholarship name is required"],
		unique:[true,"Scholarship name must be unique"],
	}
})
const Scholarship=model("Scholarship",scholarshipSchema);


module.exports=Scholarship;