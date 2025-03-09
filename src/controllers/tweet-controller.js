const TweetService = require("../services/tweet-service")

const tweetService = new TweetService()
const createTweet=async(req,res)=>{
    try {
        const response= await tweetService.create(req.body);
        return res.status(201).json({
            succes:true,
            message:"Successfully created a tweet",
            data:response,
            err:{}
        });
    } catch (error) {
        return res.status(500).json({
            succes:false,
            message:"Something went wrong",
            data:{},
            err:error
        })
    }
}

module.exports ={
    createTweet
}