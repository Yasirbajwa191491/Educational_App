const {Schema,model}=require("mongoose");

const programSchema=new Schema({
	scholarship:{
		type: String,
	},
	country:{
		type: String,
	},
	program:{
		type: String,
	},
	university:{
		type: String,
	},
	startMonth:{
		type: String,
	},
	startYear:{
		type: Number,
	},
	

})
const ScholarshipDetail=model("ScholarshipDetail",programSchema);


module.exports=ScholarshipDetail;