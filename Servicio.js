import Producto from './Producto.js'

class Servicio extends Producto{
    constructor(nombre_nuevo,precio_nuevo){
        super(nombre_nuevo,precio_nuevo);
        this.saldo = 0;
    }
    calcularTarifa(){
        return this.precio - this.saldo;
    }
    cuantoPor(cant){
        return this.calcularTarifa() * cant;
    }
}
module.exports = Servicio;