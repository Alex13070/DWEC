// Dada la ventana principal comunicacion.html, permitir abrir la ventana secundaria.html,
// cuando introduzca la URL. Mostrando ese texto en la ventana secundaria y permitir cerrarla.

var ventana = null


function abrirURL (){
    ventana = window.open("https://www.w3schools.com/js", "Comunicacion de ventanas", "width=600, height=500")
    setTimeout( () => cerrarVentana(), 3000);
}

function cerrarVentana () {
    if (ventana != null) {
        ventana.close()
    }
}
