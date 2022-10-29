/* Script Base de Datos */
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
}

const arrayProductos = [];
let formulario = document.getElementById("formulario");
let resultado = document.getElementById("resultado");

/* Imprimir siempre lo que hay en el local storage */
window.addEventListener("load", (e) => {
    e.preventDefault();
    resultado.innerHTML = "";
    const arrayProductos = JSON.parse(localStorage.getItem("arrayProductos")) || [];
    printProducts(arrayProductos);
})
const printProducts = (productos) => {
    for (const producto of productos) {
        const div = document.createElement("div");
        div.innerHTML = `
    <p class="productos"> Nombre del producto: ${producto.nombre}</p> 
    <p> Precio: $${producto.precio}</p> 
    `;
        resultado.append(div);
    }
}

/* Push al Array de la base de datos */
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    resultado.innerHTML = "";
    let arrayProductos = JSON.parse(localStorage.getItem("arrayProductos")) || [];
    let inputs = e.target.children;
    if (arrayProductos.length === 0) {
        arrayProductos.push(new Producto(inputs[0].value, inputs[1].value));

        printProducts(arrayProductos);
        localStorage.setItem('arrayProductos', JSON.stringify(arrayProductos));
        Toastify({
            text: "Producto añadido a la base de datos",
            duration: 4000,
            style: {
                background: "rgb(14, 97, 35)"
            }
        }).showToast();
    }
    else {

        for (let i = 0; i <= arrayProductos.length; i++) {
            if (inputs[0].value === arrayProductos[i].nombre) {
                Toastify({
                    text: "El producto ya existe",
                    duration: 4000,
                    style: {
                        background: "rgb(139, 0, 0)"
                    }
                }).showToast();
                printProducts(arrayProductos);
                break;
            }
            else {
                arrayProductos.push(new Producto(inputs[0].value, inputs[1].value));

                printProducts(arrayProductos);
                localStorage.setItem('arrayProductos', JSON.stringify(arrayProductos));
                Toastify({
                    text: "Producto añadido a la base de datos",
                    duration: 4000,
                    style: {
                        background: "rgb(14, 97, 35)"
                    }
                }).showToast();
                break;
            }
        }
    }

    localStorage.setItem('arrayProductos', JSON.stringify(arrayProductos));

    inputs[0].value = "";
    inputs[1].value = "";

    console.log(arrayProductos);
})
