'use strict'

var nombre = prompt("introduzca nombre");
var apellidos = prompt("introduzca apellidos");

var texto = "Mi nombre es  " + nombre + " y mis apellidos son " + apellidos; 
console.log(texto);

var texto1 = `<h1> Hola que tal </h1>
<h3> mi nombre es ${nombre}</h3>
<h3> mis apellidos son ${apellidos}</h3>
`;

document.write(texto1);