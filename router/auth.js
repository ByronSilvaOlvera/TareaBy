const { Router } = require('express');
const {  login  } = require('../controllers/auth');


const router = Router();

// router.post('/' , [
//     //check('email' , 'Es necesario el email').isEmail(),
//     //check('password', 'Es necesario elpassword').not().isEmpty(),
//     //validarCampos
// ],  login );

router.post('/in' , login );


module.exports = router;