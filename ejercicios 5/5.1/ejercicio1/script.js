// 1.- Elaborar un programa que muestre un div de color verde. Cuando se presione, cambiar el color a naranja y 
// luego de soltar el botón del mouse volver a pintar de verde.

const box = document.getElementById("box");

box.onmousedown = () => {
    box.style.backgroundColor = "red";
}

box.onmouseup = () => {
    box.style.backgroundColor = "white";
}