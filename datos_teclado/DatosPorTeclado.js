function primero () {
    let nombre = prompt("Dime tu nombre", "");
    let correo = prompt("Dime tu correo", "");

    let div = document.getElementById("primero");

    div.innerHTML = "<h2>Nombre y correo <h2/>"
    div.innerHTML += "<p>Nombre: {nombre} </p>".replace("{nombre}", nombre)
    div.innerHTML += "<p>Correo: {correo} </p>".replace("{correo}", correo);

}

function segundo () {
    let radio

    do {
        radio = prompt("Dime el radio", "");
    } while (isNaN(radio));
   

    let div = document.getElementById("segundo");

    div.innerHTML = "<h2>Area del circulo <h2/>"
    div.innerHTML += "<p>Area: {area} </p>".replace("{area}", (Math.PI*Math.pow(radio, 2)));
}

function tercero () {

    let array = []
    array.length = 4

    for (let i = 0; i < array.length; i++) {
        do {
            array[i] = prompt("Dime un numero", "");
        } while (isNaN(array[i]));        
    }

    array.sort((a,b) => b-a)

    array.forEach(element => {
        console.log(element)
    });    


    let div = document.getElementById("tercero");

    div.innerHTML = "<h2>Ejercicio 3 <h2/>"
    div.innerHTML = "<p>Cálculo a hacer: {calculo} </p>".replace("{calculo}", "(" + array[0] + " + " + array[3] + ") + (" + array[1] + " x " + array[2] + ")")
    div.innerHTML += "<p>Cálculo hecho: {hecho} </p>".replace("{hecho}", ((parseInt(array[0]) + parseInt(array[3])) + (parseInt(array[1]) * parseInt(array[2]))));
    
}

function cuarto () {
    let lado

    do {
        lado = prompt("Dime el lado de un cuadrado", "");
    } while (isNaN(lado));
   

    let div = document.getElementById("cuarto");

    div.innerHTML = "<h2>Perímetro del cuadrado<h2/>"
    div.innerHTML += "<p>Perímetro: {p} </p>".replace("{p}", lado*4);
    
}

function quinto() {

    let cantidad
    let precio

    do {
        cantidad = prompt("Dime la cantidad", "");
    } while (isNaN(cantidad) || Number.isInteger(cantidad));

    do {
        precio = prompt("Dime el precio", "");
    } while (isNaN(precio));
   

    let div = document.getElementById("quinto");

    div.innerHTML = "<h2>Perímetro del cuadrado<h2/>"
    div.innerHTML += "<p>Cantidad: {cantidad} </p>".replace("{cantidad}", cantidad);
    div.innerHTML += "<p>Precio: {precio} </p>".replace("{precio}", precio);
    div.innerHTML += "<p>Total: {total} </p>".replace("{total}", precio*cantidad);

}

// 1. Pedir nombre y correo de usuario por pantalla

let btn1 = document.getElementById("1")

btn1.onclick = event => {
    primero()
}


// 2. Calcular el area de un círculo dado un radio

document.getElementById("2").onclick = event => {
    segundo()
}

// 3. Pedir 4 edades: Calcular la suma del mayor y del menor junto al producto de la segunda y la tercera  --> 1+4 + 3*2

document.getElementById("3").onclick = event => {
    tercero()
}

// 4. Solicitar lados de un cuadrado y mostrar perímetro

document.getElementById("4").onclick = event => {
    cuarto()
}

// 5. Cantidad * precio y mostrar por pantalla

document.getElementById("5").onclick = event => {
    quinto()
}