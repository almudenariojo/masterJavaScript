'use strict'

//BOM  Browser Object Model

function getbom() {
    console.log(screen.height); //La altura de la ventana
    console.log(screen.height); //La anchura de la ventana
    console.log(window.location.href); //La url
}

function redirect(url) {
    window.location.href = url; //Redirige a otra url
}
 
function abrirVentana(url) {
    window.open(url, "", "width=400,height=300"); //que te abra una ventana nueva en el navegador
}

getbom();

//Cargar funcion y url en consola "http://www.google.com" por ejemplo