
const Venta = require('../models/venta');
const Boleta = require('../models/boleta');
const Taquillero = require('../models/taquillero');

let ventas = []; // Array para almacenar las ventas

// CRUD Operations
function crearVenta(idVenta, idBoleta, idTaquillero, fechaVenta) {
    const venta = new Venta(idVenta, idBoleta, idTaquillero, fechaVenta);
    ventas.push(venta); //Para llenar el array
    return venta;
}

function obtenerVentas() {
    return ventas;
}

function obtenerVentaPorId(idVenta) {
    return ventas.find(venta => venta.idVenta === idVenta);
}

function actualizarVenta(idVenta, idBoleta, idTaquillero, fechaVenta) {
    const index = ventas.findIndex(venta => venta.idVenta === idVenta);
    if (index !== -1) {
        ventas[index] = new Venta(idVenta, idBoleta, idTaquillero, fechaVenta);
        return ventas[index];
    }
    return null;
}

function eliminarVenta(idVenta) {
    ventas = ventas.filter(venta => venta.idVenta !== idVenta);
}
module.exports = {
    crearVenta,
    obtenerVentas,
    obtenerVentaPorId,
    actualizarVenta,
    eliminarVenta
};
