const botonExportar = document.getElementById("btnCotizar");


botonExportar.addEventListener('click', () => {
    const $elementoParaConvertir = document.getElementById('exportarPDF');
    html2pdf()
        .set({
            margin: 1,
            filename: 'cotización.pdf',
            html2canvas: {
                scale: 3,
                letterRendering: true,
            }

        })

        .from($elementoParaConvertir)
        .save()
        .catch(err => console.log(err))
        .finally()
        .then(() => {
            console.log("Listo")
        })
})

