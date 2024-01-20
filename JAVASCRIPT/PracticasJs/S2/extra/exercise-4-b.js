/*
Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada 
`removeItem` que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) 
llame a la función anteriormente creada ``findArrayIndex`` y obten el indice para posteriormente usar la función de 
javascript ``.splice()`` para eliminar el elemento del array. Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.
*/



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
        return indice;
        }
}
    
    
removeIndex = (array,indice) =>{
    array.splice(indice,1);

}

var texto = 'yo';
var arrayText = ['hola','que','tal','estas','yo','bien'];

removeIndex(arrayText,arrayIndex(arrayText,texto));
console.log(arrayText);