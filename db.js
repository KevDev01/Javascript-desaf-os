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

/* Push al Array de la base de datos */
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    resultado.innerHTML = "";
    let arrayProductos = JSON.parse(localStorage.getItem("arrayProductos")) || [];
    let inputs = e.target.children;
    arrayProductos.push(new Producto(inputs[0].value, inputs[1].value)); 
    
    for (const producto of arrayProductos) {
        let arrayProductos = JSON.parse(localStorage.getItem("arrayProductos"));
        const div = document.createElement("div");
        div.innerHTML = `
    <p class="productos"> Nombre del producto: ${producto.nombre}</p> 
    <p> Precio: $${producto.precio}</p> 
    `;
        resultado.append(div);

    }
    Toastify({
        text: "Producto añadido a la base de datos",
        duration:4000,
        style: {
            background: "rgb(14, 97, 35)"
        }
    }).showToast();

    localStorage.setItem('arrayProductos', JSON.stringify(arrayProductos));

    inputs[0].value = "";
    inputs[1].value = "";

    console.log(arrayProductos);
} )
