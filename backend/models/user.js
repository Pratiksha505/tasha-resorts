const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema(
    {
        email:String,
        password:String
    }
)

const UserModel= new mongoose.model('logindata', UserSchema,'logindata');

module.exports = UserModel;