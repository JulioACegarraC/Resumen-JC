// Declarar
var arr = [];
var obj = {
    nombre: 'julio',
    apellido: 'cegarra'
};
// Agregar valores
arr[0] = '1'; // retorna ['1']
obj['nombre'] = 'Julio'; // retorna { nombre : 'Julio'}
// Adicionar valores
arr.push('2'); // retorna ['1','2'] agrega al final
arr.unshift('0'); // retorna ['0','1','2'] agrega al principio
obj['nombre'] = 'Daniel'; // retorna { nombre : 'Daniel'} reemplaza el valor anterior
obj['apellido'] = 'Aragoza'; // retorna { nombre: 'Daniel', apellido: 'Aragoza'} Agrega la propiedad apellido y su valor

// Eliminar valores
arr.pop(); // retorna ['0','1'] elimina el ultimo elemento
arr.shift(); // retorna ['1'] elimina el primer elemento
delete obj['apellido'] ; // retorna { nombre: 'Daniel'} elimina la propiedad apellido y su valor