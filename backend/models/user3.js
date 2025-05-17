const mongoose = require('mongoose');

const UserSchema3 = new mongoose.Schema(
    {
        email:String,
        opt1:String,
        guest:String,
        opt2:String,
        city2:String,
        date3:String,
        date4:String
    }
)
const UserModel3 = new mongoose.model('weddingdata',UserSchema3,'weddingdata');

module.exports = UserModel3;
