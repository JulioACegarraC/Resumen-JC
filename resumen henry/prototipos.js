// Mecanismo por el cual todos los elementos de Javascrip
// pueden extender sus propiedades y metodos
Array.prototype.mayoresQueTres = function(){
    var arregloModificado = [];
    for (let i=0; i< this.length;i++){
        if (this[i] >3) {
            arregloModificado.push(false);
        }else {
            arregloModificado.push(this[i])
        }
    }
    return arregloModificado;
}
var arreglo = [1,2,3,4,5];
var nuevoArreglo = arreglo.mayoresQueTres();
console.log(nuevoArreglo); // return [1,2,3,false,false] que corresponden a los elementos 4 y 5

class Latinoamerica {
    constructor(){
        this.paises = [];
    }
}
Latinoamerica.prototype.agregarPais = function(pais){
    this.paises.push(pais);
};
var continente = new Latinoamerica();
continente.agregarPais('Mexico');
console.log(continente.paises); // return ['Mexico']