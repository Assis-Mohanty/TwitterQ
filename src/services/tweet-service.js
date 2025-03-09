const Hashtag = require("../models/hashtag");
const HashtagRepository = require("../repository/hashtag-repository");
const TweetRepository=require("../repository/tweet-repository")

class TweetService{
    constructor(){
        this.tweetRepository=new TweetRepository();
        this.hashtagRepository=new HashtagRepository()
    }
    async create(data){
        const content=data.content;
        const tags=content.match(/#[a-zA-Z0-9_]+/g).map((tag)=>tag.substring(1));
        console.log(tags)
        const tweet=await this.tweetRepository.create(data);
        // create hashtags and add
        let alreadyPresentTags=await this.hashtagRepository.findByName(tags);
        let titleOfPresentTags=alreadyPresentTags.map((tag)=>tag.title)
        let newTags=tags.filter(tag=>!titleOfPresentTags.includes(tag));
        newTags=newTags.map((tag)=>{
            return { title:tag,
             tweets:[tweet.id]}
         })
        const response=await this.hashtagRepository.bulkCreate(newTags)
        alreadyPresentTags.forEach((tag)=>{
            tag.tweets.push(tweet.id);
            tag.save();
        }); 
        console.log(response)
        return tweet;
    }
}
module.exports=TweetService;