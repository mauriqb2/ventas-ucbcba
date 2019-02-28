class Producto{
    constructor(nombre_nuevo,precio_nuevo){
        this.nombre=nombre_nuevo;
        this.precio=precio_nuevo;
    }
    getPrecio(){
        return this.precio;
    }
    getNombre(){
        return this.nombre;
    }
}
module.exports = Producto;