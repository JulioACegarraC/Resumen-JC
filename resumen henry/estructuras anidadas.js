function deObjetoAarray(objeto) {
    // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
    // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
    // Estos elementos debe ser cada par clave:valor del objeto recibido.
    // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
    // Tu código:
    var arr = [];
    var pivot =[];
    var respuesta = [];
    arr = Object.keys(objeto);
    for (let i =0; i < arr.length; i++){
       pivot.push(arr[i]);
       pivot.push (objeto[arr[i]]);
       respuesta.push(pivot);
       pivot = [];
    }
    return respuesta;
 // const mainArray = [];
 // for (let =i; i < Object.keys(objeto).length;i++){
 //    mainArray.push([Object.keys(objeto)[i] , objeto[Object.keys(objeto)[i]]]);   
 // }
 // return mainArray;   
 
 
 }
 function numberOfCharacters(string) {
    // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
    // letras del string, y su valor es la cantidad de veces que se repite en el string.
    // Las letras deben estar en orden alfabético.
    // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
    // Tu código:
    var pivV = {};
    var orden = string.split('');
    orden.sort();
    for (let i=0; i<orden.length;i++){
       if (pivV.hasOwnProperty (orden[i]) == false) {pivV[orden[i]] = 1;}
       else {pivV[orden[i]] += 1;}
       
    }
    return pivV;
 }
 function capToFront(string) {
    // Recibes un string con algunas letras en mayúscula y otras en minúscula.
    // Debes enviar todas las letras en mayúscula al comienzo del string.
    // Retornar el string.
    // [EJEMPLO]: soyHENRY ---> HENRYsoy
    // Tu código:
    var min = '';
    var may = '';
    for (let j=0 ; j< string.length; j++){
       if (string[j] === string[j].toUpperCase()){
          may += string[j];}
       else {min +=string[j];}
    }
    string = may + min;
    return string;
 // let minus = '';
 // let mayus = '';
 // 
 // for (let letter of  string){
 // if ( letter === letter.toLowerCase()) minus += letter;
 // else mayus += letter;   
 //}
 // return mayus + minus;
 }
 function asAmirror(frase) {
    // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
    // La diferencia es que cada palabra estará escrita al inverso.
    // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
    // Tu código:
    var arreglo = frase.split(" ");
    var inversa ='';
    var pivote = [];
    arreglo.forEach(num => {
       pivote.push(num.split('').reverse().join(''));
    });
    inversa = pivote.join(' ');   
    return inversa;   
 }
 function capicua(numero) {
    // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
    // Caso contrario: "No es capicua".
    // Tu código:
    var str = numero.toString().split('').reverse().join('');
    if( str === numero.toString()) return "Es capicua";
    else 
    return "No es capicua";
 }
 function deleteAbc(string) {
    // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
    // Retorna el string sin estas letras.
    // Tu código:
    var arr1 = string.split('');
    var str1 = '';
    arr1.forEach(element => {
       if(element !== 'a' && element !== 'b' && element !== 'c'){
          str1 += element; 
       }
       
    });
    return str1
 }
 function sortArray(arrayOfStrings) {
    // Recibes un arreglo de strings.
    // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
    // de la longitud de cada string.
    // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
    // Tu código:
    for ( var i=0; i< arrayOfStrings.length ; i++){
       var comparador = arrayOfStrings[i];
       var j = i - 1;
       while (j>=0 && comparador.length < arrayOfStrings[j].length){
          arrayOfStrings[j+1] =arrayOfStrings [j];
          j--;
       }
       arrayOfStrings [j+1] = comparador;
    }
    return arrayOfStrings;
 }
 
 function buscoInterseccion(array1, array2) {
    // Recibes dos arreglos de números.
    // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
    // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
    // Si no tienen elementos en común, retornar un arreglo vacío.
    // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
    // Tu código:
    var resultado = [];
    var masLargo = [];
    var masCorto = [];
    if (array1.length < array2.length) {masLargo = array2; masCorto = array1;}
    else {masLargo = array1; masCorto = array2;}
    for (let i=0 ; i < masLargo.length; i++){
       for (let j= 0 ; j < masCorto.length ; j++){
          if (masCorto[j] === masLargo[i]) resultado.push(masCorto[j]);
       }
    }
    return resultado;
 
    //var resultado = [];
    //var set = new Set(array1);
    //for(var i=0;i<array2.length;i++){
    //if (set.has(array2[i])){
    //   resultado.push(array2[i]);
    //};
    //};
    //return resultado;
    //
    //
    //
    //
 
 
 }