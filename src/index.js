const express=require("express")
const connect =require("./config/database");
const Tweet = require("./models/tweet");
const app=express()
const {TweetRepository,HashtagRepository}=require("./repository/index")
const TweetService=require("./services/tweet-service")
app.listen(3000,async()=>{
    console.log("server started");
    await connect();
    console.log("mongodb connected ")
    // const tweet=await Tweet.find({
    //     content:{
    //         $all:["First asdwa","qqq....","kqdsdwa"]
    //     }
    // })
    // let rep=new HashtagRepository();
    // const response=await rep.findByName(['Friends','Exited'])
    // console.log(response)
    // const tw=await Tweet.create({
    //     content:"qqq"
    // })
    // let rep=new HashtagRepository();
    // await rep.bulkCreate([
    //     {title:"Friends",
    //         tweets:[]
    //     },
    //     {title:"Exited",
    //         tweets:[]
    //     },
    //     {title:"QQQ",
    //         tweets:[]
    //     },
    //     {title:"qwq",
    //         tweets:[]
    //     },
        
    // ])
    let service=new TweetService();
    const tweet=await service.create({
        content:"working #tweets ?"
    })



    console.log(tweet)
})