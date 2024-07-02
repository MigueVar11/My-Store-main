const express = require('express');
const router = express.Router();
const peliculaController = require('../controllers/peliculaController');

// Rutas CRUD

//CREAR UNA PELICULA
router.post('/', (req, res) => {
    const { id, titulo, genero, duracion, clasificacion, director, fechaEstreno } = req.body;
    const pelicula = peliculaController.crearPelicula(id, titulo, genero, duracion, clasificacion, director, fechaEstreno);
    res.json(pelicula);
});
//OBTENER PELICULAS
router.get('/', (req, res) => {
    const peliculas = peliculaController.obtenerPeliculas();
    res.json(peliculas);
});
//OBTENER PELICULA POR ID
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const pelicula = peliculaController.obtenerPeliculaPorId(id);
    if (pelicula) {
        res.json(pelicula);
    } else {
        res.status(404).send('Pelicula no encontrada');
    }
});
//ACTUALIZAR PELICULA
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { titulo, genero, duracion, clasificacion, director, fechaEstreno } = req.body;
    const pelicula = peliculaController.actualizarPelicula(id, titulo, genero, duracion, clasificacion, director, fechaEstreno);
    if (pelicula) {
        res.json(pelicula);
    } else {
        res.status(404).send('Pelicula no encontrada');
    }
});
//ELIMINAR PELICULAS
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    peliculaController.eliminarPelicula(id);
    res.send('Pelicula eliminada correctamente');
});

module.exports = router;
