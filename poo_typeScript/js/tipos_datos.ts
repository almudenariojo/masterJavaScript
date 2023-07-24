//String

let cadena: string = "Almudena";

console.log(cadena);

// Number

let numero: number = 12;

console.log(numero);

// Boolean

let verdadero_falso: boolean = true;

console.log(verdadero_falso);

//Any

let cualquier_cosa: any = "hola";

console.log(cualquier_cosa);

//Arrays

var nombres: Array<string> = ["Almudena", "Fran", "Rocio"];

console.log(nombres);

var years: number[] = [12,11,10];

console.log(years);

//Variables distintas combinadas con operadores


var diferentes: string | number = "David";
diferentes =12;

console.log(diferentes);

//Tipos de datos personalizados

type alfanumerico = string | number;

var cadenas: alfanumerico = "Pepe";
cadenas = 55;

//let y var 

var numero1 =10;
var numero2 = 12;

if (numero1 == 10) {
    let numero1 = 44;
    var numero2 = 55;
    console.log(numero1, numero2);
}

console.log(numero1, numero2);

