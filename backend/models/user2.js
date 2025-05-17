const mongoose = require('mongoose');

const UserSchema2 = new mongoose.Schema(
    {
        email:String,
        opt5:String,
        guest2:String,
        opt6:String,
        city1:String,
        date6:String,
        time:String
    }
)
const UserModel2 = new mongoose.model('tabledata',UserSchema2,'tabledata');

module.exports = UserModel2;
