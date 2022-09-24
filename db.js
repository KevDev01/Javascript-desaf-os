class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
}

const arrayProductos = [];
localStorage.setItem('arrayProductos', JSON.stringify(arrayProductos));

let formulario = document.getElementById("formulario");
let resultado = document.getElementById("resultado");


formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    resultado.innerHTML = "";
    let inputs = e.target.children;
    arrayProductos.push(new Producto(inputs[0].value, inputs[1].value)); 

    for (const producto of arrayProductos) {
        const div = document.createElement("div");
        div.innerHTML = `
    <h3> Nombre del producto: ${producto.nombre}</h3> 
    <p> Precio: $${producto.precio}</p> 
    `;
        resultado.append(div);

    }

    inputs[0].value = "";
    inputs[1].value = "";

    console.log(arrayProductos);
} )
