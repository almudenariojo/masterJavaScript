'use strict'

//LocalStorage


//Comprobar si tenemos el localStorage disponible y compatible con nuestro navegador
if(typeof(Storage)!=='undefined'){
    console.log("localStorage disponible");
}else{
    console.log("localStorage incompatible");  
};

//Guardar datos en el LocalStorage

localStorage.setItem ("titulo", "Curso de JavaScript");

//Recuperar elemento
document.querySelector("#peliculas").innerHTML=localStorage.getItem("titulo");

//Guardar objeto

var usuario = {
    nombre: "Almudena",
    apellidos: "Riojo Gómez",
    edad: 46
}

localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
document.querySelector("#datos").append(" " + userjs.apellidos + " " + userjs.edad);

//Borrar memoria localstorage

localStorage.removeItem("usuario");
localStorage.clear();