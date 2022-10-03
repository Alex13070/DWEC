let bombilla = document.getElementById("bombilla");

let btnEncender = document.getElementById("encender");

let btnApagar = document.getElementById("apagar");

function encender() {
    bombilla.innerHTML = "Estoy encendida";
}

function apagar() {
    bombilla.innerHTML = "Estoy apagada";
}


btnEncender.onclick = (ev => {
    encender();
})

btnApagar.onclick = (ev => {
    apagar();
})

