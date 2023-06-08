'use strict'

//Muestre numeros divisores del numero introducido

var num1 = parseInt(prompt("Introduzca un número", 0));

for (var i = 1; i <= num1; i++){

    if ((num1 % i == 0)) {
        document.write("El numero " + i + " es divisible del numero "+ num1 + "<br>");
    }
}