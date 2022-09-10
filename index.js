
class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
} 

var productos = [
    new Producto(`Tarjetas de presentación`, 450),
    new Producto(`Volantes`, 850),
    new Producto(`Tabloide`, 24),
    new Producto(`Display`, 500),
]

var productoUsuario = prompt("Elija su producto - Tarjetas, Volantes o Tabloide");
var cantidadUsuario = parseFloat(prompt("Ingrese la cantidad"));

for (let i = 0; i < productos.length; i++)
 {
    var item = productos[i];
    
    if (productoUsuario === item.nombre)
        {var total = item.precio * cantidadUsuario * 1.16;
        alert ("El Total Con IVA Es: $" + total);
        }else{
            alert ("No Existe")
        }
 }