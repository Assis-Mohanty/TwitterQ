const LikeRepository=require("../repository/like-repository")
const TweetRepository=require("../repository/tweet-repository")

class LikeService{
    constructor(){
        this.likeRepository=new LikeRepository();
        this.tweetRepository=new TweetRepository();
    }
    async toggleLike(modelId,modelType,userId){
        if (modelType === "Tweet") {
            var likeable = await this.tweetRepository.get(modelId);
            if (!likeable) {
                throw new Error("Tweet not found");
            }
            likeable = await likeable.populate("likes"); 
        }
        else if (modelType=="Comment"){
            //TODO 
        }
        else{
            throw new Error("Unknown model type")
        }
        const exists=await this.likeRepository.findByUserAndLikeable({
            user:userId,
            onModel:modelType,
            likeable:modelId
        });
        if(exists){
            likeable.likes.pull(exists.id)
            await likeable.save();
            await exists.deleteOne();
            var isRemoved=true
        }
        else{
            const newLike=await this.likeRepository.create({
                user:userId,
                onModel:modelType,
                likeable:modelId
            });
            likeable.likes.push(newLike);
            await likeable.save();
            var isRemoved=false
        }
        return isRemoved;
    }

}

module.exports=LikeService;