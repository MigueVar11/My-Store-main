const express = require('express');
const router = express.Router();
const salaController = require('../controllers/salaController');

// Rutas CRUD para Sala
router.post('/', (req, res) => {
    const { idSala, nombre, capacidad, distribucionSillas } = req.body;
    const sala = salaController.crearSala(idSala, nombre, capacidad, distribucionSillas);
    res.json(sala);
});

router.get('/', (req, res) => {
    const salas = salaController.obtenerSalas();
    res.json(salas);
});

router.get('/:idSala', (req, res) => {
    const idSala = req.params.idSala;
    const sala = salaController.obtenerSalaPorId(idSala);
    if (sala) {
        res.json(sala);
    } else {
        res.status(404).send('Sala no encontrada');
    }
});

router.put('/:idSala', (req, res) => {
    const idSala = req.params.idSala;
    const { nombre, capacidad, distribucionSillas } = req.body;
    const sala = salaController.actualizarSala(idSala, nombre, capacidad, distribucionSillas);
    if (sala) {
        res.json(sala);
    } else {
        res.status(404).send('Sala no encontrada');
    }
});

router.delete('/:idSala', (req, res) => {
    const idSala = req.params.idSala;
    salaController.eliminarSala(idSala);
    res.send('Sala eliminada correctamente');
});

module.exports = router;
