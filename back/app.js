const express = require('express'); 
const cors = require('cors');
const app = express();

const tareaRutas = require('./rutas/tareaRutas');

// -- MIDDLEWARES --
app.use(express.json());
app.use(cors());

// Consumo de las rutas
app.use('/api', tareaRutas);
// -- FIN MIDDLEWARES --

module.exports = app;
