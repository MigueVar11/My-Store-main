// src/routes/ventaRoutes.js
const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventaController');

// Rutas CRUD para Venta
router.post('/', (req, res) => {
    const { idVenta, idBoleta, idTaquillero, fechaVenta } = req.body;
    const venta = ventaController.crearVenta(idVenta, idBoleta, idTaquillero, fechaVenta);
    res.json(venta);
});

router.get('/', (req, res) => {
    const ventas = ventaController.obtenerVentas();
    res.json(ventas);
});

router.get('/:idVenta', (req, res) => {
    const idVenta = req.params.idVenta;
    const venta = ventaController.obtenerVentaPorId(idVenta);
    if (venta) {
        res.json(venta);
    } else {
        res.status(404).send('Venta no encontrada');
    }
});

router.put('/:idVenta', (req, res) => {
    const idVenta = req.params.idVenta;
    const { idBoleta, idTaquillero, fechaVenta } = req.body;
    const venta = ventaController.actualizarVenta(idVenta, idBoleta, idTaquillero, fechaVenta);
    if (venta) {
        res.json(venta);
    } else {
        res.status(404).send('Venta no encontrada');
    }
});

router.delete('/:idVenta', (req, res) => {
    const idVenta = req.params.idVenta;
    ventaController.eliminarVenta(idVenta);
    res.send('Venta eliminada correctamente');
});

module.exports = router;
