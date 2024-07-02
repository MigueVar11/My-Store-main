class Pelicula {
  constructor(id, titulo, genero, duracion, clasificacion, director, fechaEstreno) {
      this.id = id;
      this.titulo = titulo;
      this.genero = genero;
      this.duracion = duracion;
      this.clasificacion = clasificacion;
      this.director = director;
      this.fechaEstreno = fechaEstreno;
  }
}

module.exports = Pelicula;
