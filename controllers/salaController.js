const Sala = require('../models/sala');

let salas = []; // almacenar las salas

// CRUD SALAS
function crearSala(idSala, nombre, capacidad, distribucionSillas) {
    const sala = new Sala(idSala, nombre, capacidad, distribucionSillas);
    salas.push(sala);
    return sala;
}

function obtenerSalas() {
    return salas;
}

function obtenerSalaPorId(idSala) {
    return salas.find(sala => sala.idSala === idSala);
}

function actualizarSala(idSala, nombre, capacidad, distribucionSillas) {
    const index = salas.findIndex(sala => sala.idSala === idSala);
    if (index !== -1) {
        salas[index] = new Sala(idSala, nombre, capacidad, distribucionSillas);
        return salas[index];
    }
    return null;
}

function eliminarSala(idSala) {
    salas = salas.filter(sala => sala.idSala !== idSala);
}

module.exports = {
    crearSala,
    obtenerSalas,
    obtenerSalaPorId,
    actualizarSala,
    eliminarSala
};
