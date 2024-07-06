const Funcion = require('../models/funcion');

let funciones = []; // Array para almacenar las funciones

// CRUD
function crearFuncion(idFuncion, idPelicula, fecha, hora, idVenta,idLocalidad){
    const funcion = new Funcion(idFuncion, idPelicula, fecha, hora, idVenta,idLocalidad);
    funciones.push(funcion);
    return funcion;
}

function obtenerFunciones() {
    return funciones;
}

function obtenerFuncionPorId(idFuncion) {
    return funciones.find(funcion => funcion.idFuncion === idFuncion);
}

function actualizarFuncion(idFuncion, idPelicula, fecha, hora, idVenta,idLocalidad) {
    const index = funciones.findIndex(funcion => funcion.idFuncion === idFuncion);
    if (index !== -1) {
        funciones[index] = new Funcion(idFuncion, idPelicula, fecha, hora, idVenta,idLocalidad);
        return funciones[index];
    }
    return null;
}

function eliminarFuncion(idFuncion) {
    funciones = funciones.filter(funcion => funcion.idFuncion !== idFuncion);
}

module.exports = {
    crearFuncion,
    obtenerFunciones,
    obtenerFuncionPorId,
    actualizarFuncion,
    eliminarFuncion
};
