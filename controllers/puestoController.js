// src/controllers/puestoController.js
const Puesto = require('../models/puesto');

let puestos = []; // Array para almacenar los puestos

// CRUD
function crearPuesto(idPuesto,idFila, numero, tipo){
    const nuevoPuesto = new Puesto(idPuesto,idFila, numero, tipo);
    puestos.push(nuevoPuesto);
    return nuevoPuesto;
}

// Obtener todos los puestos
function obtenerPuestos() {
    return puestos;
}

// Obtener un puesto por ID
function obtenerPuestoPorId(idPuesto) {
    return puestos.find(puesto => puesto.idPuesto === idPuesto);
}

// Actualizar un puesto
function actualizarPuesto(idPuesto,idFila, numero, tipo) {
    const index = puestos.findIndex(puesto => puesto.idPuesto === idPuesto);
    if (index !== -1) {
        puestos[index] = new Puesto(idPuesto,idFila, numero, tipo);
        return puestos[index];
    }
    return null;
}

// Eliminar un puesto
function eliminarPuesto(idPuesto) {
    puestos = puestos.filter(puesto => puesto.idPuesto !== idPuesto);
}

module.exports = {
    crearPuesto,
    obtenerPuestos,
    obtenerPuestoPorId,
    actualizarPuesto,
    eliminarPuesto
};
