const funciones = require('../models/funcion');
const boletos = require('../models/boleta');
const clientes = require('../models/cliente'); //

function consultarFuncionesPorPelicula(idPelicula) {
    return funciones.filter(funcion => funcion.idPelicula === idPelicula);
}

function consultarFuncionesPorSala(idSala) {
    return funciones.filter(funcion => funcion.idSala === idSala);
}

function consultarBoletosPorFuncion(idFuncion) {
    return boletos.filter(boleta => boleta.idFuncion === idFuncion);
}

function consultarDisponibilidadDePuestos(idFuncion) {
    const boletosFuncion = boletos.filter(boleta => boleta.idFuncion === idFuncion);
    return boletosFuncion.map(boleta => boleta.idPuesto); // Devuelve los IDs de los puestos ocupados
}

function consultarHistorialDeCompras(idCliente) {
    return boletos.filter(boleta => boleta.idCliente === idCliente);
}

module.exports = {
    consultarFuncionesPorPelicula,
    consultarFuncionesPorSala,
    consultarBoletosPorFuncion,
    consultarDisponibilidadDePuestos,
    consultarHistorialDeCompras
};
