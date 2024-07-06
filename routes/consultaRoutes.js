const express = require('express');
const router = express.Router();
const consultaController = require('../controllers/consultaController');

// Endpoints de consulta
router.get('/funciones/pelicula/:idPelicula', (req, res) => {
    const idPelicula = req.params.idPelicula;
    const funciones = consultaController.obtenerFuncionesPorPelicula(idPelicula);
    res.json(funciones);
});

router.get('/localidades/sala/:idSala', (req, res) => {
    const idSala = req.params.idSala;
    const localidades = consultaController.obtenerLocalidadesPorSala(idSala);
    res.json(localidades);
});

router.get('/funciones/sala/:idSala', (req, res) => {
    const idSala = req.params.idSala;
    const funciones = consultaController.obtenerFuncionesPorSala(idSala);
    res.json(funciones);
});

router.get('/ventas/puesto/:idPuesto', (req, res) => {
    const idPuesto = req.params.idPuesto;
    const ventas = consultaController.obtenerVentasPorPuesto(idPuesto);
    res.json(ventas);
});

router.get('/peliculas/cine/:idCine', (req, res) => {
    const idCine = req.params.idCine;
    const peliculas = consultaController.obtenerPeliculasPorCine(idCine);
    res.json(peliculas);
});

module.exports = router;
