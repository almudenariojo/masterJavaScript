var bicicleta = {
color: "Rojo",
modelo: "BMX",
frenos: "de  disco",
velocidadMaxima: "60km",
cambiaColor: function(nuevo_color){
    // bicicleta.color = nuevo_color;
    this.color = nuevo_color;
    console.log (this);
}
};


bicicleta.cambiaColor("Azul");
console.log (bicicleta);