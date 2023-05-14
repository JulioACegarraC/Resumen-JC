// metodos para numeros
var num = 2;
var numStr = num.toString();
console.log (numStr); // return 2 pero en una variable de tipo string

var num1 = 3;
var num2 = 3.14;
var consulta1 = Number.isInteger(num1);
var consulta2 = Number.isInteger(num2);
console.log(consulta1); // return true
console.log(consulta2); // return false

var x = 3.14;
var ceil =Math.ceil(x); // return 4
var floor = Math.floor(x); // return 3
var max = Math.max(1,2,3,4,5,6); // return 6
var min = Math.min(1,2,3,4,5,6); // return 1
console.log(Math.random()); // return un numero random entre o y 1
console.log(Math.pow(2,2)); // return 2 q la 2 = 4
console.log(Math.sqrt(x)); // return 1.77 raiz cuadrada de 3.14
console.log(x.toString()); // return 3.14 como string

// metodos para strings
var str = 'jul io';
var str1 = ' julio ';
var str2 = 'DANIEL';
console.log(str.length); // return 6
console.log(str.includes('j')); // return true
console.log(str.includes('a')); // return false
console.log(str.slice(0,3)); // return jul extrae de la posicion 0 a la 2
console.log(str.slice(4)); // return io extrae a partir de la pos 4
console.log(str.split('')); // return ['j','u','l','','i','o']
console.log(str.split(' ')); // return ['jul', 'io']
console.log(str.split('i')); // return ['jul ','o']
console.log(str1.trim()); // return 'julio'
console.log(str.trim()); // return 'jul io'
console.log(str1.trim().toUpperCase()); // return 'JULIO'
console.log(str2.toLowerCase()); // return 'daniel'

// metodos para arrays
var arr = [{nombre:'a'},{nombre:'b'}];
var arr1 = ['a','b','c','d',['e','f','g']];
var arr2 = ['a','b','c',['e','f','g'],'d'];
console.log(arr.length); // return 7
console.log(arr.reverse()); // return ['g','f','e','d','c','b','a'] modifica el array inicial
console.log(arr1.flat()); // return ['a', 'b', 'c','d', 'e', 'f','g'] aplana los elementos anidados no modifica el array inicial
console.log (arr.slice(0,3)); // return ['g','f',e,]
console.log (arr2.sort()); // ordena los elementos del array segun el ordenamiento por defecto return ['a','b','c','d',['e','f','g']] modifica el array inicial
console.log(arr.join('')); // return un string gfedcba
console.log(arr.includes('a')); // return true si el elemento esta dentro del array

// metodos para los objetos
var obj = {
    nombre : 'julio',
    edad : 34 ,
    profesion : 'es programador',
}
console.log ( obj.hasOwnProperty('nombre')); // return true
console.log(Object.keys(obj)); // return ['nombre', 'edad', 'profesion']

var mascota = {
    animal: 'perro',
    raza: 'ovejero Aleman',
    amistoso: true,
    dueño: 'Maria Lopez', 
    info: function () {
        console.log('Mi perro es un '+ this.raza); // con la palabra this apuntamos a que el contexto es el objeto mascota
    },
};
mascota.info ();