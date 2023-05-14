//* La instrucción for-in itera sobre todas las propiedades enumerables de un objeto que está codificado por cadenas (ignorando los codificados por Símbolos, incluidas las propiedades enumerables heredadas.

var mundo = { continentes : 5, paises: 195, oceanos: 7 }
for (prop in mundo) {
    console.log(prop); // retorna el nombre de la propiedad para cada posicion
    console.log(mundo[prop]); // retorna el valor de cada propiedad
    //acciones a realizar en cada propiedad del objeto
}