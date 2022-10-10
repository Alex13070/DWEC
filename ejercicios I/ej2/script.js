// 2.- Pedir un número entre 0 y 9999 y decir cuantas cifras tiene.
function pedirNumero(msg) {
    let num 

    do {
        num = prompt(msg)
    } while (isNaN(num) || (num < 0 || num > 9999));

    return num
}

let num = pedirNumero("Dime un numero: ")


let elemento = document.getElementById("resultado")

elemento.innerHTML = "El número introducido {num} tiene {cifras} cifras".replace("{num}", num).replace("{cifras}", num.length)