const { Schema , model} = require('mongoose');

const usuario = require('./usuario');



const TaskSchema = Schema ({
    descripcion: {
        type : String,
        required : true
    },
    estado: {
        type : String,
        required : true
    }, // Ejecutandose , finalizada , pausada, cancelada
    fecha: {
        type : Date,
        required : true
    },
    finTask: {
        type : Date,
        required : true
    },
    usuario: {
        type : Schema.Types.ObjectId,
        ref : usuario,
        required : true
    },
    
}
,
{
    timestamps: true
})






module.exports = model('Task' , TaskSchema );