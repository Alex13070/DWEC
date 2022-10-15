alert("Piensa un número entre el 1 y el 100 y lo intentaré adivinar")

let encontrado = false
let numero = 0

while (!encontrado ) {
    numero = parseInt(Math.random()*100)
    encontrado = confirm("¿Es tu número el {num}?".replace("{num}", numero))
}

document.getElementById("resultado").innerHTML = "El número en el que estabas pensando es el " + numero