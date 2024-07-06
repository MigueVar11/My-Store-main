const express = require('express');
const router = express.Router();
const filaController = require('../controllers/filaController');

// Rutas CRUD fila
router.post('/', (req, res) => {
    const { idFila, numeroFila,idLocalidad} = req.body;
    const fila = filaController.crearFila(idFila, numeroFila,idLocalidad);
    res.json(fila);
});

router.get('/', (req, res) => {
    const filas = filaController.obtenerFilas();
    res.json(filas);
});

router.get('/:idFila', (req, res) => {
    const idFila = req.params.idFila;
    const fila = filaController.obtenerFilaPorId(idFila);
    if (fila) {
        res.json(fila);
    } else {
        res.status(404).send('Fila no encontrada');
    }
});

router.put('/:idFila', (req, res) => {
    const idFila = req.params.idFila;
    const { numeroFila,idLocalidad } = req.body;
    const fila = filaController.actualizarFila(idFila, numeroFila,idLocalidad);
    if (fila) {
        res.json(fila);
    } else {
        res.status(404).send('Fila no encontrada');
    }
});

router.delete('/:idFila', (req, res) => {
    const idFila = req.params.idFila;
    filaController.eliminarFila(idFila);
    res.send('Fila eliminada correctamente');
});

module.exports = router;
