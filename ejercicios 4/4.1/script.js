/**
 * 1.- Escribe una función que reciba dos decimales con la base y altura de un rectángulo y devuelva su perímetro. 
 * Puedes elegir que la función obtenga los datos de la entrada estándar o no. Indicandolo en el script.
 */
function perimetroRectangulo(a,b) {
    return 2*a + 2*b;
}

/**
 * Calcula perimetro
 */
function calcularPerimetro() {
    let base = document.getElementById("base");
    let altura = document.getElementById("altura");
    let resultado = document.getElementById("resultado-rectangulo");

    if (base.value != "" && altura.value != "" ) {
        if (base.value > 0 && altura.value > 0) {
            resultado.innerHTML = "El perímetro del rectángulo introducido es " + perimetroRectangulo(base.value, altura.value);
        }
        else {
            resultado.innerHTML = ("Los numeros deben de ser positivos")
        }
    }
    else{
        resultado.innerHTML = ("Debes rellenar todos los campos con numeros");
    }
}


/**
 * 2.- Crear un script en el que se pregunte por el número de alumnos (no superior a 20, ni inferior a 8) que hay en un
 * curso, y en función de este dato, pida el nombre de los alumnos y su nota de curso. Al final, se debe mostrar, cada
 * alumno con su nota y después la media de todos los alumnos.
 */


class Alumno {
    nombre;
    nota;
}

function pedirAlumnos() {
    let resultado = document.getElementById("alumnos");
    let numero = pedirNumero("Cuantos alumnos", 8, 20);
    let array = [];
    let stringFinal = "<table>{contenido-tabla}</table>";

    let tabla = `
    <tr>
        <td>Nombre</td>
        <td>Nota</td>
    </tr>`;

    for (let i = 0; i < numero; i++) {
        array[i] = new Alumno ();
        array[i].nombre = prompt("Dime el nombre del alumno " + (i+1));
        array[i].nota = pedirNumero("Dime la nota del alumno " + (i+1), 0, 10);

        tabla +=  `
        <tr>
            <td>` + array[i].nombre + `</td>
            <td>` + array[i].nota + `</td>
        </tr>`
    }         

    stringFinal = stringFinal.replace("{contenido-tabla}", tabla)
    stringFinal += "<p>La media de los alumnos es: " + (array.map(a => a.nota).reduce((acum, v) => acum+v)/array.length) + "</p>"
    
    resultado.innerHTML = stringFinal
}

function pedirNumero(mensaje, min, max) {
    let numero
    
    do {
        numero = prompt(mensaje)  
    } while (isNaN(numero) || numero < min || numero > max);
    
    return parseInt(numero)
}

/**
 * 3.- Coges como argumento un array. Tienes que devolver true si el valor de la primera 
 *      posicion tiene todas las letras  del valor de la segunda posicion
 */

function compararArrays(array) {
    let correcto = true;
    for(let i = 0; i < array[1].length && correcto; i++) {
        correcto = array[0].includes(array[1].charAt(i));
    }

    return correcto;

}

function compararPalabras() {
    let resultado = document.getElementById("resultado-palabras")
    let palabra1 = document.getElementById("palabra1")
    let palabra2 = document.getElementById("palabra2")

    resultado.innerHTML = compararArrays([palabra1.value.toLowerCase(), palabra2.value.toLowerCase()]) ? "Contiene todo" : "No contiene todo"

}