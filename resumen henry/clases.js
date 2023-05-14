/* son un conjunto de datos
son una plantilla o modelo del mundo real
*/
// Funcion Constructora
function Auto (puertas,color,marca,año, ruedas) {
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
    this.informacion = function () {
        console.log('Este es un ' + this.marca + ' de color '+ this.color);
    };

}
// utilizar la plantilla , agregar una instancia
var miPrimerAuto = new Auto(2,'rojo','Ferrari',2018,4);
console.log(miPrimerAuto); // return Auto {puertas:2, color:'rojo',marca:'Ferrari',año:2018,ruedas:4}
console.log(miPrimerAuto.marca); // return Ferrari
//llamar a la funcion
miPrimerAuto.informacion();// return Este es un Ferrari de color rojo

// Expresion de Clase
class Auto {
    constructor (puertas,color,marca,año, ruedas) {
        this.puertas = puertas;
        this.color = color;
        this.marca = marca;
        this.año = año;
        this.ruedas = ruedas;
    }
    informacion() {
        console.log('Este es un ' + this.marca + ' de color '+ this.color);
    }
}
// utilizar la plantilla , agregar una instancia
var miSegundoAuto = new Auto(4,'Blanco','Fiat',2015,4);
console.log(miSegundoAuto); // return Auto {puertas:4, color:'blanco',marca:'Fiat',año:2015,ruedas:4}
console.log(miSegundoAuto.marca); // return Fiat
// Llamar la funcion
miSegundoAuto.informacion();

class Footbal {
    constructor(jugador){
        this.jugador = jugador;
    }
    obtenerNombre(){
        console.log(this.jugador);
    }
}
var argentina = new Footbal ('Messi');
var brazil = new Footbal ('Pele');
argentina.obtenerNombre(); // return Messi
brazil.obtenerNombre(); // return Pele