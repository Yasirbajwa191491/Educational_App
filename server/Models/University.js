const {Schema,model}=require("mongoose");

const universitySchema=new Schema({
	university:{
		type: String,
		required:[true,"University name is required"],
		unique:[true,"University name must be unique"],
	}
})
const University=model("University",universitySchema);


module.exports=University;