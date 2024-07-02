// src/routes/puestoRoutes.js
const express = require('express');
const router = express.Router();
const puestoController = require('../controllers/puestoController');

// Rutas CRUD para Puesto
router.post('/', (req, res) => {
    const { idPuesto, idSala, idFila, numero, tipo } = req.body;
    const puesto = puestoController.crearPuesto(idPuesto, idSala, idFila, numero, tipo);
    res.json(puesto);
});

router.get('/', (req, res) => {
    const puestos = puestoController.obtenerPuestos();
    res.json(puestos);
});

router.get('/:idPuesto', (req, res) => {
    const idPuesto = req.params.idPuesto;
    const puesto = puestoController.obtenerPuestoPorId(idPuesto);
    if (puesto) {
        res.json(puesto);
    } else {
        res.status(404).send('Puesto no encontrado');
    }
});

router.put('/:idPuesto', (req, res) => {
    const idPuesto = req.params.idPuesto;
    const { idSala, idFila, numero, tipo } = req.body;
    const puesto = puestoController.actualizarPuesto(idPuesto, idSala, idFila, numero, tipo);
    if (puesto) {
        res.json(puesto);
    } else {
        res.status(404).send('Puesto no encontrado');
    }
});

router.delete('/:idPuesto', (req, res) => {
    const idPuesto = req.params.idPuesto;
    puestoController.eliminarPuesto(idPuesto);
    res.send('Puesto eliminado correctamente');
});

module.exports = router;
