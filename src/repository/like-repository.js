const Like=require("../models/like")
const CrudRepository = require("../repository/crud-repository")

class LikeRepository extends CrudRepository{
    constructor(){
        super(Like);
    }
}

module.exports=LikeRepository;