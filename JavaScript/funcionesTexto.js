'use strict'

//Propiedades o métodos para cadenas

var numero = 555;
var texto = "Me llamo Almu";
var texto1 = "Esto es un curso";

var dato = numero.toString();
console.log(dato);
console.log(typeof dato);

dato = texto;
var dato = texto.toUpperCase();
console.log(dato);
console.log(typeof dato);

dato = texto1;
var dato = texto1.toLowerCase();
console.log(dato);
console.log(typeof dato);

//Calcular longitud

var nombre = "Almudena";
console.log(nombre.length);

//Concatenar textos

var textoTotal = texto + " " + texto1;
var textoconcat = texto.concat(" " + texto1);
console.log(textoconcat);
console.log(textoTotal);





