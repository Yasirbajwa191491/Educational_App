const {Schema,model}=require("mongoose");

const programSchema=new Schema({
	program:{
		type: String,
		required:[true,"Program name is required"],
		unique:[true,"Program name must be unique"],
	}
})
const Program=model("Program",programSchema);


module.exports=Program;