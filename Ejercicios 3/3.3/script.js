// Dada la ventana principal comunicacion.html, permitir abrir la ventana secundaria.html,
// cuando introduzca la URL. Mostrando ese texto en la ventana secundaria y permitir cerrarla.

var ventana = null


function abrirURL (){
    let url = document.getElementById("url");
    let w = window.open("", "Comunicacion de ventanas", "width=600, height=500")

    w.document.write(url.value)
    
    let cerrar = document.getElementById("cerrar")

    ventana = w

    cerrar.innerHTML = "<button onclick='cerrarVentana()'>cerrar</button>"

}

function cerrarVentana () {
    if (ventana != null) {
        ventana.close()
    }
}
