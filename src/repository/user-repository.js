const User=require("../models/user")
const CrudRepository = require("../repository/crud-repository")

class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }
   
    async getAll(offset, limit) {
            try {
                const user = await User.find().skip(offset).limit(limit);
                return user;
            } catch (error) {
                console.log(error);
            }
        }
}

module.exports=UserRepository;