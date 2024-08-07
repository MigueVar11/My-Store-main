const express = require('express');
const router = express.Router();
const funcionController = require('../controllers/funcionController');

// Rutas CRUD para Función
router.post('/', (req, res) => {
    const {idFuncion, idPelicula, fecha, hora, idVenta,idLocalidad } = req.body;
    const funcion = funcionController.crearFuncion(idFuncion, idPelicula, fecha, hora, idVenta,idLocalidad);
    res.json(funcion);
});

router.get('/', (req, res) => {
    const funciones = funcionController.obtenerFunciones();
    res.json(funciones);
});

router.get('/:idFuncion', (req, res) => {
    const idFuncion = req.params.idFuncion;
    const funcion = funcionController.obtenerFuncionPorId(idFuncion);
    if (funcion) {
        res.json(funcion);
    } else {
        res.status(404).send('Función no encontrada');
    }
});

router.put('/:idFuncion', (req, res) => {
    const idFuncion = req.params.idFuncion;
    const { idPelicula, fecha, hora, idVenta,idLocalidad } = req.body;
    const funcion = funcionController.actualizarFuncion(idFuncion, idPelicula, fecha, hora, idVenta,idLocalidad);
    if (funcion) {
        res.json(funcion);
    } else {
        res.status(404).send('Función no encontrada');
    }
});

router.delete('/:idFuncion', (req, res) => {
    const idFuncion = req.params.idFuncion;
    funcionController.eliminarFuncion(idFuncion);
    res.send('Función eliminada correctamente');
});

module.exports = router;
