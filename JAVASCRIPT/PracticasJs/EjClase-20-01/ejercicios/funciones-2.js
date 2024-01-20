/**
 * Crear una función que devuelva el promedio o media de un listado de números.
 * Si el listado está vacío, devolver 0.
 */

    const lista = [6,6,6,6,6,6]
    function media(lista){
        var total = 0;
        if(lista.length === 0){
            console.log(`La media es ${total}`);

        } 
        else{
        for(num of lista){
            total += num;   
        }
        var media = total / lista.length;
        console.log(`La media es ${media}`);
    }
}
    

  

    media(lista);