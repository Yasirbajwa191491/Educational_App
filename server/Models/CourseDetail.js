const {Schema,model}=require("mongoose");

const programSchema=new Schema({
	courseName:{
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
	duration:{
		type: String,
	},

})
const CourseDetail=model("CourseDetail",programSchema);


module.exports=CourseDetail;