const { response } = require('express');
const Usuario = require('../models/usuario');

const getUsuarios = async ( req, res = response) => {    

    const usuario = await Usuario.find();
    res.status(200).json({
        ok : true, msg : 'todo bien', usuario
    });
}

const addUsuarios = async ( req, res = response) => {    
    try {
        
        const usuario = new Usuario( req.body );
        console.log(req.body);
        await usuario.save();
        res.status(200).json({
            ok : true, msg : 'todo bien EC', usuario
    
        });
    } catch (error) {
        console.log(error);
    }
}

const updateUsuarios = async ( req, res = response) => {    
    const usuario = new Usuario( req.body );

    const rs = await Usuario.findOneAndUpdate( { id: req.params }, {subcriptions : usuario });

    res.status(200).json({
        ok : true, msg : 'todo bien', data : rs
    });
}

module.exports = {
    getUsuarios,
    addUsuarios,
    updateUsuarios
}