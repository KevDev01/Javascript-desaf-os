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

botonVaciar.addEventListener('click', () => {
    cotizacion.length = 0;
    actualizarTabla();
})

botonCotizar.addEventListener('click', () => {
    cotizar();
})

function actualizar() {
    stock.innerHTML = "";
    arrayProductos.forEach((producto) => {
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
    <h3> ${producto.nombre}</h3>
    <p> Precio: $${producto.precio}</p>
    <input id='cantidad${producto.nombre}' type='number' min='1' value='1'> Cantidad </input>
    <button id='agregar${producto.nombre}'> Agregar </button>
    `
        stock.appendChild(div);

        const botonAgregarCot = document.getElementById(`agregar${producto.nombre}`);
        botonAgregarCot.addEventListener('click', () => {
            agregarACotizacion(producto.nombre);
        })
        
    })
}



const agregarACotizacion = (prodNombre) => {
    const item = arrayProductos.find((prod) => prod.nombre === prodNombre);
    cotizacion.push(new ProdCotizacion(item.nombre, item.precio, 3));
    actualizarTabla();
    console.log(cotizacion);

}

const eliminarProducto = (prodNombre) => {
    const item = cotizacion.find((prod) => prod.nombre === prodNombre);
    const indice = cotizacion.indexOf(item);
    cotizacion.splice(indice, 1);
    actualizarTabla();
}

const actualizarTabla = () => {
    tabla.innerHTML = "";

    cotizacion.forEach((prod) => {
        const div = document.createElement('div');
        div.className = ('tabla');
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio: $${prod.precio}</p>
        <button onclick = "eliminarProducto(${prod.nombre})" class="boton-eliminar"></button>
        <input id='cantidad${producto.nombre}' type='number' min='1' value='1'> Cantidad </input>
        `
        tabla.appendChild(div);
        precioTotal.innerText = cotizacion.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    })
   
}

        