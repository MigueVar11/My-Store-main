
const express = require('express');
const router = express.Router();
const localidadController = require('../controllers/localidadController');

// Rutas CRUD localidad
router.post('/', (req, res) => {
    const { idLocalidad, nombreLocalidad, precio, capacidad, idSala, idFila } = req.body;
    const localidad = localidadController.crearLocalidad(idLocalidad, nombreLocalidad, precio, capacidad, idSala, idFila);
    res.json(localidad);
});

router.get('/', (req, res) => {
    const localidades = localidadController.obtenerLocalidades();
    res.json(localidades);
});

router.get('/:idLocalidad', (req, res) => {
    const idLocalidad = req.params.idLocalidad;
    const localidad = localidadController.obtenerLocalidadPorId(idLocalidad);
    if (localidad) {
        res.json(localidad);
    } else {
        res.status(404).send('Localidad no encontrada');
    }
});

router.put('/:idLocalidad', (req, res) => {
    const idLocalidad = req.params.idLocalidad;
    const { nombreLocalidad, precio, capacidad, idSala, idFila } = req.body;
    const localidad = localidadController.actualizarLocalidad(idLocalidad, nombreLocalidad, precio, capacidad, idSala, idFila);
    if (localidad) {
        res.json(localidad);
    } else {
        res.status(404).send('Localidad no encontrada');
    }
});

router.delete('/:idLocalidad', (req, res) => {
    const idLocalidad = req.params.idLocalidad;
    localidadController.eliminarLocalidad(idLocalidad);
    res.send('Localidad eliminada correctamente');
});

module.exports = router;
