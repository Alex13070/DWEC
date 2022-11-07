/**
 * 1.- Crea un programa que muestre la hora actual, en diferentes formatos, según el valor que
 * teclee el usuario por parámetro. Ejemplo:
 *  a) 14:35:07 (hora detallada con minutos y segundos)
 *  b) 02:35 PM o AM
 */

// formatos
// resultado-formatos

function ajustarDigitos(digito) {
    let valor = digito+"";
    return (valor.length > 1)?valor:"0"+valor;    
}

function generarAMPM(fecha) {
    return ((fecha.getHours() > 12) ? fecha.getHours() - 12 : fecha.getHours()) + ":" + ajustarDigitos(fecha.getMinutes()) + " " + ((fecha.getHours() > 12) ? "PM" : "AM") 
}

function hhmmss(fecha) {
    return fecha.getHours() + ":"+ ajustarDigitos(fecha.getMinutes())+":"+ajustarDigitos(fecha.getSeconds())
}

function pintarFechas() {
    let formatos = document.getElementById("formatos")
    let resultado = document.getElementById("resultado-formatos")
    let fecha = new Date ()
    let retorno
    
    switch (parseInt(formatos.value)) {
        case 1:
            // hh:mm:ss
            retorno = hhmmss(fecha)
            break;
        case 2:
            // hh:mm AM/PM
            retorno = generarAMPM(fecha)
            break;
            
        default:
            resultado = "Error, el tipo introducido no está definido"
            break;
    }

    resultado.innerHTML = retorno

}

/**
 * 2.- Crea un programa que pida al usuario su título, autor de película favorita y año de estreno, y muestre:
 *  a) El tamaño de ambos (título y autor), sin contar espacios.
 *  b) La cadena de caracteres en minúsculas y en mayúsculas.
 *  c) Que divida los datos en tres líneas, donde ponga
 *      a. Título:
 *      b. Autor:
 *      c. Año:
 */

function contarCaracteres(frase) {
    return frase.split(" ").map(s => s.length).reduce((acumulador, a) => acumulador + a, 0)
}



function pintarDatos() {
    let resultado = document.getElementById("resultado-formulario")
    let pelicula = {
        titulo: document.getElementById("titulo").value,
        autor: document.getElementById("autor").value, 
        year: document.getElementById("year").value
    }



    mostrar = `
        <p>El tamaño del titulo es: `+ contarCaracteres(pelicula.titulo) + `</p>
        <p>El tamaño del nombre del autor es: `+ contarCaracteres(pelicula.autor) + `</p>

        <table>
            <tr>
                <td></td>
                <td>Minúscula</td>
                <td>Mayuscula<td>
            </tr>
            <tr>
                <td>Autor</td>
                <td>` + pelicula.autor.toLowerCase() + `</td>
                <td>` + pelicula.autor.toUpperCase() + `</td>
            </tr>
            <tr>
                <td>Nombre pelicula</td>
                <td>` + pelicula.titulo.toLowerCase() + `</td>
                <td>` + pelicula.titulo.toUpperCase() + `</td>
            </tr>
        </table>

        <ul>
            <li>Nombre: `+ pelicula.titulo + `</li>
            <li>Autor: ` + pelicula.autor + `</li>
            <li>Año de creacion: `+ pelicula.year + `</li>
        </ul>`

    resultado.innerHTML = mostrar    
}
