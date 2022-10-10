// 1.- Pedir tres números y mostrarlos ordenados de mayor a menor.
function pedirNumero(msg) {
    let num 

    do {
        num = prompt(msg)
    } while (isNaN(num));

    return parseInt(num)
}

let array = []


array[0] = pedirNumero("Dime primer número: ")
array[1] = pedirNumero("Dime segundo número: ")
array[2] = pedirNumero("Dime tercero número: ")


let elemento = document.getElementById("resultado")

let mostrar = "<p>Numeros dados: " + array.join(" ") + "<br>"

array.sort((a, b) => b - a)

mostrar += "Números ordenados: " + array.join(" ") + "</p>"

elemento.innerHTML = mostrar