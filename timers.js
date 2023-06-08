'use strict'

window.addEventListener('load', function(){

    //Timers
    var tiempo = setInterval(function(){
        console.log ("Set interval ejecutado");
   
    var encabezado = document.querySelector("h1");
    if (encabezado.style.fontSize ="50px"){
        encabezado.style.fontSize ="20px";
    }else{
        encabezado.style.fontSize ="50px";
    }
},500);

});