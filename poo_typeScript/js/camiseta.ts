// Interface
interface CamisetaBase{
    setColor(color: string):string;
    getColor(): string;
}

//Decorador
function estampar(logo: string) {
    return function <T extends { new(...args: any[]): CamisetaBase }>(constructor: T) {
        return class extends constructor {
            estampacion() {
                console.log("Camiseta estampada con el logo: " + logo);
            }
        };
    };
}

@estampar('Gucci gant')


// Clase(molde del objeto)

class Camiseta implements CamisetaBase {
    
//Propiedades (caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    //Constructor

    constructor(color:string, modelo:string, marca:string, talla:string, precio: number){
        this.color= color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    //Métodos(funciones o acciones del objeto)

    // Implementación del método setColor definido en la interfaz
    public setColor(color: string): string {
        this.color = color;
        return `El color se ha establecido a: ${color}`;
    }

    
    // Implementación del método getColor definido en la interfaz
    public getColor(): string {
        return this.color;
    }

}


// Clase hija

class Sudadera extends Camiseta{
    public capucha: boolean;

    setCapucha (capucha: boolean){
        this.capucha = capucha;
    }

    getCapucha(){
        return this.capucha;
    }
}

var camiseta = new Camiseta ("Azul", "Manga corta", "Nike", "L", 12);
console.log(camiseta);

// Crear una clase decorada extendida
const CamisetaEstampada = estampar('Gucci gant')(Camiseta);

// Crear una variable de tipo CamisetaEstampada con el decorador aplicado
const camisetaEstampada = new CamisetaEstampada("Azul", "Manga corta", "Nike", "L", 12);
camisetaEstampada.estampacion();
console.log(camisetaEstampada);


var sudadera = new Sudadera ("Azul", "Manga corta", "Nike", "L", 12);
sudadera.setCapucha(true);
sudadera.setColor("Gris");
console.log(sudadera);