'use strict'

window.addEventListener('load', function(){

    function intervalo() {
        var tiempo = setInterval(function() {
          console.log("Set interval ejecutado");
      
          var encabezado = document.querySelector("h1");
          if (encabezado.style.fontSize === "50px") {
            encabezado.style.fontSize = "10px";
          } else {
            encabezado.style.fontSize = "50px";
          }
        }, 3000);
      
        return tiempo;
      }
      

    var tiempo =intervalo();

var stop1 = document.querySelector ("#stop");

stop1.addEventListener ("click", function(){
    alert("Has parado el intervalo en bucle");
clearInterval(tiempo);
  });

  var start1 = document.querySelector ("#start");

start1.addEventListener ("click", function(){
    alert("Has iniciado el intervalo en bucle");
intervalo();
  });

});