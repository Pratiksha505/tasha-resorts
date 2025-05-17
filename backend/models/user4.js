const mongoose = require('mongoose');

const UserSchema4 = new mongoose.Schema(
    {
        email:String,
        opt3:String,
        guest1:String,
        opt4:String,
        city3:String,
        date5:String,
        
    }
)
const UserModel4 = new mongoose.model('eventdata',UserSchema4,'eventdata');

module.exports = UserModel4;