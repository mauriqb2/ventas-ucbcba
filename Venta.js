let valor_total;
let productos = [];
class Venta{
    constructor(){
        valor_total = 0;
    }
    total(){
        this.cuantoPor();
        return valor_total;
    }
    add(producto){
        productos.push(producto);
    }
    cuantoPor(){
        productos.forEach(function(producto){
            valor_total += producto.getPrecio();
        });
    }
}
module.exports = Venta;