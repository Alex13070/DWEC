// Declara una clase llamada Mascotas, que reciba en el constructor los valores nombre y cantidad
// de comida en gramos al día que consume. Definir un método que imprima las
// características de cada mascota.
// Declarar luego una clase llamada MascotasComida, que herede de Mascotas y añada el
// método mascotaDias, que en base a, si las bolsas de comida son de 3kg, para todas
// las mascotas, calcule los días que durará la bolsa.

class Mascotas {

    nombre;
    cantidadComida;

    constructor(nombre, cantidadComida) {
        this.nombre = nombre;
        this.cantidadComida = cantidadComida;
    }

    imprimirDatos() {
        document.write(`<p>${this.nombre} consume ${this.cantidadComida} gramos de comida al dia</p>`);
    }
}

class MascotasComida extends Mascotas {

    constructor(nombre, cantidadComida) {
        super(nombre, cantidadComida);
    }

    mascotaDias(bolsa = 3) {
        document.write(`<p>La comida de ${this.nombre} va a durar ${Math.round(parseFloat((bolsa * 1000) / this.cantidadComida) * 100) / 100} dias</p><br><br>`);
    }

}

function pintarDatos(animal, cantidad) {
    document.write(`<h2>${animal.nombre}</h2>`)
    animal.imprimirDatos();
    animal.mascotaDias(cantidad);
}

const gato = new MascotasComida("Gato", 450);
const perro = new MascotasComida("Perro", 950);
const capibara = new MascotasComida("Capibara", 125);

document.write("<h1>Animales</h1>");

pintarDatos(gato, 5);
pintarDatos(perro, 10);
pintarDatos(capibara, 3);