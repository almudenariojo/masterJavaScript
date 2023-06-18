'use strict'

const { isRegularExpressionLiteral } = require("typescript");

//Condicional if 

var edad1 = 18;
var edad2 = 20;
if (edad1 == edad2) {
    console.log ("Tienen la misma edad")
} else {
    console.log("Tiene una edad diferente");
}

if (edad1 > edad2) {
    console.log("La edad1 es mator que edad2")
} else {
    console.log("la edad1 es menor que la edad2");
}

var nombre = "Juan";
var edad = 18;

if (edad >= 18) {
    console.log(nombre + " es mayor de edad");
}

//operadores relacionales

// > mayor
// < menor
// == isgual
// =! diferente
// >= mayor o igual
// <= menor o igual

if (edad >= 18) {
    console.log(nombre + " es mayor de edad");
} else if(edad >= 35){
    console.log ("ya no eres mileniam");
} else if (edad>90) {
    console.log("no cumples ninguna condicion");
}else {
    console.log("no se tu edad");
}