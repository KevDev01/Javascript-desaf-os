/* Sctipr Cotizador */
class ProdCotizacion {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.cantidad = parseFloat(cantidad);
    }
}

const stock = document.getElementById('stock');
const tabla = document.getElementById('tabla');
const botonVaciar = document.getElementById('vaciar-carrito');
const botonCotizar = document.getElementById('btnCotizar');
const precioTotal = document.getElementById('precioTotal');
let cotizacion = [];
/* let cotSinDuplicados = []; */


/* Vaciar cotizador */
botonVaciar.addEventListener('click', () => {
    cotizacion.length = 0;
    actualizarTabla();
})

/* botonCotizar.addEventListener('click', () => {
    cotizar();
}) */

/* Mostrar los productos en el cotizador */
function actualizar() {
    stock.innerHTML = "";
    let arrayProductos = JSON.parse(localStorage.getItem("arrayProductos"));
    arrayProductos.forEach((producto) => {
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
    <p class="productos"> ${producto.nombre}</p>
    <p> Precio: $${producto.precio}</p>
    <input id='cantidad${producto.nombre}' type='number' min='1'> Cantidad </input>
    <button id='agregar${producto.nombre}' class="btn btn-primary"> Agregar </button>
    `
        stock.appendChild(div);

        const botonAgregarCot = document.getElementById(`agregar${producto.nombre}`);
        botonAgregarCot.addEventListener('click', () => {
            agregarACotizacion(producto.nombre);
            document.getElementById(`cantidad${producto.nombre}`).value = "";

        })
        /* Agregar cantidad a los productos */
        const agregarACotizacion = (prodNombre) => {
            const item = arrayProductos.find((prod) => prod.nombre === prodNombre);
            const inputCant = document.getElementById(`cantidad${producto.nombre}`).value;
            cotizacion.push(new ProdCotizacion(item.nombre, item.precio, inputCant));
            actualizarTabla();
            console.log(cotizacion);
        }
    })


}

/* Eliminar producto 1 a 1 */
const eliminarProducto = (prodNombre) => {
    const item = cotizacion.find((prod) => prod.nombre === prodNombre);
    const indice = cotizacion.indexOf(item);
    cotizacion.splice(indice, 1);
    actualizarTabla();
    console.log(prodNombre);
}
/* Imprimir el resumen del cotizador */
const actualizarTabla = () => {
    tabla.innerHTML = "";
    cotizacion.forEach((prod) => {
        const div = document.createElement('div');
        div.className = ('tabla');
        div.innerHTML = `
        <p class="productos">${prod.nombre}</p>
        <p>Precio: $${prod.precio}</p>
        <p>Cantidad: ${prod.cantidad}</p>
        <button onclick="eliminarProducto()" class="btn btn-danger">Eliminar</button>
        `
        tabla.appendChild(div);

    })

    /* Cotizar en USD usando API */
    function calculate(){
        const moneda = 'USD';

       fetch(`https://api.exchangerate-api.com/v4/latest/MXN`)
       
       .then(res => res.json() )
       .then(data => {
           const tasa = data.rates[moneda];
           console.log(tasa);
           precioUSD.innerText = (precioFinal * tasa) ;
    
        } );
        
    }

    precioTotal.innerText = cotizacion.reduce((acc, prod) => acc + (prod.precio * prod.cantidad) * 1.16, 0);
    const precioFinal = cotizacion.reduce((acc, prod) => acc + (prod.precio * prod.cantidad) * 1.16, 0);
    console.log(precioFinal);
    calculate();
}

