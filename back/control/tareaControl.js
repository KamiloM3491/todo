const Tarea = require('../modelo/tareas'); 

// CREAR TAREA
function crearTarea(req, res){
    var tarea = new Tarea();
    var parametros = req.body;

    // Guardamos cada propiedad del json de la peticion en cada propiedad del modelo
    tarea.nombreEncargado = parametros.nombreEncargado;
    tarea.descripcionTarea = parametros.descripcionTarea;
    tarea.estado = parametros.estado;

    tarea.save((err, tareaNueva)=>{
        if(err){
            res.status(500).send({ message: "Error en el sevidor"});
        } else{
            if(!tareaNueva){
                res.status(200).send({ message: "No fue posible realizar el registro" });
            } else{
                res.status(200).send({
                    status: 'Tarea Creada',
                    tarea: tareaNueva
                });
            }
        }
    });
}

// OBTENER TAREAS
function obtenerTareas(req, res){
    Tarea.find((err, tareasEncontradas)=>{
        if(err){
            res.status(500).send({ message: "Error en el servidor" });
        }else{
            if(!tareasEncontradas){
                res.status(200).send({ message: "No fue posible actualizar los datos" });
            } else{
                res.status(200).send({
                    status: 'Tareas Encontradas',
                    tareas: tareasEncontradas
                });
            }
        }
    });
}

// ACTUALIZAR TAREA
function actualizarTarea(req, res){
    var tareaId = req.params.id;
    var nuevosDatosTarea = req.body;

    Tarea.findByIdAndUpdate(tareaId, nuevosDatosTarea, (err, tareaActualizada)=>{
        if(err){
            res.status(500).send({ message: "Error en el servidor" });
        }else{
            if(!tareaActualizada){
                res.status(200).send({ message: "No fue posible actualizar los datos" });
            } else{
                res.status(200).send({
                    status: 'Tarea Actualizada',
                    tarea: nuevosDatosTarea
                });
            }
        }
    });
}

// ELIMINAR TAREA
function eliminarTarea(req, res){
    var tareaId = req.params.id;

    Tarea.findByIdAndDelete(tareaId, (err, tareaEliminada) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar' });
        } else {
            if (!tareaEliminada) {
                res.status(404).send({ message: 'No se pudo eliminar la cancion' });
            } else {
                res.status(200).send({ 
                    status: 'Tarea Eliminada',
                    tarea: tareaEliminada 
                });
            }
        }
    });
}

// Exportación de las funciones creadas
module.exports = {
    crearTarea,
    obtenerTareas,
    actualizarTarea,
    eliminarTarea
};
