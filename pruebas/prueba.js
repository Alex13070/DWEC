let nombre = "Alex";

let edad = 10

console.log(nombre + " " + edad);

for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        console.log(i);        
    }
}

let htmlElement  = document.getElementById("prueba");

htmlElement.innerHTML = "Hola";

let array = nombre.split(""); //Para separar las letras

array.forEach(element => {
    console.log(element);
});
