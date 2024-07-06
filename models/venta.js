class Venta {
  constructor(idVenta, idFuncion, idTaquillero, idCliente, idPuesto, fechaVenta) {
      this.idVenta = idVenta;
      this.idFuncion = idFuncion;
      this.idTaquillero = idTaquillero;
      this.idCliente = idCliente;
      this.idPuesto = idPuesto;
      this.fechaVenta = fechaVenta;
  }
}

module.exports = Venta;
