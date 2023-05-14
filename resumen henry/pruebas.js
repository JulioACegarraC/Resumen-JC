//function soloNumeros(array) {
    // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
    // Debe devolver un arreglo con solo los enteros.
    // Ej: 
    // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]
  
    // Tu código aca: 
var nuevoArr = [];
var arr = ["tomates",1, "lechuga",2,true];
arr.forEach((num) => {
    if (typeof num == "number"){
        nuevoArr.push(num);
    }
});

console.log(nuevoArr);

//function stringMasLarga(strings) {
    // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
    // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
    // Ej:
    // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
    // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'
  
    // Tu código aca
//  }

 var stringMasLarga = ['JavaScript', 'HTML', 'CSS']; //Debe retornar 'JavaScript'
 var pivot= "q";
 stringMasLarga.forEach((num) =>{
    if (pivot.length < num.length) pivot= num;

 });
 console.log (pivot);

// function buscarAmigo(amigos, nombre) {
    // La funcion llamada 'buscarAmigo' recibe como argumento un array llamado 'amigos' que contiene
    // en cada posición del arreglo un objeto que tiene como propiedades 'nombre' y 'edad'. También
    // recibe un string llamado 'nombre'.
    // Debe devolver el objeto cuya propiedad 'nombre' coincida con el string 'nombre' recibido por argumento.
    // Ej:
    //  var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
    //  buscarAmigo(amigos, 'toni') debe devolver { nombre: 'toni', edad: 33 };
  
    // Tu código aca:
    
//  }
var nombre = 'toni';
var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
var resp = {};

//function buscarAmigo(amigos, nombre) {
    // La funcion llamada 'buscarAmigo' recibe como argumento un array llamado 'amigos' que contiene
    // en cada posición del arreglo un objeto que tiene como propiedades 'nombre' y 'edad'. También
    // recibe un string llamado 'nombre'.
    // Debe devolver el objeto cuya propiedad 'nombre' coincida con el string 'nombre' recibido por argumento.
    // Ej:
    //  var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
    //  buscarAmigo(amigos, 'toni') debe devolver { nombre: 'toni', edad: 33 };
  
    // Tu código aca:
    //amigos es un array
    var obj = {};
    amigos.map((num)=> {
      if ( nombre === num["nombre"]) {
        //obj['nombre'] = num['nombre'];
        //obj['edad'] = num['edad'];
        console.log (num);
      };
    });
    //return obj;
  //}






amigos.forEach((num)=>{
    if (nombre == num.nombre ){
        resp.nombre = num.nombre;
        resp.edad = num.edad;
    };
});
console.log(resp);


//function numeroSimetrico(num) {
    // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
    // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
    // Un número es simétrico cuando es igual a su reverso.
    // Ej:
    // numeroSimetrico(11711) devuelve true
  
    // Tu código:
  
//  }


var numeroSimetrico = 11711;
var numToString = numeroSimetrico.toString();
var numAlReves ='';
function julio (){
for (var i = numToString.length - 1; i >= 0; i--){
    numAlReves = numAlReves + numToString[i];
};
if (numAlReves == numToString) console.log(true);
else console.log(false);
}
julio();

//function pluck(array, propiedad) {
    // La función llamada 'pluck' recibe como argumento un array de objetos llamado 'array' y el nombre de una
    // propiedad.
    // La función debe devolver un nuevo arreglo con solo los valores dentro de la propiedad recibida
    // Ej:
    // var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
    // productos.pluck(productos, 'name') debería devolver ['TV LCD', 'Computadora']
    // Pista: es una buena oportunidad para usar map.
  
    // Tu código acá:
  
//  }

var resp = [];
var productos = [{ name: 'TV LCD', price: 100},{ name: 'Computadora', price: 500 }];
var propiedad = "name";

for (var i=0; i<productos.length;i++){
    resp.push(productos[i][propiedad]);
};
console.log(resp);

