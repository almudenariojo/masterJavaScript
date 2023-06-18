'use strict'

window.addEventListener('load',function(){
console.log("DOM cargado");

var formulario= this.document.querySelector("#formulario");
var box_dashed =this.document.querySelector(".dashed");
box_dashed.style.display = "none";


formulario.addEventListener('submit', function(){
    console.log("Evento submit capturado");

    var nombre = document.querySelector('#nombre').value;
    var apellidos = document.querySelector('#apellidos').value;
    var edad = document.querySelector('#edad').value;

    if(nombre.trim() == null || nombre.trim().length == 0){
        alert ("El nombre no es válido");
        document.querySelector('#error_nombre').innerHTML = "El nombre no es válido";
        return false;
    }else{
        document.querySelector('#error_nombre').style.display="none";
    }

    if(apellidos.trim() == null || apellidos.trim().length == 0){
        alert ("Los apellidos no son válidos");
        document.querySelector('#error_apellidos').innerHTML = "Los apellidos no son válidos";
        return false;
    }else{
        document.querySelector('#error_apellidos').style.display="none";
    }

    if(edad.trim() == null || edad <= 0 || isNaN(edad)){
        alert ("La edad no es válida");
        document.querySelector('#error_edad').innerHTML = "La edad no es válida";
        return false;
    }else{
        document.querySelector('#error_edad').style.display="none";
    }

    box_dashed.style.display = "block";

    var p_nombre = document.querySelector("#p_nombre span");
    var p_apellidos = document.querySelector("#p_apellidos span");
    var p_edad = document.querySelector("#p_edad span");

p_nombre.innerHTML = nombre;
p_apellidos.innerHTML = apellidos;
p_edad.innerHTML = edad;




/* 
var datosUsuario= [nombre, apellidos, edad];
var indice;
 for(indice in datosUsuario){
    var parrafo = document.createElement("p");
    parrafo.append(datosUsuario[indice]);
    box_dashed.append(parrafo);
 }
*/

});

});

