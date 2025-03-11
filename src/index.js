const express=require("express")
const connect =require("./config/database");
const Tweet = require("./models/tweet");

const apiRoutes =require("./routes/index.js")
const app=express()
const UserRepository=require("./repository/user-repository.js")
const LikeService=require("./services/like-service.js")
const bodyParser=require("body-parser");
const TweetRepository = require("./repository/tweet-repository.js");
const User = require("./models/user.js");
const CommentRepository = require("./repository/comment-repository.js");
const router = require("./routes/v1/index.js");
app.use(bodyParser.urlencoded({extended:true}))
app.use("/api",apiRoutes)
app.listen(3000,async()=>{
    console.log("server started");
    await connect();
    console.log("mongodb connected ")

    const userRepo=new UserRepository();
    const tweetRepo=new TweetRepository();
    const users=await userRepo.get();
    const tweets= await tweetRepo.getAll(0,10);

    const commentRepo=new CommentRepository();
    const comment= await commentRepo.create({
        content:"sihdaskndad",
        userId:"67cemmc91a698eac2b9476c56b",
        modelId:"67cd3c7ccb425423c0738654",
        modelType:"Tweet"
    })
    console.log(comment)

})