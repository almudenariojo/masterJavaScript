'use strict'

var fecha = new Date;
var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia =fecha.getDate();
var hora =fecha.getHours();
var minutos =fecha.getMinutes();

var textoHora = `<br>
El año es: ${year}<br>
El mes es: ${mes}<br>
El día es: ${dia}<br>
La hora es: ${hora}<br>
Los minutos son: ${minutos}`;

document.write(textoHora);
console.log(fecha);

//Numeros aleatorio: la clase Math

console.log(Math.ceil(Math.random()*10));
console.log(Math.PI);
console.log(Math.round(9,3232323));
console.log(Math.cos(1,90));