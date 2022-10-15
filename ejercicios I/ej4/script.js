// 4.-  Pedir un número entre 0 y 9999 y decir si es capicúa.
function pedirNumero(msg) {
    let num 

    do {
        num = prompt(msg)
    } while (isNaN(num) || (num < 0 || num > 9999));

    return num
}

function esCapicua(num) {
    let array = num.split("")
    let capicua = true
    
    for (let i = 0; i < array.length/2 && capicua; i++) {
        if (array[i] != array[array.length - 1 -i]) {
            capicua = false
        }
        
    }

    return capicua
}

let num = pedirNumero("Dime un numero: ")


let elemento = document.getElementById("resultado")

elemento.innerHTML = "El número introducido {num}, {capicua} capicua".replace("{num}", num).replace("{capicua}", esCapicua(num)?"es": "no es")