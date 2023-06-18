'use strict'
//funcion anonima que no tiene nombre

var pelicula = function (nombre) {
    return "La pelicula es " + nombre;
}

function sumame(num1, num2, sumaYmuestra, sumaPor2) { //Funciones callbacks
    var sumar = num1 + num2;
    sumaYmuestra(sumar);
    sumaPor2(sumar);
    return sumar;
}
sumame(4, 5, dato => {   // Funcion callbacks de flecha
    console.log("La suma es " + dato);
}, dato => {
    console.log("La suma por 2 " + (dato * 2));

});
