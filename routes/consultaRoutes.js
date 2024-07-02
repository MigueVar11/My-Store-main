const express = require('express');
const router = express.Router();
const consultaController = require('../controllers/consultaController');

// Rutas para Consultas

//Funciones por pelicula
router.get('/funciones/pelicula/:idPelicula', (req, res) => {
    const idPelicula = req.params.idPelicula;
    const funciones = consultaController.consultarFuncionesPorPelicula(idPelicula);
    res.json(funciones);
});
//Funciones por sala
router.get('/funciones/sala/:idSala', (req, res) => {
    const idSala = req.params.idSala;
    const funciones = consultaController.consultarFuncionesPorSala(idSala);
    res.json(funciones);
});
//Boletos por funcion
router.get('/boletos/funcion/:idFuncion', (req, res) => {
    const idFuncion = req.params.idFuncion;
    const boletos = consultaController.consultarBoletosPorFuncion(idFuncion);
    res.json(boletos);
});
//Disponibilidad puestos
router.get('/disponibilidad/funcion/:idFuncion', (req, res) => {
    const idFuncion = req.params.idFuncion;
    const puestosOcupados = consultaController.consultarDisponibilidadDePuestos(idFuncion);
    res.json(puestosOcupados);
});
//Historial de compras
router.get('/historial/cliente/:idCliente', (req, res) => {
    const idCliente = req.params.idCliente;
    const historial = consultaController.consultarHistorialDeCompras(idCliente);
    res.json(historial);
});

module.exports = router;
