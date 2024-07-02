const Cliente = require('../models/cliente');

let clientes = []; // Almacenar los clientes

// CRUD 
function crearCliente(idCliente, nombre, apellido, cedula, telefono) {
    const cliente = new Cliente(idCliente, nombre, apellido, cedula, telefono);
    clientes.push(cliente);
    return cliente;
}

function obtenerClientes() {
    return clientes;
}

function obtenerClientePorId(idCliente) {
    return clientes.find(cliente => cliente.idCliente === idCliente);
}

function actualizarCliente(idCliente, nombre, apellido, cedula, telefono) {
    const index = clientes.findIndex(cliente => cliente.idCliente === idCliente);
    if (index !== -1) {
        clientes[index] = new Cliente(idCliente, nombre, apellido, cedula, telefono);
        return clientes[index];
    }
    return null;
}

function eliminarCliente(idCliente) {
    clientes = clientes.filter(cliente => cliente.idCliente !== idCliente);
}

module.exports = {
    crearCliente,
    obtenerClientes,
    obtenerClientePorId,
    actualizarCliente,
    eliminarCliente
};
