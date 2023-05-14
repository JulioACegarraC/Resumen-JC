//* La sentencia sentencia for...of ejecuta un bloque de código para cada elemento de un objeto iterable, como lo son: String, Array
let iterable = [10, 20, 30];
for (let value of iterable) {
  value += 1;
  console.log(value);
}