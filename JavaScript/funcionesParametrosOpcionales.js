'use strict'

//Funciones
//Funciones es una agrupacion reutilizable de un conjunto de instrucciones

function calculadora (num1, num2, mostrar = false) {
if (mostrar == false) {
    console.log("Hola soy una calculadora");
    console.log("la suma es " + (num1 + num2));
    console.log("la resta es " + (num1 - num2));
    console.log("la multiplicacion es " + (num1 * num2));
    console.log("la división es " + (num1 / num2));
    console.log(mostrar);
} else {
    document.write("Hola soy una calculadora"+ "<br>");
    document.write("la suma es " + (num1 + num2)+ "<br>");
    document.write("la resta es " + (num1 - num2)+ "<br>");
    document.write("la multiplicacion es " + (num1 * num2)+ "<br>");
    document.write("la división es " + (num1 / num2)+ "<br>");
    document.write(mostrar);
}
}

calculadora(2, 6, false);
calculadora(6, 12, true);