'use strict'

var formulario = document.querySelector ("#formpeliculas");

formulario.addEventListener('submit', function(){

    var titulo = document.querySelector('#addpelicula').value;
console.log(titulo);
    if(titulo != "null"){
    localStorage.setItem(titulo, titulo);
    }
});
console.log(localStorage);

var ul = document.querySelector('#peliculas-list');

for(var i in localStorage){
  
    if(typeof localStorage[i] == 'string'){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
}

var formulariob = document.querySelector ("#formBorrarPeliculas");

formulariob.addEventListener('submit', function(){

    var titulo = document.querySelector('#borrarPelicula').value;
    localStorage.removeItem(titulo);

});