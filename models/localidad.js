class Localidad {
  constructor(idLocalidad, nombreLocalidad, precio, capacidad, idSala, idFila) {
      this.idLocalidad = idLocalidad;
      this.nombreLocalidad = nombreLocalidad;
      this.precio = precio;
      this.capacidad = capacidad;
      this.idSala = idSala;
      this.idFila = idFila;
  }
}

module.exports = Localidad;
