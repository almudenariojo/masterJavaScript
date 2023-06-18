'use strict'

//Hacer un programa que nos diga si el numero es par o impar

var num1 = parseInt(prompt("Introduzca un número", 0));

while (isNaN(num1)) {
  var num1 = parseInt(prompt("Introduzca un número", 0));  
}

if (num1 % 2 == 0) {
    document.write("El numero es " + num1 + " par");
} else {
    document.write("El numero es " + num1 + " impar");
}