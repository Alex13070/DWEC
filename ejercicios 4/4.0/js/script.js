// 1.- La empresa Dolty S.A., tiene tres delegaciones en tres provincias andaluzas
//  (Sevilla, Huelva, Cadiz). Cada una de ellas tiene un numero variado de
//  empleados, que no es inferior a 4 en ninguna de ellas. Realiza un programa que
//  cargue el sueldo de los empleados, junto a su nombre, de cada una de las delegaciones en una array
//  distinto. Para finalizar la carga de cada array se ingresa como dato el cero.
//  Una vez ingresados los sueldos, mostrar los siguientes datos:
//     a) Informar del tamaño (numero de empleados) de cada una de las delegaciones.
//     b) Determinar la media de los sueldos de cada una de las delegaciones.
//     c) Ordenar de menor a mayor los sueldos de Huelva, De mayor a menor los de Sevilla y
//          Cádiz. Indicando a que delegación pertenece cada lista ordenada
//     d) Determinar  el sueldo menor y el mayor de las tres delegaciones.

let sevilla = [
    new Empleado("Jorge", 1500),
    new Empleado("Pepe", 1000), 
    new Empleado("Paco", 1800)
]


let huelva = [
    new Empleado("Manuel", 1800),
    new Empleado("Paula", 1400),
    new Empleado("Daniel", 1700), 
    new Empleado("Ignacio", 2000)
]


let cadiz = [
    new Empleado("Alex", 1320),
    new Empleado("Sergio", 1000), 
    new Empleado("Sara", 1900)
]

function mostrarEmpleado(empleado) {
    console.log(`Nombre: ${empleado.nombre}, Sueldo ${empleado.sueldo}`);
}

function sueldoMedio(array) {
    return (array.map(empleado => empleado.sueldo).reduce((acumulador, sueldo) => acumulador + sueldo, 0) / array.length);
}

function ordenar(array) {
    return array.sort((e1, e2) => e1.sueldo - e2.sueldo);
}

function ordenarMostrar(array) {
    ordenar(array).forEach(element => {
        mostrarEmpleado(element);
    });
}

function mostrarMaximoMinimo(array) {
    ordenar(array);
    console.log(`Sueldo minimo: Nombre: ${array[0].nombre}, Sueldo ${array[0].sueldo}`);
    console.log(`Sueldo maximo: Nombre: ${array[array.length - 1].nombre}, Sueldo ${array[array.length - 1].sueldo}`);

}

console.info("Apartado a:")

console.log("Sevilla: " + sevilla.length);
console.log("Huelva: " + huelva.length);
console.log("Cadiz: " + cadiz.length);

console.info("Apartado b:")

console.log("Sevilla: " + sueldoMedio(sevilla));
console.log("Huelva: " + sueldoMedio(huelva));
console.log("Cadiz: " + sueldoMedio(cadiz));

console.info("Apartado c:")

console.info("Sevilla:");
ordenarMostrar(sevilla);
console.info("Huelva:");
ordenarMostrar(huelva);
console.info("Cadiz:");
ordenarMostrar(cadiz);

console.info("Apartado d:")
mostrarMaximoMinimo(sevilla.concat(huelva, cadiz))




