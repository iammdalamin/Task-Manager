const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    title:{type:String},
    desc:{type:String},
    status:{type:String},
    email:{type:String},
    createdDate:{type:Date, default:Date.now()}
    
}, { versionKey: false })



const TaskModel = mongoose.model('tasks', TaskSchema)

module.exports=TaskModel