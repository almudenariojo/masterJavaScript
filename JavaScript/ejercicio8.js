'use strict'

//Calculadora pida dos numeros por pantalla

var num1 = parseInt(prompt("Introduzca el primer número", 0));
var num2 = parseInt(prompt("Introduzca el segundo número", 0));


while (num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2) ) {
  var num1 = parseInt(prompt("Introduzca el primer número", 0));
var num2 = parseInt(prompt("Introduzca el segundo número", 0)); 
}

var resultado = "La suma es " + (num1 + num2) + "<br>" +
    "La resta es " + (num1 - num2) + "<br>" +
    "La multiplicacion  es " + (num1 * num2) + "<br>" +
    "La división es " + (num1 / num2) + "<br>";

var resultado1 = "La suma es " + (num1 + num2) + "\n"+
    "La resta es " + (num1 - num2) + "\n" +
    "La multiplicacion  es " + (num1 * num2) + "\n" +
    "La división es " + (num1 / num2) + "\n";

document.write(resultado);
document.write(resultado1);
