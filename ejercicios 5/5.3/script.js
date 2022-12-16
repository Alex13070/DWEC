// Validacion del formulario
const form = document.getElementById("formulario");

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que se envie el formulario

    if (form.checkValidity()) {
        mostrarDatos(); // Mostrar datos del formulario en caso de que estos sean correctos.
    }
    else {
        event.stopPropagation();        
    }
    form.classList.add('was-validated'); // Para mostrar los mensajes de error

}, true);       

const usuario = document.getElementById("usuario");
const password = document.getElementById("password");
const rojo = document.getElementById("Rojo");
const verde = document.getElementById("Verde");
const azul= document.getElementById("Azul");

rojo.onchange = () => {
    document.body.style.backgroundColor = "#FF0000";
}

verde.onchange = () => {
    document.body.style.backgroundColor = "#00FF00";
}

azul.onchange = () => {
    document.body.style.backgroundColor = "#0000FF";
}

password.onmouseover = () => {
    password.type = "text";
}

password.onmouseleave = () => {
    password.type = "password";
}


function mostrarDatos() {
    const valorActivo = document.querySelector('input[name="color"]:checked').value;
    alert(`Usuario: ${usuario.value} \nContraseña: ${password.value} \nColor: ${valorActivo}`); 
}

