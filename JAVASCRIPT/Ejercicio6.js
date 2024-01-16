/*
Dibujar un triángulo de la siguiente manera:
*
**
***
****
*****
****
***
**
*
El número de asteriscos en el punto máximo es 5
*/
const pixel = '*';

for(let i=1; i<=5;i++){
    console.log(pixel.repeat(i))
}
for(let i=4; i>0;i--){
    console.log(pixel.repeat(i))
}
