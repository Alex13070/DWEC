// Divisa de partida, divisa de conversión, dinero
    
function pedirNumero(msg) {
    let num 

    do {
        num = prompt(msg)
    } while (isNaN(num) && num == "");

    return parseInt(num)
}

function pedirTipo(io) {
    let tipo
    
    do {
        tipo = prompt("Dime el tipo de {io} (E euro, D dolar, Y yen, L libras)").replace("{io}", io).toUpperCase().trim()
    } while (tipo != "E" && tipo != "D" && tipo != "Y" && tipo != "L")

    return tipo
}

function pasarA() {
    //No voy a escribir esto 
    return "Digamos que he hecho el proceso"
}

let entrada = pedirTipo("entrada")
let salida = pedirTipo("salida")

let num = pedirNumero("Dime la cantidad en {entrada}".replace("{entrada}", entrada))



alert(pasarA())

