const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventaController');

// Rutas CRUD de venta
router.post('/', (req, res) => {
    const { idVenta, idFuncion, idTaquillero, idCliente, idPuesto, fechaVenta } = req.body;
    const venta = ventaController.crearVenta(idVenta, idFuncion, idTaquillero, idCliente, idPuesto, fechaVenta);
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
    const { idFuncion, idTaquillero, idCliente, idPuesto, fechaVenta } = req.body;
    const venta = ventaController.actualizarVenta(idVenta, idFuncion, idTaquillero, idCliente, idPuesto, fechaVenta);
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


// Endpoints adicionales para venta
router.get('/cliente/:idCliente', (req, res) => {
  const idCliente = req.params.idCliente;
  const ventas = ventaController.obtenerVentasPorCliente(idCliente);
  res.json(ventas);

});

router.get('/taquillero/:idTaquillero', (req, res) => {
  const idTaquillero = req.params.idTaquillero;
  const ventas = ventaController.obtenerVentasPorTaquillero(idTaquillero);
  res.json(ventas);
});

router.get('/funcion/:idFuncion', (req, res) => {
  const idFuncion = req.params.idFuncion;
  const ventas = ventaController.obtenerVentasPorFuncion(idFuncion);
  res.json(ventas);
});

router.get('/rango-fechas', (req, res) => {
  const { startDate, endDate } = req.query;
  const ventas = ventaController.obtenerVentasPorRangoFechas(startDate, endDate);
  res.json(ventas);
});

router.get('/total-por-cliente/:idCliente', (req, res) => {
  const idCliente = req.params.idCliente;
  const totalVentas = ventaController.obtenerTotalVentasPorCliente(idCliente);
  res.json({ totalVentas });
});

module.exports = router;
