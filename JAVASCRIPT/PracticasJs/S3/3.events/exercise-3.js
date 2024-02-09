/*Basandote en el siguiente html, añade un evento 'input' que ejecute un console.log con el valor del input.
*/
    const input = document.getElementsByTagName('input')[0];
    input.addEventListener('change',e =>{
    console.log(input.value);});
