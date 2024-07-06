const Cine = require('../models/cine');

let cines = []; // Almacena los cines

// CRUD
function crearCine(idCine, nombre, direccion) {
    const cine = new Cine(idCine, nombre, direccion);
    cines.push(cine);
    return cine;
}

function obtenerCines() {
    return cines;
}

function obtenerCinePorId(idCine) {
    return cines.find(cine => cine.idCine === idCine);
}

function actualizarCine(idCine, nombre, direccion) {
    const index = cines.findIndex(cine => cine.idCine === idCine);
    if (index !== -1) {
        cines[index] = new Cine(idCine, nombre, direccion);
        return cines[index];
    }
    return null;
}

function eliminarCine(idCine) {
    cines = cines.filter(cine => cine.idCine !== idCine);
}

module.exports = {
    crearCine,
    obtenerCines,
    obtenerCinePorId,
    actualizarCine,
    eliminarCine
};
