class Venta{
    constructor(){
        this.productos = [];
    }
    total(){
        let valor_total = 0;
        this.productos.forEach(element => {
            valor_total += element[0].cuantoPor(element[1]);
        });
        return valor_total;
    }
    add(producto, cantidad){
        for(var i=0; i<cantidad; i++){
            this.productos.push([producto,cantidad]);
        }
    }
}
module.exports = Venta;