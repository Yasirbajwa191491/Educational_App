const {Schema,model}=require("mongoose");

const countrySchema=new Schema({
	country:{
		type: String,
		required:[true,"Country name is required"],
		unique:[true,"Country name must be unique"],
	}
})
const Country=model("Country",countrySchema);


module.exports=Country;