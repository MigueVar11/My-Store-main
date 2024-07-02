const Taquillero = require('../models/taquillero');

let taquilleros = []; // Almacener taquilleros

// CRUD 
function crearTaquillero(idTaquillero, nombre, apellido, cedula) {
    const taquillero = new Taquillero(idTaquillero, nombre, apellido, cedula);
    taquilleros.push(taquillero);
    return taquillero;
}

function obtenerTaquilleros() {
    return taquilleros;
}

function obtenerTaquilleroPorId(idTaquillero) {
    return taquilleros.find(taquillero => taquillero.idTaquillero === idTaquillero);
}

function actualizarTaquillero(idTaquillero, nombre, apellido, cedula) {
    const index = taquilleros.findIndex(taquillero => taquillero.idTaquillero === idTaquillero);
    if (index !== -1) {
        taquilleros[index] = new Taquillero(idTaquillero, nombre, apellido, cedula);
        return taquilleros[index];
    }
    return null;
}

function eliminarTaquillero(idTaquillero) {
    taquilleros = taquilleros.filter(taquillero => taquillero.idTaquillero !== idTaquillero);
}

module.exports = {
    crearTaquillero,
    obtenerTaquilleros,
    obtenerTaquilleroPorId,
    actualizarTaquillero,
    eliminarTaquillero
};
