/**
 * EJERCICIO: dias_finaño
Crea un script que pida muestre el número de días que quedan desde hoy hasta el fin de año. 
Recuerda que los meses empiezan desde el número 0.
 */
let hoy = new Date ().getTime()
let fin = Date.UTC(new Date().getFullYear() + 1, 0, 1)

let diferenciaDias = Math.floor((fin - hoy) / (1000 * 60 * 60 * 24))

document.write("La diferencia en días desde hoy hasta el 1 de enero del año siguiente es de " + diferenciaDias + " dias.");
