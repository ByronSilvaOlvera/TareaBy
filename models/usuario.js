const { Schema , model} = require('mongoose');





const UsuarioSchema = Schema ({
    nombre: {
        type : String,
        required : true
    },
    apellido: {
        type : String,
        required : true
    },
    edad: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true,
        unique : true
    },
    password: {
        type : String,
        required : true
    }
})


// UsuarioSchema.method('toJSON' , function() {

//     // creando un objeto donde no va enviar __v, _id, ni el passowrd coomo un filtro
//     // de javascript 
//     const { __v, _id , password , ...object } = this.toObject();
//     object.uid = _id;
//     return object;
// })


module.exports = model('Usuario' , UsuarioSchema );