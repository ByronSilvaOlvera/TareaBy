const { Router } = require('express');
const { getTask, addTask, updateTask, getTaskOne , deleteTask} = require('../controllers/task');

//path api/usuario

const router = Router();



router.post('/user' , getTask );
router.get('/id' , getTaskOne );
router.post('/add' , addTask );
router.put('/edit' , updateTask );deleteTask
router.post('/delete' , deleteTask );


module.exports = router;