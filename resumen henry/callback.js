// es un tipo de funciones
// que pasan por parametros a otras funciones
//son muy utiles para asegurarnos el flujo de ejecuciones de tareas
var devuelvoUsuario = function () {
    return 'Camilo';
};

var devuelvoSaludo = function (){
    return 'Hola';
};

var saludar = function (cb1,cb2){
    return cb1() + ' ' + cb2();
};
var resultado = saludar ( devuelvoSaludo, devuelvoUsuario);
console.log(resultado); // return Hola Camilo

var devuelvoFrase =function(comida){
    return 'Hoy quiero comer: ' + comida;
};
var hablar = function (comida,cb) {
    return cb(comida);
};
var fraseFinal = hablar('Pizza',devuelvoFrase);
console.log(fraseFinal); // return Hoy quiero comer: Pizza