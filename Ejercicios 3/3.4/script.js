// 1. Abrir una ventana nueva, con las siguientes condiciones:
//  - Se debe preguntar al usuario si está de acuerdo o no, y solo si acepta se abrirá la nueva ventana.
//  - La nueva ventana tendrá 300 x 200 pixeles, y se posicionará en 500x500 pixeles.
//  - Colocar el scroll de la ventana abajo del todo.

function ejercicio1() {
    if (confirm("¿Estás de acuerdo con abrir una ventana nueva?")) {
        let w = window.open("https://www.w3schools.com/js", "Comunicacion de ventanas", "width=300, height=200")
        w.moveTo(500, 500);
    }    
}


// 2.- Al presionar este botón, generar un numero aleatorio entre 0 y 3, de forma que si se genera el 0 se abrirá
// la web de gmail.com, si un 1 la web del correo de educamadrid (https://correoweb.educa.madrid.org/), si se
// genera un 2, la web de yahoo, y un 3 la web de Outlook. 
// (Para generar un valor aleatorio utilizar la función random del objeto Math.)


function ejercicio2() {
    let n = Math.random() * 4;
    let link;

    switch (n) {
        case 0:
            link = "https://mail.google.com/mail";
            break;
        case 1:
            link = "https://correoweb.educa.madrid.org/";
            break;
        case 2:
            link = "https://yahoo.com/";
            break;
        case 3:
            link = "https://outlook.office365.com";
            break;
    
        default:
            alert("Ha ocurrido un error.");
            break;
    }

    window.open(link);

}

// 3.- Con este botón aparecerá una ventana que ocupará el ancho del monitor y la mitad de su altura.
// Se mostrará un alert indicando si el navegador tiene activadas las cookies.

function ejercicio3() {
    let ancho = window.screen.availWidth;
    let alto = window.screen.availHeight/2;
    let w = window.open("https://www.w3schools.com/js", "Comunicacion de ventanas", `width=${ancho}, height=${alto}`);
    alert(`Las cookies están ${navigator.cookieEnabled? "activadas" : "desactivadas"}`);
}