const mongoose = require('mongoose');

const UserSchema1 = new mongoose.Schema(
    {
        email:String,
        option:String,
        city:String,
        date1:String,
        date2:String
    }
)
const UserModel1 = new mongoose.model('roomdata',UserSchema1,'roomdata');


module.exports = UserModel1;
