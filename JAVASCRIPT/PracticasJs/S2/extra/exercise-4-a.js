/*Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la 
posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.

Sugerencia de función:  */


arrayIndex = (array,texto) =>{
    var found = false;
    var indice;
    for(text of array){
        if(text.includes(texto)){
            indice = array.indexOf(text);
            found = true;
        }
    }
    if(found){
        console.log(`El texto introducido se encuentra en la posición ${indice}`);

    }
    else{
        console.log(`El texto introcido no se encontró`);
    }

    
}
var texto = 'yo';
var arrayText = ['hola','que','tal','estas','yo','bien'];

arrayIndex(arrayText,texto);
