const elementsToRemove = document.getElementsByClassName('fn-remove-me');
console.log(elementsToRemove)
//Creo un array y lo recorro, ya que al recorrer los elementos HTML e intentar modificarlos se producen errores.
const elementsToRemoveArray = Array.from(elementsToRemove);
for(elToRem of elementsToRemoveArray){
    document.body.removeChild(elToRem);
}