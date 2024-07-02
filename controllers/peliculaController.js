const Pelicula = require('../models/pelicula');

let peliculas = []; //almacenar las peliculas

// OPERACION DE CRUD
function crearPelicula(id, titulo, genero, duracion, clasificacion, director, fechaEstreno) {
    const pelicula = new Pelicula(id, titulo, genero, duracion, clasificacion, director, fechaEstreno);
    peliculas.push(pelicula);
    return pelicula;
}

function obtenerPeliculas() {
    return peliculas;
}

function obtenerPeliculaPorId(id) {
    return peliculas.find(pelicula => pelicula.id === id);
}

function actualizarPelicula(id, titulo, genero, duracion, clasificacion, director, fechaEstreno) {
    const index = peliculas.findIndex(pelicula => pelicula.id === id);
    if (index !== -1) {
        peliculas[index] = new Pelicula(id, titulo, genero, duracion, clasificacion, director, fechaEstreno);
        return peliculas[index];
    }
    return null;
}

function eliminarPelicula(id) {
    peliculas = peliculas.filter(pelicula => pelicula.id !== id);
}

module.exports = {
    crearPelicula,
    obtenerPeliculas,
    obtenerPeliculaPorId,
    actualizarPelicula,
    eliminarPelicula
};
