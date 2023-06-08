'use strict'

//Hacer un programa que muestre los numeros entre dos numeros

var num1 = parseInt(prompt("introduzca el primer número", 0));
var num2 = parseInt(prompt("introduzca el segundo número", 0));
for (var i = num1; i <= num2; i++){
    document.write("los numeroa entre " + num1 + " y " + num2  + "  son " + i + "<br>");

}