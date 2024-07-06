const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3002;

// Middleware
app.use(bodyParser.json());

// Rutas para CRUD----------

// 1-PELICULAS- CRUD
const peliculaRoutes = require('./routes/peliculaRoutes');
app.use('/api/peliculas', peliculaRoutes);

//2-SALAS -CRUD
const salaRoutes = require('./routes/salaRoutes');
app.use('/api/salas', salaRoutes);

//3-FUNCION CRUD
const funcionRoutes = require('./routes/funcionRoutes');
app.use('/api/funciones', funcionRoutes);

//4-FILA -CRUD
const filaRoutes = require('./routes/filaRoutes');
app.use('/api/filas', filaRoutes);

// 5- PUESTOS - CRUD
const puestoRoutes = require('./routes/puestoRoutes');
app.use('/api/puestos', puestoRoutes);

//6 - CINE - CRUD
const cineRoutes = require('./routes/cineRoutes');
app.use('/api/cines', cineRoutes);

//7-ClIENTES -CRUD
const clienteRoutes = require('./routes/clienteRoutes');
app.use('/api/clientes', clienteRoutes);

//8-TAQUILLERO - CRUD
const taquilleroRoutes = require('./routes/taquilleroRoutes');
app.use('/api/taquilleros', taquilleroRoutes);

// LOCALIDAD- CRUD
const localidadRoutes = require('./routes/localidadRoutes');
app.use('/api/localidades', localidadRoutes);

//PARA VENTAS
const ventaRoutes = require('./routes/ventaRoutes');
app.use('/api/ventas', ventaRoutes);

//-----PARA ENDPOINTS---------------

//PARA REALIZAR LAS CONSULTAS
const consultaRoutes = require('./routes/consultaRoutes');
app.use('/api/consultas', consultaRoutes);
//Para correr el en puerto :3002
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
