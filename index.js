class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
}

var arrayProductos = [];
var arrayCantidad = [];
for (var i = 1; i < 99; i++) {
    arrayCantidad.push(i);
}
console.log(arrayCantidad)

function agregarProducto() {
    var nombreP = document.getElementById('nombre').value;
    var precioP = document.getElementById('precio').value;
    arrayProductos.push(new Producto(nombreP, precioP));
}

console.log(arrayProductos)

function mostrarProductos() {
    var resultado = document.getElementById("resultado");

    for (const producto of arrayProductos) {
        var div = document.createElement("div");
        div.innerHTML = `
    <h3> Nombre del producto: ${producto.nombre}</h3> 
    <p> Precio: $${producto.precio}</p> 
    `;
        resultado.append(div);
    }

    var selectProducto = document.getElementById("eligeProducto");
    for (const opciones of arrayProductos) {
        var opt = opciones.nombre;
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectProducto.appendChild(el);
    }

    var selectCantidad = document.getElementById("eligeCantidad")
    for (const cant of arrayCantidad) {
        var cantidad = cant;
        var num = document.createElement("option");
        num.textContent = cantidad;
        num.value = cantidad;
        selectCantidad.appendChild(num);
    }

}
var iterator;
iterator = 1;
function añadirOtro() {
    var dupproducto;
    var dupcantidad;
    window['dupproducto' + iterator] = document.createElement('select');
    window['dupproducto' + iterator].id = 'productodup' + iterator;
    window['dupcantidad' + iterator] = document.createElement('select');
    window['dupcantidad' + iterator].id = 'cantidaddup' + iterator;

    for (const opciones of arrayProductos) {
        var opt = opciones.nombre;
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        window['dupproducto' + iterator].appendChild(el);
    }
    for (const cant of arrayCantidad) {
        var cantidad = cant;
        var num = document.createElement("option");
        num.textContent = cantidad;
        num.value = cantidad;
        window['dupcantidad' + iterator].appendChild(num);
    }
    
    document.getElementById("newDrops").appendChild(window['dupproducto' + iterator]);
    document.getElementById("newDrops").appendChild(window['dupcantidad' + iterator]);
    iterator++;
    
}

function cotizar() {

    var outputProducto = document.getElementById("eligeProducto").value;
    var outputCantidad = document.getElementById("eligeCantidad").value;

    var cotizacion = document.getElementById("cotizacion");
    for (let i = 0; i < arrayProductos.length; i++) {
        var producto = arrayProductos[i];

        if (outputProducto === producto.nombre) {
            var precio = producto.precio;
            var subtotal1 = precio * outputCantidad;
        }

    }
    var div = document.createElement("div");
    div.innerHTML = `<p> ${outputProducto}   $${precio}   ${outputCantidad}</p>;`
    cotizacion.append(div);
    var subtotal2 = 0;

    for (x = 1; x < iterator; x++) {
        var ImpresionProd = document.getElementById('productodup' + x).value;
        var ImpresionCant = document.getElementById('cantidaddup' + x).value;
        var producto = arrayProductos[x];

        if (ImpresionProd === producto.nombre) {
            var precio1 = producto.precio
            subtotal2 += precio1 * ImpresionCant;

        }


        var div = document.createElement("div");
        div.innerHTML = `<p> ${ImpresionProd}   $${precio1}   ${ImpresionCant}</p>;`
        cotizacion.append(div);
    }
    var total = (subtotal1 + subtotal2) * 1.16;
    console.log("El total con IVA es: " + total);
    var div = document.createElement("div");
    div.innerHTML = `
    <p> El total con Iva es: $${total}</p>;
    `
    cotizacion.append(div);
}
