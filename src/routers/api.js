const express =require('express');
const { taskCreate, taskDelete, taskStatusUpdate, listTaskByStatus, taskStatusByCount } = require('../controllers/TaskControllers');
const {registration, login, profileUpdate } = require('../controllers/UserController');
const AuthVerify = require('../middlewares/AuthVerify');
const router = express.Router()



router.post('/registration', registration)
router.post('/login', login)
router.post('/profileUpdate', AuthVerify, profileUpdate)

router.post('/taskCreate',AuthVerify, taskCreate)
router.post('/taskDelete/:id',AuthVerify, taskDelete)
router.post('/taskStatusUpdate/:id/:status', AuthVerify, taskStatusUpdate)


router.get('/listTaskByStatus/:status',AuthVerify, listTaskByStatus)
router.get('/taskStatusByCount',AuthVerify, taskStatusByCount)

module.exports=router;