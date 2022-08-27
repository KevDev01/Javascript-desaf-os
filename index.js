let pais = prompt("Ingresa tu país").toLowerCase();

while(pais != "ESC" ){
    switch (pais){
        case "mexico":
            alert("Bienvenido")
            break;
        case "united states":
            alert("Welcome")
            break;
        case "canada":
            alert("Welcome")
            break;
        default:
            alert("Solo funciona con paises en norteamerica / Only countries in North America")
    }
    pais = prompt("Ingresa tu país / Introduce your country")
}

alert("Gracias")