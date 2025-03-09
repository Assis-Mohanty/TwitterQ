const express=require("express")
const connect =require("./config/database");
const Tweet = require("./models/tweet");

const apiRoutes =require("./routes/index.js")
const app=express()
)
const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))
app.use("/api",apiRoutes)
app.listen(3000,async()=>{
    console.log("server started");
    await connect();
    console.log("mongodb connected ")
})