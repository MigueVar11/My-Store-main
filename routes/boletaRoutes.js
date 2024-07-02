const express = require('express');
const router = express.Router();
const boletaController = require('../controllers/boletaController');

// Rutas CRUD
// CREAR BOLETA
router.post('/', (req, res) => {
    const { idBoleta, idFuncion, idPuesto, idCliente } = req.body;
    const boleta = boletaController.crearBoleta(idBoleta, idFuncion, idPuesto, idCliente);
    res.json(boleta);
});
// OBTENER BOLETA
router.get('/', (req, res) => {
    const boletas = boletaController.obtenerBoletas();
    res.json(boletas);
});
// OBTENER POR ID
router.get('/:idBoleta', (req, res) => {
    const idBoleta = req.params.idBoleta;
    const boleta = boletaController.obtenerBoletaPorId(idBoleta);
    if (boleta) {
        res.json(boleta);
    } else {
        res.status(404).send('Boleta no encontrada');
    }
});
// ACTUALIZAR BOLETA
router.put('/:idBoleta', (req, res) => {
    const idBoleta = req.params.idBoleta;
    const { idFuncion, idPuesto, idCliente } = req.body;
    const boleta = boletaController.actualizarBoleta(idBoleta, idFuncion, idPuesto, idCliente);
    if (boleta) {
        res.json(boleta);
    } else {
        res.status(404).send('Boleta no encontrada');
    }
});
//ELIMINAR BOLETA
router.delete('/:idBoleta', (req, res) => {
    const idBoleta = req.params.idBoleta;
    boletaController.eliminarBoleta(idBoleta);
    res.send('Boleta eliminada correctamente');
});

module.exports = router;
