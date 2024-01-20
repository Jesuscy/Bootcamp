/**
 * Parte 1.Crear un objeto literal persona con nombre y edad y un método (función propia de un objeto) que indique si la persona es mayor de edad
 */

// Inicio parte 1
const persona = {
    nombre: 'Jesus',
    apellido : 'Carrasco',
    edad : 21,
    mayorEdad : function(){
        if(this.edad >= 18){
            console.log(`${this.nombre} ${this.apellido} es mayor de edad`);
        }
        else{
            console.log(`${this.nombre} ${this.apellido} es menor de edad`);
        }

    }
}
// Fin parte 1

/**
 * Parte 2. Crear una función que, dado un nombre y una edad, genere el objeto anterior (nombre, edad y función) con esos datos.
 * Por ejemplo:
 *
 * generarPersona('Iván', 18) devolvería:
 * {
 *  nombre: 'Iván',
 *  edad: 18,
 *  esMayorDeEdad()
 * }
 */

// Inicio parte 2
    function generarPersona (nombre, apellido, edad){
        //Copio la plantilla de persona en nueva persona.
        const nuevaPersona = Object.assign(persona);

        //Asingno los valores pasados por argumento a la nuevaPersona.
        nuevaPersona.nombre = nombre;
        nuevaPersona.apellido = apellido;
        nuevaPersona.edad = edad;
        //La muestro y a devuelvo.
        console.log(nuevaPersona);
        return nuevaPersona;
    }
    //Personas prueba
    generarPersona('Paco','Martinez', 44);
    generarPersona('Juan','Gil',28);
// Fin parte 2

/**
 * Parte 3. Crea un array con varias personas
 */

// Inicio parte 3

// Fin parte 3
    //Creo un array con nuevas personas generadas con generear Persona,
    const arrayPersonas = [generarPersona('Jesus','Carrasco', 21), generarPersona('Dionisio','Garrido',16)];
    console.log(arrayPersonas);
    


/**
 * Parte 4. Crear una función que, dado el listado de la parte 3, devuelva la edad promedio de todas las personas.
 */

// Inicio parte 4
    var total = 0;
    //Recorro el array de personas, como no lo modifico uso for of sumando la edad de cada persona en el total.
    for(pers of arrayPersonas){
        total += pers.edad;
    }
    //Hago la media y la muestro por pantalla.
    const media = total/arrayPersonas.length;
    console.log(`La media de edad es de ${media} anos`);
// Fin parte 4