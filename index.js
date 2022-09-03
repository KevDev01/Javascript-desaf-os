/* Definir las variables */

var producto = prompt("Elija su producto - Tarjetas, Volantes o Tabloide");
var cantidad = parseFloat(prompt("Ingrese la cantidad"));

/* Crear la función */

function mostrarTotal(){
    return precio * cantidad * 1.16;
}

/* Agregar las condiciones */

if(producto === "Tarjetas"){
    var precio = 450;
    var resultado = mostrarTotal(precio, cantidad);
    alert("Total: $" + resultado);   
}else if(producto === "Volantes"){
    var precio = 850;
    var resultado = mostrarTotal(precio, cantidad);
    alert("Total: $" + resultado); 
}else if(producto === "Tabloide"){
    var precio = 24;
    var resultado = mostrarTotal(precio, cantidad);
    alert("Total: $"+ resultado); 
}else{
    alert("No existe el producto")
}