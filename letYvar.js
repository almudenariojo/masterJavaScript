'use strict'
//Diferencia entre let y var

//Prueba con var (variable global)

var numero = 40;
console.log(numero); //valor 40

if(true) {
    var numero = 50;
    console.log(numero);  //valor 50
}
console.log(numero);  //valor 50


//Prueba con let (variable de bloque)

var numero = 40;
console.log(numero); //valor 40

if(true) {
    let numero = 50;
    console.log(numero);  //valor 50
}
console.log(numero);  //valor 40