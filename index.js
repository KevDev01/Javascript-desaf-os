
class Producto{
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.cantidad = cantidad;
    }

    totalIva() {
        return (this.precio * 1.16) * this.cantidad;
    }

}

var arrayProductos = [];
do{
    var comprobacion = prompt("Ingresa un nombre de producto o esc para terminar");
    if (comprobacion === "esc"|| comprobacion === "ESC"|| comprobacion === "Esc" ){
        break;
    }else{
    var nombreP = comprobacion;
    var precioP = parseInt(prompt("Ingrese el precio del producto (Solo números)"));
    var cantidadP = parseInt(prompt("Ingrese la cantidad deseada (Solo números)"));
    arrayProductos.push(new Producto(nombreP, precioP, cantidadP));
    }
} 
while (comprobacion != "esc"|| comprobacion != "ESC"|| comprobacion != "Esc" )

console.log(arrayProductos)

for (var producto of arrayProductos){
    document.write("<h3> El producto ingresado es : " + producto.nombre + "</h3>");
    document.write("<h3> El precio sin IVA del producto ingresado es : $" + producto.precio + "</h3>");
    document.write("<h3> La cantidad deseada es : " + producto.cantidad + "</h3>");
    document.write("<h3> El total de los productos con IVA es : $" + producto.totalIva() + "</h3>");
    document.write("----------------------------------------------------");

    console.log(producto.nombre);
    console.log(producto.precio);
    console.log(producto.cantidad);
    console.log(producto.totalIva);
}