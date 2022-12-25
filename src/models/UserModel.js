const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const UserSchema = new mongoose.Schema({
    email:{type:String,unique:true},
    firstName:{type:String},
    lastName:{type:String},
    mobile:{type:String},
    photo:{type:String},
    password: { type: String, required: true },
    createdDate:{type:Date, default:Date.now()}
    
}, { versionKey: false })



const UserModel = mongoose.model('users', UserSchema)

module.exports=UserModel