const { response } = require('express');
const task = require('../models/task');
const Task = require('../models/task');



// tareas por usuario
const getTask = async ( req, res = response) => {    
    
    try{

        const user = req.body.id;
        var f = new Date();
        var entidad = await Task.find({ usuario : user });
        entidad.forEach(
            data =>{
                let f1 = Date(data.finTask);
                let f2 = Date(f);
                console.log(f1 ,'>', f2 ); // tarea Ejecutandose;
                console.log(f1 ,'<', f2 ); // tarea terminada;
                if( f1 < f2 ){
                    entidad.estado = 'Ejecutandose';
                }else if( f1 > f2  ){
                    entidad.estado = 'Terminda';
                }
            }
        )

        //console.log(entidad);
        res.status(200).json({
            ok : true, msg : 'todo bien', entidad
        });
    }catch(e){
        console.log('error');
    }

}


const getTaskOne = async ( req, res = response) => {    

    try {
        
        const idTask = req.query.ix;
        console.log(idTask);
        const entidad = await Task.find({ _id : idTask });
        
        res.status(200).json({
            ok : true, msg : 'todo bien'
            , entidad
        });
    } catch (error) {
        console.log(error);
    }
}
//validaciones por dia 

// validaciones por usuario

// tarea por usuario y meneores de 5 
const addTask = async ( req, res = response) => {    
    try {
        
        const user = req.body.usuario
               

        if( await Task.find({ usuario : user }).count( x => x ) < 5 ){
            const entidad = new Task( req.body );
            await entidad.save();
        }
        else{
            res.status(200).json({
                ok : false, msg : 'No puede agregar mas tareas',         
            })    
        }
        
        res.status(200).json({
            ok : true, msg : 'todo bien EC', 
            //entidad
    
        });
    } catch (error) {
        console.log(error);
    }
}

const fechaTask = async ( req, res = response) => {  

    const { fecha, fechaFinal } = req.body;

    const entidad =  await Task.find({ fecha : fecha , finTask : fechaFinal });


  }


const updateTask = async ( req, res = response) => {    
    try {
        
        const entidad =  {
            descripcion : req.body.descripcion,
            estado :req.body.estado
        } ;
        const idTask = req.body._id;
        console.log(idTask ); // edit' , entidad, req.body , 

        // await Task.updateOne( { _id :idTask}, { entidad });

        // res.status(200).json({
        //     ok : true, msg : 'todo bien',            
        // });

        // Task.updateOne( idTask, entidad , { new : true }, 
        //     (err, entidad) => {
        //         if( err) throw err;
        //         if( !entidad ){
        //             return res.status(200).json({
        //                 ok : false, msg : 'No existe',                         
        //             });
        //         }
        //         res.status(200).json({
        //             ok : true, msg : 'todo bien', 
        //             entidad
        //         });
                
        //     } );

        //findOneAndUpdate NO UTILIZAR
        //Task.findOneAndUpdate()
        Task.findByIdAndUpdate( idTask, entidad, {new : true }, 
            (err, entidad) => {
                if( err) throw err;
                if( !entidad ){
                    return res.status(200).json({
                        ok : false, msg : 'No existe',                         
                    });
                }
                res.status(200).json({
                    ok : true, msg : 'todo bien', 
                    entidad
                });
                
            }) 
        

    } catch (error) {
        console.log(error);
    }
}


const deleteTask = async ( req, res = response) => { 
    const id = req.body.id;
    await Task.deleteOne({ _id : id })
    
    console.log(id);

    res.status(200).json({
        ok : true, msg : 'Eliminada',
    });

 }

module.exports = {
    getTask,
    addTask,
    updateTask, getTaskOne
    ,deleteTask
}