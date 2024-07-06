const express = require('express');
const router = express.Router();
const cineController = require('../controllers/cineController');

// Rutas CRUD cine
router.post('/', (req, res) => {
    const { idCine, nombre, direccion } = req.body;
    const cine = cineController.crearCine(idCine, nombre, direccion);
    res.json(cine);
});
// Ver los cines
router.get('/', (req, res) => {
    const cines = cineController.obtenerCines();
    res.json(cines);
});

router.get('/:idCine', (req, res) => {
    const idCine = req.params.idCine;
    const cine = cineController.obtenerCinePorId(idCine);
    if (cine) {
        res.json(cine);
    } else {
        res.status(404).send('Cine no encontrado');
    }
});

router.put('/:idCine', (req, res) => {
    const idCine = req.params.idCine;
    const { nombre, direccion } = req.body;
    const cine = cineController.actualizarCine(idCine, nombre, direccion);
    if (cine) {
        res.json(cine);
    } else {
        res.status(404).send('Cine no encontrado');
    }
});

router.delete('/:idCine', (req, res) => {
    const idCine = req.params.idCine;
    cineController.eliminarCine(idCine);
    res.send('Cine eliminado correctamente');
});

module.exports = router;
