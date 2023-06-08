'use script'

//Programa que pida 2 numeros y nos diga cual es el mayor, el menor o si son iguales
var num1 = parseInt(prompt("introduzca el primer número", 0));
var num2 = parseInt(prompt("introduzca el segundo número", 0));

console.log(num1, num2);

if (num1 == num2) {
    console.log("Los dos numeros son iguales");
} else if (num1 > num2) {
    console.log("El numero1 " + num1 + " es mayor que el numero2 " + num2);
} else if (num1 < num2) {
    console.log("El numero2 " + num2 + " es mayor que el numero1 " + num1);
} 
else {
     console.log("Introduzca números correctos");
}