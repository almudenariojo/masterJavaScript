'use strict'

//Hacer un programa que muestre los numeros impares entre dos numeros

var num1 = parseInt(prompt("introduzca el primer número", 0));
var num2 = parseInt(prompt("introduzca el segundo número", 0));

while (num1 < num2){
    num1++;

    if ((num1 % 2 != 0)) {
        document.write("El numero " + num1 + " es impar " + "<br>");
    }
}