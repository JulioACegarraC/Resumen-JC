//* Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia
let suma = 0;
while(suma<3){
    suma=suma+1;
    console.log(suma);
}
console.log(suma);
//* La sentencia (hacer mientras) crea un bucle que ejecuta una sentencia especificada, hasta que la condición de comprobación se evalúa como falsa. La condición se evalúa después de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecute al menos una vez.
let i = 3;
do {
  i = i + 1;
} while (i < 3);

console.log(i);