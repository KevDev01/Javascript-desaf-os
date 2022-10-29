/* Script Cotizador */
class ProdCotizacion {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.cantidad = parseFloat(cantidad);
    }
}

const stock = document.getElementById('stock');
const miTabla = document.getElementById('tabla');
const botonVaciar = document.getElementById('vaciar-carrito');
const botonCotizar = document.getElementById('btnCotizar');
const precioTotal = document.getElementById('precioTotal');
let headers = ['Producto', 'Precio', 'Cantidad', ' '];
let cotizacion = [];
/* let cotSinDuplicados = []; */


/* Vaciar cotizador */
botonVaciar.addEventListener('click', () => {
    cotizacion.length = 0;
    actualizarCotizacion();
})

/* Mostrar los productos en el cotizador */
function actualizar() {
    stock.innerHTML = "";
    let arrayProductos = JSON.parse(localStorage.getItem("arrayProductos")) || [];
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
            const itemIndex = cotizacion.findIndex((producto) => producto.nombre.toLowerCase() === prodNombre.toLowerCase());
            console.log({ itemIndex });
            const inputCant = Number(document.getElementById(`cantidad${producto.nombre}`).value);
            if (itemIndex === -1) {
                const item = arrayProductos.find((prod) => prod.nombre.toLowerCase() === prodNombre.toLowerCase());
                cotizacion.push(new ProdCotizacion(item.nombre, item.precio, inputCant));
            } else {
                console.log(cotizacion[itemIndex]);
                cotizacion[itemIndex].cantidad += inputCant
            }
            actualizarCotizacion();
            console.log(cotizacion);
        }
    })


}

/* Eliminar producto 1 a 1 */
const eliminarProducto = (prodNombre) => {
    console.log(prodNombre);
    const itemIndex = cotizacion.findIndex((prod) => prod.nombre.toLowerCase() === prodNombre.toLowerCase());
    if (itemIndex !== -1) {
        cotizacion.splice(itemIndex, 1);
        actualizarCotizacion();
    }
}

/* Imprimir el resumen del cotizador */
const actualizarCotizacion = () => {
    miTabla.innerHTML = "";
    let tabla = document.createElement('tabla');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    })
    tabla.appendChild(headerRow);

    cotizacion.forEach(prod => {
        let row = document.createElement('tr');
        Object.values(prod).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })
        const cellWithButton = document.createElement('td')
        row.appendChild(cellWithButton);
        const botonBorrar = document.createElement('button')
        botonBorrar.classList = 'btn btn-danger'
        botonBorrar.innerHTML = 'Eliminar'
        botonBorrar.addEventListener('click', () => {
            eliminarProducto(prod.nombre);
        })
        cellWithButton.appendChild(botonBorrar);
        tabla.appendChild(row);
    })

    miTabla.appendChild(tabla);

    /* Cotizar en USD usando API */
    function calculate() {
        const moneda = 'USD';

        fetch(`https://api.exchangerate-api.com/v4/latest/MXN`)

            .then(res => res.json())
            .then(data => {
                const tasa = data.rates[moneda];
                console.log(tasa);
                precioUSD.innerText = (precioFinal * tasa).toFixed(2);

            });

    }

    precioTotal.innerText = cotizacion.reduce((acc, prod) => acc + (prod.precio * prod.cantidad) * 1.16, 0);
    const precioFinal = cotizacion.reduce((acc, prod) => acc + (prod.precio * prod.cantidad) * 1.16, 0);
    console.log(precioFinal);
    calculate();
}

