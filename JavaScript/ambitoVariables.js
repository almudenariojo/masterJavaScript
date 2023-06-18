'use strcit'

function holaMundo(texto) {
    var hola_mundo = "esto es una variable global dentro de ls funcion"; 
    console.log(texto);
    console.log(numero.toString());
    console.log(hola_mundo);

}

var texto = "Hola mundo soy una variable local";
var numero = 12;

holaMundo(texto);
// fuera no se puede mostar la variable hola_mundo porque esta definida dentro la funcion