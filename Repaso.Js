class Persona {
    constructor(nombre,edad,profesion) {
        this.nombre=nombre;
        this.edad=edad;
        this.profesion=profesion;
               
    }

    saludar(){
        console.log(`Hola,soy ${this.nombre}, tengo ${this.edad} anos y soy ${this.profesion}`)
    }

    despedirse(){
        console.log(`Adios, soy ${this.nombre}, hasta luego`)
    }
}

const persona1= new Persona("Juan", 30, "Ingeniero en sistemas")
const persona2= new Persona("Maria", 25, "Medica")

persona1.saludar();
persona1.despedirse();

persona2.saludar();
persona2.despedirse();