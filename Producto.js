var nombre;
var precio;
class Producto{
    constructor(nombre_nuevo,precio_nuevo){
        nombre=nombre_nuevo;
        precio=precio_nuevo;
    }
    getPrecio(){
        return precio;
    }
    getNombre(){
        return nombre;
    }
}
module.exports = Producto;