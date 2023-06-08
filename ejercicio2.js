'use strict'

//utilizar un bucle, mostar la suma y la media de los números introducidos hasta introducir un numero negativo y ahi mostrar el resultado

var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt("Introduce números hasta que metas uno negativo, 0"))
    if (isNaN(numero)) {
        numero = 0;
    } else if (numero >= 0) {
        suma = suma + numero;
        // suma += 0;
        contador++;
    }

} while (numero >= 0);

console.log(" la suma de todo los números es: " + suma);
console.log("La media de todos los números es: " + (suma/contador));