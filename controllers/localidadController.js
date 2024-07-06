const Localidad = require('../models/localidad');

let localidades = []; // Almacena las localidades

// CRUD
function crearLocalidad(idLocalidad, nombreLocalidad, precio, capacidad, idSala, idFila) {
    const localidad = new Localidad(idLocalidad, nombreLocalidad, precio, capacidad, idSala, idFila);
    localidades.push(localidad);
    return localidad;
}

function obtenerLocalidades() {
    return localidades;
}

function obtenerLocalidadPorId(idLocalidad) {
    return localidades.find(localidad => localidad.idLocalidad === idLocalidad);
}

function actualizarLocalidad(idLocalidad, nombreLocalidad, precio, capacidad, idSala, idFila) {
    const index = localidades.findIndex(localidad => localidad.idLocalidad === idLocalidad);
    if (index !== -1) {
        localidades[index] = new Localidad(idLocalidad, nombreLocalidad, precio, capacidad, idSala, idFila);
        return localidades[index];
    }
    return null;
}

function eliminarLocalidad(idLocalidad) {
    localidades = localidades.filter(localidad => localidad.idLocalidad !== idLocalidad);
}

module.exports = {
    crearLocalidad,
    obtenerLocalidades,
    obtenerLocalidadPorId,
    actualizarLocalidad,
    eliminarLocalidad
};
