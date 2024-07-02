const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Rutas CRUD CLIENTE
router.post('/', (req, res) => {
    const { idCliente, nombre, apellido, cedula, telefono } = req.body;
    const cliente = clienteController.crearCliente(idCliente, nombre, apellido, cedula, telefono);
    res.json(cliente);
});

router.get('/', (req, res) => {
    const clientes = clienteController.obtenerClientes();
    res.json(clientes);
});

router.get('/:idCliente', (req, res) => {
    const idCliente = req.params.idCliente;
    const cliente = clienteController.obtenerClientePorId(idCliente);
    if (cliente) {
        res.json(cliente);
    } else {
        res.status(404).send('Cliente no encontrado');
    }
});

router.put('/:idCliente', (req, res) => {
    const idCliente = req.params.idCliente;
    const { nombre, apellido, cedula, telefono } = req.body;
    const cliente = clienteController.actualizarCliente(idCliente, nombre, apellido, cedula, telefono);
    if (cliente) {
        res.json(cliente);
    } else {
        res.status(404).send('Cliente no encontrado');
    }
});

router.delete('/:idCliente', (req, res) => {
    const idCliente = req.params.idCliente;
    clienteController.eliminarCliente(idCliente);
    res.send('Cliente eliminado correctamente');
});

module.exports = router;
