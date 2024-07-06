const { obtenerFunciones } = require('./funcionController');


function obtenerFuncionesPorPelicula(idPelicula) {
    return funciones.filter(funcion => funcion.idPelicula === idPelicula);
}

function obtenerLocalidadesPorSala(idSala) {
    return localidades.filter(localidad => localidad.idSala === idSala);
}

function obtenerFuncionesPorSala(idSala) {
    return funciones.filter(funcion => funcion.idSala === idSala);
}

function obtenerVentasPorPuesto(idPuesto) {
    return ventas.filter(venta => venta.idPuesto === idPuesto);
}

function obtenerPeliculasPorCine(idCine) {
    return peliculas.filter(pelicula => pelicula.idCine === idCine);
}

module.exports = {
    obtenerFuncionesPorPelicula,
    obtenerLocalidadesPorSala,
    obtenerFuncionesPorSala,
    obtenerVentasPorPuesto,
    obtenerPeliculasPorCine
};
