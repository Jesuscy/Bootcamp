/** * 1. Genera una función que devuelva la suma de dos números
 * 2. Genera una función que reciba un array de números y un número y devuelva las veces que aparece ese número 
 * * 3. Genera una función que reciba un array y sobre ese array puedas realizar las siguientes acciones bajo demanda: 
 * *      1. Buscar el número de coincidencias de un elemento dado en la lista 
 * *      2. Buscar la posición de la primera coincidencia del elemento en la lista, sin usar funciones propias de arrays 
 * *      3. Filtrar la lista dada una función que determina si un elemento debe ser filtrado o no. 
 * *      4. Swap: recibe dos números (origen, destino), que son posiciones de la lista, invertir el orden desde el origen * 
 * al destino. Por ejemplo opera([1, 2, 3, 4]).swap(1, 3) => [1, 4, 3, 2]. Se pueden usar funciones de los arrays */

//function operarArray(array) {

    function buscarCoincidencias(numBuscado) {
        var contador = 0;
        for (let num of array) {
            if (num === numBuscado) {
                ++contador;
            }
        }
        console.log(`El numero ${numBuscado} se repite ${contador} veces`);
        return contador;
    }
/*
    function buscarPosicion(array, numBuscado) {
        for (num of array) {
            if (num === numBuscado) {
                const indice = array.indexOf(num);
            }

        }

    }
*/

//}

function buscarPosicion(array, numBuscado) {
    for (let num of array) {
        if (num == numBuscado) {
             var indice = array.indexOf(num);
             break;
            }
    }
    console.log(`El numero ${numBuscado} se encuentra por primera vez en la posición ${indice}`);
    return indice;


}


var arrayPrueba = [1, 2, 3, 4, 4]
operarArray(4);
buscarPosicion(arrayPrueba,4);
