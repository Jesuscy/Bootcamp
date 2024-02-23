
const holes = document.getElementsByClassName('hole');
const moles = document.getElementsByClassName('mole');
const scorePane = document.getElementsByClassName('score')[0];
const button = document.getElementById("startButton");
var score;
var timeUp;


//Comienza la partida 
function startGame() {
//Deshabilito el boton, controlo el tiempo de la partida y la score.    
    button.disabled = true;
    scorePane.textContent = 0;
    timeUp = false;
    score = 0;
    //Utilizo el setTimeOut para pasados 15s terminar la partida.
    setTimeout(() => timeUp = true, 15000);
    //Mientras no acabe el tiempo de partida muestro topos cada 0.5s.
    const intervalId = setInterval(() => {
        if (timeUp != true) {
            mostrarTopos();
        }
        else {
            //Si no queda tiempo habilito el boton limpio el intervalo.
            clearInterval(intervalId);
            button.disabled = false;


        }

    }, 500);

}



function bajarTopos(numeroTopo) {
    //Obtiene el div del topo y establece su clase original.
    const hole = document.getElementsByClassName(`hole${numeroTopo}`)[0];
    hole.className = `hole hole${numeroTopo}`


}


function mostrarTopos() {
    //Genero el numero del topo a mostrar y el tiempo a mostrar.
    let numeroAleatorio = Math.floor(Math.random() * 6) + 1;
    let tiempoAleatorio = Math.floor(Math.random() * 1000) + 30000;
    let clickado = true;

    //Obtengo un elemento hole aleatorio y le sumo la clase "up" que muestra el topo.
    const hole = document.getElementsByClassName(`hole${numeroAleatorio}`)[0];
    //Si no contiene la clase up, se la añade.
    if(!hole.classList.contains("up")){
        hole.className += " up";
    }
    

    //Creo el metodo controlador del evento fuera para poder eliminar el evento una vez clickado.
    function clickEventHandler(){
        if(clickado === true){
            console.log(clickado);
            //Borra el topo, suma 1 al score y limpia el setTimeOut para que no ocurra si hace click.
            bajarTopos(numeroAleatorio);
            score = score + 1;
            scorePane.textContent = score;
            this.removeEventListener("click",clickEventHandler);
            clickado = false;
        }
        else{
        //Borra el topo, elimina el evento.
        console.log(clickado + "Else setTimeOut");
        bajarTopos(numeroAleatorio);
        this.removeEventListener("click",clickEventHandler);
        clickado = false;
    }
}
    //Añado el evento al hole.
    hole.addEventListener("click",clickEventHandler);

    //setTimeOut para que pasado el tiempo en el que se muestra bajar el topo y quitarle el evento. 
    const timeOutId = setTimeout(() => {
        clickado = false;
        clickEventHandler();
        console.log("SetTimeOut()");
    }, 10000);



    /*
    setTimeout(() => {
        topoArriba = false;

        const intervalId = setInterval(() => {
            console.log(topoArriba);
            if (topoArriba) {
                console.log("Soy true");
                hole.className += " up";

                hole.addEventListener("click", function clickEventHandler() {
                    score = score + 1;
                    bajarTopos(numeroAleatorio)
                    scorePane.textContent = score;
                    hole.removeEventListener("click", clickEventHandler);
                });

            } else {
                console.log("Hola");
                bajarTopos(numeroAleatorio);
                hole.removeEventListener("click", clickEventHandler);
                clearInterval(intervalId);
            }
        }, tiempoAleatorio);
    }, tiempoAleatorio);

*/


}
