// controllers/ventaController.js
const Venta = require('../models/venta');

let ventas = []; // Almacena las ventas

function crearVenta(idVenta, idFuncion, idTaquillero, idCliente, idPuesto, fechaVenta) {
  const venta = new Venta(idVenta, idFuncion, idTaquillero, idCliente, idPuesto, fechaVenta);
  ventas.push(venta);
  return venta;
}

function obtenerVentas() {
  return ventas;
}

function obtenerVentaPorId(idVenta) {
  return ventas.find(venta => venta.idVenta === parseInt(idVenta));
}

function actualizarVenta(idVenta, idFuncion, idTaquillero, idCliente, idPuesto, fechaVenta) {
  const index = ventas.findIndex(venta => venta.idVenta === parseInt(idVenta));
  if (index !== -1) {
    ventas[index] = new Venta(idVenta, idFuncion, idTaquillero, idCliente, idPuesto, fechaVenta);
    return ventas[index];
  }
  return null;
}

function eliminarVenta(idVenta) {
  ventas = ventas.filter(venta => venta.idVenta !== parseInt(idVenta));
}

function obtenerVentasPorCliente(idCliente) {
  return ventas.filter(venta => venta.idCliente === parseInt(idCliente));
}

function obtenerVentasPorTaquillero(idTaquillero) {
  return ventas.filter(venta => venta.idTaquillero === parseInt(idTaquillero));
}

function obtenerVentasPorFuncion(idFuncion) {
  return ventas.filter(venta => venta.idFuncion === parseInt(idFuncion));
}

function obtenerVentasPorRangoFechas(startDate, endDate) {
  return ventas.filter(venta => {
    const fechaVenta = new Date(venta.fechaVenta);
    return fechaVenta >= new Date(startDate) && fechaVenta <= new Date(endDate);
  });
}

function obtenerTotalVentasPorCliente(idCliente) {
  return ventas
    .filter(venta => venta.idCliente === parseInt(idCliente))
    .reduce((total, venta) => total + venta.precio, 0);
}

module.exports = {
  crearVenta,
  obtenerVentas,
  obtenerVentaPorId,
  actualizarVenta,
  eliminarVenta,
  obtenerVentasPorCliente,
  obtenerVentasPorTaquillero,
  obtenerVentasPorFuncion,
  obtenerVentasPorRangoFechas,
  obtenerTotalVentasPorCliente,
};


