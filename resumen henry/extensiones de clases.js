class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar (){
        console.log('Hola mi nombre es ' + this.nombre + ', tengo ' + this.edad);
    }
}
// extension de clases
// extiende propiedades y metodos
class Programador extends Persona {
    constructor (nombre, edad, añosDeExperiencia){
        super(nombre,edad); // estan siendo heredadas de la clase Persona
        this.añosDeExperiencia = añosDeExperiencia;
    }
    codear(){
        console.log('Soy '+ this.nombre + ' codeo desde hace '+ this.añosDeExperiencia + ' años')
    }
}
var martin = new Persona('Martin',26);
var programador = new Programador('Maria',37,4);
martin.saludar(); // return Hola mi nombre es Martin, tengo 26
programador.codear(); // return Soy Maria codeo desde hace 4 años
// como demostrar la herencia
programador.saludar(); // nos responde la instrucción de la clase persona, pero con la instancia de la clase programador, todod los metodos fueron heredados a la clase programador
