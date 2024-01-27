/*
Basandote en el siguiente html y javascript,inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
*/
const insertHere = document.body.querySelectorAll('.fn-insert-here');
console.log(insertHere);
const ArrayInsertHere = Array.from(insertHere);
for(inHere of ArrayInsertHere){
    const nodeText = document.createElement('p');
    nodeText.textContent = 'Voy dentro!'
        inHere.appendChild(nodeText);
}