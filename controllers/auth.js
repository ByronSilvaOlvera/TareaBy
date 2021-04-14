const { response , request, Router } = require('express');
const Usuario = require('../models/usuario');
const Logueo = require('../models/logeo');




const login = async ( req , res=response ) => {
    const { email , password } = req.body ;

    console.log(req.body);

    try {
          
        const usuarioBD = await Usuario.findOne({ email  });
        if( !usuarioBD){
            return res.status(404).json({
                ok: false, msg : 'Email no encontrado'
            });
        }
        console.log(password , usuarioBD.password);
        if( password !== usuarioBD.password){
            return res.status(200).json({
                ok: false, msg : 'Contraseña incorrecta'
            });
        }
        
        const logUser = new Logueo(req.body);
        await logUser.save();
        console.log('logeo ', usuarioBD.id);

        res.status(200).json({
            ok: true, msg : usuarioBD.id,
        });
        
    } catch (error) {
        console.log('Error el administrador');
        return res.status(500).json({    
            ok : false,
            msg : 'Hable con el administrador'
        })
    }
}




module.exports = {
    login
}