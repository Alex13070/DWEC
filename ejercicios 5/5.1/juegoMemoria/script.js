const numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
const shuffleArray = (a, b) => 0.5 - Math.random();

let puntuacion = 0;
let array = [];
let tablero = [];
let seleccion = [];



function crearTablero() {
    array = numeros.sort(shuffleArray);
    tablero = [];
    seleccion = [];
    puntuacion = 0;
    for (let i = 0; i < array.length; i++) {
        tablero.push(plantillaCarta(i));
    }
}

function plantillaCarta(i) {
    return `
    <div class="carta-box" id="prueba-giro" onclick="seleccionarTarjeta(${i})">
        <div class="carta" id="tarjeta${i}">
            <div class="cara">
                <img src="./imagenes/cara.png">
            </div>
            <div class="cara detras" id="trasera${i}">
                <img src="./imagenes/shrek${array[i]}.png">
            </div>
        </div>
    </div>   
    `;    
}

function plantillaPagina(primeras, segundas) {
    return `
        <section class="row">
            ${primeras}
        </section>
        <section class="row">
            ${segundas}
        </section>
    `;
}

function pintarPagina() {
    crearTablero();

    let mitad = Math.floor(tablero.length / 2);
    let pagina = document.getElementById("tablero");
    pagina.innerHTML = (
        plantillaPagina(
            tablero.slice(0, mitad).reduce( (acumulador, actual) => acumulador + actual, "" ),
            tablero.slice(mitad).reduce( (acumulador, actual) => acumulador + actual,  "" )
        )
    );

    pintarPuntuacion();
}

function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i);
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)";
        seleccion.push(i);
    }

    if (seleccion.length == 2) {
        probarSeleccion(seleccion);
        seleccion = [];
    }
}

function probarSeleccion(seleccion) {
    setTimeout(() => {
        if(array[seleccion[0]] != array[seleccion[1]]) {
            let c1 = document.getElementById(`tarjeta${seleccion[0]}`);
            let c2 = document.getElementById(`tarjeta${seleccion[1]}`);
            c1.style.transform = "rotateY(0deg)";
            c2.style.transform = "rotateY(0deg)";            
        }
        else {
            let c1 = document.getElementById(`trasera${seleccion[0]}`);
            let c2 = document.getElementById(`trasera${seleccion[1]}`);
            c1.style.border = "3px solid #00EE00";
            c2.style.border = "3px solid #00EE00";
            puntuacion++;
            pintarPuntuacion();
        }
    }, 1000);
}

function pintarPuntuacion() {
    document.getElementById("puntuacion").innerHTML = puntuacion;
    
    setTimeout(() => {
        if (puntuacion == 5) {
            alert("¡Has ganado!");
        }
    }, 200);
}

pintarPagina()

