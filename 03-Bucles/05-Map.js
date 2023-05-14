//* El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
let array =[1,2,3,4,5];
let array2= [];
array2 = array.map(element => {
    console.log(element*2);
    return element+1;
    //devuelve un arreglo del mismo tamaño del anterior pero con
    //cambios especificados en esta zona a cada elemento
});
console.log(array);
console.log(array2);