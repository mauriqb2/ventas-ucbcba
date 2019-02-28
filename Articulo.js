import Producto from './Producto.js'

class Articulo extends Producto{
    calcularTarifa(){
        return this.precio;
    }
    cuantoPor(cant){
        return this.calcularTarifa() * cant;
    }
}
module.exports = Articulo;