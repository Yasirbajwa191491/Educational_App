const express = require('express');
const dotenv=require("dotenv");
const cors=require("cors");
const programRoutes = require("./Routes/programRoutes")
const countryRoutes = require("./Routes/countryRoutes")
const universityRoutes = require("./Routes/universityRoutes")
const scholarshipRoutes = require("./Routes/scholarshipRoutes")
const courseRoutes = require("./Routes/courseRoutes")
const scholarshipDetailRoutes = require("./Routes/scholarshipDetailRoutes")
const app = express();
app.use(express.json()); 

// for cors policy 
app.use(cors({
    origin:["http://localhost:3000","http://localhost:3001"]
}))

// connection db 
require("./DB/conn")


//all routes
app.use("/api/country",countryRoutes)
app.use("/api/program",programRoutes)
app.use("/api/univeristy",universityRoutes)
app.use("/api/scholarship",scholarshipRoutes)
app.use("/api/course",courseRoutes)
app.use("/api/scholarshipDetail",scholarshipDetailRoutes)



dotenv.config({path:'./config.env'});

const port=process.env.PORT ||8000;
app.listen(port,()=>{
    console.log(`listening on ${port}`);
})