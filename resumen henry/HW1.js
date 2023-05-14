function BinarioADecimal(num) {
    let numeroSeparado = num.split('');
    var acumulador = 0;
    for (let i = 0 ; i < numeroSeparado.length ; i ++){
       if (numeroSeparado[i] == 1){
          acumulador += (Math.pow (2,numeroSeparado.length - i - 1)* 1);          
       }
      else {
       acumulador += Math.pow (2,numeroSeparado.length - i - 1)* 0;
      }
      };
 //return acumulador;
console.log(acumulador); 
}
BinarioADecimal('10');