let suma = 0;
for (let i=0; i<5; i++){
    suma =suma +i;
    console.log("variable de iteracion", i);
}
console.log("Variable Suma",suma);

// recorrer arreglos
let array = [1,2,3,4,5]
let contador=0;
for (let i = 0; i < array.length; i++) {
    //acciones a realizar dentro del arreglo por cada elemento
    console.log(contador += i);
}
let julio; 