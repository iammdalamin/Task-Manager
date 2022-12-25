const jwt  = require("jsonwebtoken");
const UserModel = require("../models/UserModel");


exports.registration = (req, res) => {
    let reqBody = req.body
    
    UserModel.create(reqBody, (err, data) => {
        if (err) {
            res.status(200).json({
                status: "fail",
                data:err
            })
        } else {
            res.status(200).json({
                status: "Registration Successfull",
                data:data
            })
        }
    })
}
 

exports.login = (req, res) => {
    let reqBody = req.body;
    UserModel.aggregate([
        { $match: reqBody },
        {$project: {_id:0, email:1, firstName:1, lastName:1, mobile:1, photo:1}}
    ], (err, data) => {
        if (err) {
            res.status(400).json({
                status: "Failed to login",
                data:err
            })
        } else {
            if (data.length > 0) {
                let Payload = { exp: Math.floor(Date.now() / 1000) * (24 * 60 * 60), data: data[0]["email"] }
                let token = jwt.sign(Payload, process.env.JWT_VERIFY_PASSWORD)
                res.status(200).json({
                    status: "Login Successfully",
                    token: token,
                    data:data[0]
                })
            } else {
                res.status(401).json({
                    status: "Failed to login "
                })
            }
        }
    })
}

exports.profileUpdate = (req, res) => {

    let email = req.headers['email'];
    let reqBody = req.body;

    UserModel.updateOne({ email: email }, reqBody, (err, data) => {
        if (err) {
            res.status(400).json({
                status: "Fail to Update",
                data:err
            })
        } else {
            res.status(200).json({
                status: "Updated Successfull",
                data:data
            })
        }
    })
    
}