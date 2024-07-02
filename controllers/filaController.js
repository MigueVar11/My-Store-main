const Fila = require('../models/fila');

let filas = []; //Almcena las filas

// CRUD
function crearFila(idFila, idSala, numeroFila) {
    const fila = new Fila(idFila, idSala, numeroFila);
    filas.push(fila);
    return fila;
}

function obtenerFilas() {
    return filas;
}

function obtenerFilaPorId(idFila) {
    return filas.find(fila => fila.idFila === idFila);
}

function actualizarFila(idFila, idSala, numeroFila) {
    const index = filas.findIndex(fila => fila.idFila === idFila);
    if (index !== -1) {
        filas[index] = new Fila(idFila, idSala, numeroFila);
        return filas[index];
    }
    return null;
}

function eliminarFila(idFila) {
    filas = filas.filter(fila => fila.idFila !== idFila);
}

module.exports = {
    crearFila,
    obtenerFilas,
    obtenerFilaPorId,
    actualizarFila,
    eliminarFila
};
