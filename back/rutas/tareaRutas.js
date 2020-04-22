const express = require('express');
const TareaControl = require('../control/tareaControl');

var api = express.Router(); 

// Declaración de las rutas 
// Ruta Agregar Tareas
api.post('/', TareaControl.crearTarea);
// Ruta Consultar Tareas
api.get('/', TareaControl.obtenerTareas);
// Ruta Actualizar Datos Tarea
api.put('/:id', TareaControl.actualizarTarea);
// Ruta Eliminar Tarea
api.delete('/:id', TareaControl.eliminarTarea);

// Exportación del archivo
module.exports = api;