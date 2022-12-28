const TaskModel = require("../models/TaskModel")

exports.taskCreate = (req, res) => {
    let reqBody = req.body;
    reqBody.email = req.headers['email'];

    TaskModel.create(reqBody, (err, data)=> {
        if (err) {
            res.status(400).json({
                status: "Fail to Create task",
                data:err
            })
        } else {
            res.status(200).json({
                status: "Task Create Successfully",
                data:data
            })
        }
    }) 
}

exports.taskDelete = (req, res) => {
    let id = req.params.id;
    console.log(id);

    TaskModel.deleteOne({_id:id}, (err, data)=> {
        if (err) {
            res.status(400).json({
                status: "Fail to Delete task",
                data:err
            })
        } else {
            res.status(200).json({
                status: "Delete Successfully",
                data:data
            })
        }
    }) 
}

exports.taskStatusUpdate = (req, res) => {
    let id = req.params.id;
    let status = req.params.status;

    // let Query = { _id: id };
    // let reqBody = {status:status}
    

    TaskModel.updateOne({_id:id},{status:status}, (err, data)=> {
        if (err) {
            res.status(400).json({
                status: "Fail to Update task",
                data:err
            })
        } else {
            res.status(200).json({
                status: "Update Successfully",
                data:data
            })
        }
    }) 
}

exports.listTaskByStatus = (req, res) => {
    let status = req.params.status;
    let email = req.headers["email"]

    TaskModel.aggregate([
        {$match: { status: status, email: email }},
        {
            $project: {
                _id: 1, title: 1, desc: 1, status: 1, createdDate: {
                    $dateToString: {
                        date: '$createdDate',
                        format: "%d-%m-%Y"
                }
            }
        }}
    ], (err, data) => {
        if (err) {
            res.status(400).json({
                status: "Fail to Listed task status",
                data:err
            })
        } else {
            res.status(200).json({
                status: "Listed task status Successfully",
                data:data
            })
        }
    })
}

exports.taskStatusByCount = (req, res) => {
    let email = req.headers["email"]

    TaskModel.aggregate([
        {$match: { email: email }},
        {
            $group:{_id:"$status", sum:{$count:{}}}
        }
    ], (err, data) => {
        if (err) {
            res.status(400).json({
                status: "Fail to count status",
                data:err
            })
        } else {
            res.status(200).json({
                status: "Count status Successfully",
                data:data
            })
        }
    })
}