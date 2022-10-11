/* Estilo para tener 2 tabs en el HTML */

const pestaña1 = document.getElementById('pestaña1');
const pestaña2 = document.getElementById('pestaña2');
const bloque1 = document.getElementById('bloque1');
const bloque2 = document.getElementById('bloque2');

let choose = 1;

const cambiarTabs = () => {
    choose == 1 ? (
        pestaña1.classList.value = 'pestaña pestaña-activa',
        bloque1.classList.value = 'bloque bloque-activo'
    )
        : (
            pestaña1.classList.value = 'pestaña',
            bloque1.classList.value = 'bloque'
        )

    choose == 2 ? (
        pestaña2.classList.value = 'pestaña pestaña-activa',
        bloque2.classList.value = 'bloque bloque-activo'
    )
        : (
            pestaña2.classList.value = 'pestaña',
            bloque2.classList.value = 'bloque'
        )
}

pestaña1.addEventListener('click', () => {
    choose = 1
    cambiarTabs()
})

pestaña2.addEventListener('click', () => {
    choose = 2
    cambiarTabs()
})