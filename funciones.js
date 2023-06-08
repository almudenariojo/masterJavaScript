'use strict'

//Funciones
//Funciones es una agrupacion reutilizable de un conjunto de instrucciones

//Defino la funcion
function calculadora() {
    //return "Hola soy una calculadora";
    console.log("Hola soy una calculadora");
    console.log("la suma es " + (10 + 5));
    console.log("la resta es " + (10 - 5));
    console.log("la multiplicacion es " + (10 * 5));
    console.log("la división es " + (10/5));
}

//console.log (calculadora())
calculadora();


function calculadora1 (num1, num2) {

    console.log("Hola soy una calculadora");
    console.log("la suma es " + (num1 + num2));
    console.log("la resta es " + (num1 - num2));
    console.log("la multiplicacion es " + (num1 * num2));
    console.log("la división es " + (num1 / num2));
}

calculadora1(2, 6);

for (var i = 0; i <= 10; i++) {
    calculadora1(i, 8);
}


calculadora1(10, 5);

