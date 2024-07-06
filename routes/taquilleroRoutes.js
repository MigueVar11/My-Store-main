const express = require('express');
const router = express.Router();
const taquilleroController = require('../controllers/taquilleroController');

// Rutas CRUD
router.post('/', (req, res) => {
    const { idTaquillero, nombre, apellido, cedula,idCine } = req.body;
    const taquillero = taquilleroController.crearTaquillero(idTaquillero, nombre, apellido, cedula,idCine) ;
    res.json(taquillero);
});

router.get('/', (req, res) => {
    const taquilleros = taquilleroController.obtenerTaquilleros();
    res.json(taquilleros);
});

router.get('/:idTaquillero', (req, res) => {
    const idTaquillero = req.params.idTaquillero;
    const taquillero = taquilleroController.obtenerTaquilleroPorId(idTaquillero);
    if (taquillero) {
        res.json(taquillero);
    } else {
        res.status(404).send('Taquillero no encontrado');
    }
});

router.put('/:idTaquillero', (req, res) => {
    const idTaquillero = req.params.idTaquillero;
    const { nombre, apellido, cedula,idCine } = req.body;
    const taquillero = taquilleroController.actualizarTaquillero(idTaquillero, nombre, apellido, cedula,idCine);
    if (taquillero) {
        res.json(taquillero);
    } else {
        res.status(404).send('Taquillero no encontrado');
    }
});

router.delete('/:idTaquillero', (req, res) => {
    const idTaquillero = req.params.idTaquillero;
    taquilleroController.eliminarTaquillero(idTaquillero);
    res.send('Taquillero eliminado correctamente');
});

module.exports = router;
