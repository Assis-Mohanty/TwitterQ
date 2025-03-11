const express=require("express")

const {createTweet} =require("../../controllers/tweet-controller")
const {toggleLike}=require("../../controllers/like-controllers")
const {createComment}=require("../../controllers/comment-controllers")
const router=express.Router();

router.post("/tweets",createTweet);
router.post("/tweets/toggle",toggleLike);
router.post('/comments',createComment);

module.exports=router;