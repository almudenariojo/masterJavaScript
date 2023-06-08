'use strict'

//Condiciobnal switch

var edad = 18;
var imprime = "";

switch (edad) {
    case 18:
        imprime = "Acabas de cumplir 18 años";
        break;
    case 25:
        imprime ="Eres adulto";
        break;
     case 40:
        imprime = "Crisis de los cuarenta";
        break;
     case 70:
        imprime = "Eres anciano";
        break;
    default:
        imprime = "Edad neutra"; 
}

console.log(imprime);