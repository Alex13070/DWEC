// Divisa de partida, divisa de conversión, dinero
    
function pedirNumero(msg) {
    let num 

    do {
        num = prompt(msg)
    } while (isNaN(num) && num == "");

    return parseInt(num)
}

function pedirTipo() {
    let tipo
    
    do {
        tipo = prompt("Dime el tipo (C, F) o si quieres salir (SALIR)").toUpperCase().trim()
    } while (tipo != "C" && tipo != "F" && tipo != "SALIR")

    return tipo
}

function toFahrenheit(t) {
    return (t*1.8) + 32
}

function toCelsius(t) {
    return (t-32) / 1.8
}

let cel = []
let far = []

let sigo = true



for (let i = 0;sigo; i++) {
    let tipo = pedirTipo()
    sigo = tipo != "SALIR"

    if (sigo){
        
        let num = pedirNumero("Dime la temperatura en {tipo} número {numero}: ".replace("{numero}", i+1).replace("{tipo}", "º"+tipo))
        
        if (tipo == "C") {
            cel[i] = num
            far[i] = toFahrenheit(num)
        }
        else {
            far[i] = num
            cel[i] = toCelsius(num)
        }
    }
}


let pintar = `
<table>
    <tr>
        <td>ºC</td>
        <td>ºF</td>
    </tr>
`

for (let i = 0; i < cel.length; i++) {
    pintar += `
    <tr>
        <td>` + cel[i] + `</td>
        <td>` + far[i] + `</td>
    </tr>`
    
}


pintar += `</table>`

document.write(pintar)