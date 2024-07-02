const Boleta = require('../models/boleta');

let boletas = []; // Almnacenar las boletas

// CRUD
function crearBoleta(idBoleta, idFuncion, idPuesto, idCliente) {
    const boleta = new Boleta(idBoleta, idFuncion, idPuesto, idCliente);
    boletas.push(boleta); // Usamos el push para llenar los datos al array
    return boleta;
}

function obtenerBoletas() {
    return boletas;
}

function obtenerBoletaPorId(idBoleta) {
    return boletas.find(boleta => boleta.idBoleta === idBoleta);
}

function actualizarBoleta(idBoleta, idFuncion, idPuesto, idCliente) {
    const index = boletas.findIndex(boleta => boleta.idBoleta === idBoleta);
    if (index !== -1) {
        boletas[index] = new Boleta(idBoleta, idFuncion, idPuesto, idCliente);
        return boletas[index];
    }
    return null;
}

function eliminarBoleta(idBoleta) {
    boletas = boletas.filter(boleta => boleta.idBoleta !== idBoleta);
}

module.exports = {
    crearBoleta,
    obtenerBoletas,
    obtenerBoletaPorId,
    actualizarBoleta,
    eliminarBoleta
};
