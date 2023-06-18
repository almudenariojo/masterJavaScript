'use strict'

// Bucle while

var year = 2018;

while (year <= 2025) {
    console.log("Estamos en el año " + year);
    year++;

    if (year == 2000) { 
        break; //para para el bucle
    }
    year--;
}