const { Router } = require('express');
const { getUsuarios, addUsuarios, updateUsuarios } = require('../controllers/usuarios');

//path api/usuario

const router = Router();



router.get('/' , getUsuarios );
router.post('/add' , addUsuarios );
router.put('/edit' , updateUsuarios );


module.exports = router;