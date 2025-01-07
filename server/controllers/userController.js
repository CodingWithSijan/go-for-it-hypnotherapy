const UserModel = require("../models/User");
//fetch All users
const fetchAllUsers = async (req, res) => {
    try{
        const user = await UserModel.find();
        res.status(200).json({user});
        console.log(user, typeof user);
    }catch(error){
        res.status(500).json({message:"bad request", success:false})
    }
}

module.exports = { fetchAllUsers };