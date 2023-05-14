var arr2 = [];
var arr1 = [];
var objeto2 ={};
var objeto1 = {};

function addPersona(){
    objeto2['nombre'] = 'Julio';
    objeto2['apellido'] = 'Cegarra';
    objeto2['cedula'] = 1127951653;
    objeto1['persona'] = objeto2
};
function addAmigos (amigo){
    arr1.push(amigo);
    objeto1['amigos']= arr1;

};
function addNotas (x){
    arr2.push(x);
    objeto1['notas'] = arr2;
    
};

addPersona();
addAmigos('juan');
addAmigos('pedro');
addAmigos('sandro');
addAmigos('roberto');
addNotas(10);
addNotas(10);
addNotas(9);
addNotas(6);
addNotas(7);
// la funcion cuenta amigos debe devolver un entero con la cantidad de amigos de la persona
function cuentaAmigos () {
    //la propiedad amigos del objeto es un array
    for (var prop in objeto1) { // el for in recorre el objeto y nos da acceso a cada propiedad
        if (prop == 'amigos') { // el condicional if nos deja actuar cuando la propiedad sea la que buscamos
            console.log(prop); // retorna amigos
            console.log(objeto1[prop]); // retorna ['juan','pedro','sandro','roberto']
            console.log(objeto1[prop].reverse()); // retorna ['roberto','sandro','pedro','juan']
            console.log(objeto1[prop].length); // retorna 4
        }    
    }
};
cuentaAmigos(); 

function cambiaNombre (nombreNuevo) {
    for (var prop in objeto1) {
        if ( prop == 'persona'){
            for (var prop2 in objeto1[prop]){
                if (prop2 == 'nombre'){
                    // prop2 = nombreNuevo; // le cambia el valor a el nombre que tiene la variable de iteracion prop2
                    console.log(objeto1[prop][prop2]); // retorna Julio
                    console.log(objeto1[prop][prop2].length); // retorna 5 aplicación del metodo al string julio
                    objeto1[prop][prop2] = nombreNuevo; // cambia el valor en el objeto persona de Julio a daniel
            }
            }
        }
    }
};
cambiaNombre('daniel');
console.log(objeto1);


function promedioNotas () {
    var promedio = 0;
    var suma = 0;
    var contador =0;
    for (var prop in objeto1) {
        if ( prop == 'notas'){
            console.log( objeto1[prop]); // retorna [10,10,9,6,7]
            contador = objeto1[prop].length
            console.log(contador);
            for ( let i=0 ; i< objeto1[prop].length; i ++ ){
                // console.log(objeto1[prop][i]); // retorna 10 luego 10 luego 9 luego 6 luego 7
                suma += objeto1[prop][i];
                // console.log(suma); // retorna 10 luego 20 luego 29 luego 35 luego 42
            }
            promedio = suma / contador;
            console.log (promedio); // retorna 8.4
        }
    }
}

promedioNotas();

var array1 = [{nombre:'julio' , apellido: 'cegarra'}, 18465899, 'programador'];

function obtenerNombre (){
    console.log(array1[0]['nombre']); // retorna julio
}
obtenerNombre();
console.log(array1);

var arr3 = [1,2,3,4,5];
var arr4 = [4,5,6,7,8];
console.log(arr3.concat(arr4)); // retorna [1,2,3,4,5,4,5,6,7,8] concatena 2 arrays
