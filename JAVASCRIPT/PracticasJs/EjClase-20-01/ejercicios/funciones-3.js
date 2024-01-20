/**
 * Crear una función, partiendo del ejercicio 2, que calcule el promedio dentro de un arreglo pero dentro de un rango,
 * esta función recibe el arreglo, un punto de partida y uno de termino
 * y devuelve el promedio de los valores dentro del rango especificado.
 */

    function mediaRango(lista, indice1, indice2){
        var lista2 = lista.slice(indice1,indice2);
        var total = 0;
        if(lista2.length === 0){
            console.log(`La media es ${total}`);

        } 
        else{
        for(num of lista2){
            total += num;   
        }
        var media = total / lista2.length;
        console.log(`La media es ${media}`);
    }
    }
    var lista = [1,2,3,4,5];
    mediaRango(lista, 1,4);