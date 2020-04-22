const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

// Crearemos una instancia del objeto Schema
var TareaSchema = new Schema({
    nombreEncargado: String,
    descripcionTarea: String,
    estado: String
});

// Exportar el Schema
module.exports = mongoose.model('Tarea', TareaSchema);
