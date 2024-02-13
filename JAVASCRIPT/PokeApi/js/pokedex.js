const container =  document.getElementById('container');
const listaPokemon = document.getElementById('pokedex');
listaPokemon.className = 'poke-lista';

//Metodo getPokemons, hace el fetch y devuelve los 150 pokemons.
//Async ya que espera a la respuesta del fetch.
const getPokemons = async () =>{
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
        const result = await response.json();
        return result.results;
    }
    catch(error){
        console.log(error);
    }
}
//Recorre pokemons recuperados y modifica el objeto pokemon.
const mapPokemons = async (pokemons) =>{
    const pokemonMapeados = pokemons.map((pokemon) =>({
        nombre : pokemon.name,
        url : pokemon.url,
    })
        
    );
    //Sumo la propiedad img,id y type, que esta en la url propia cada pokemon.
    for(let poke of pokemonMapeados){
        const response = await fetch(poke.url);
        const result  = await response.json();
        poke['img'] = result.sprites['front_default'];
        poke['id'] = result.id;
        poke['weight'] = result.weight;
        poke['height'] = result.height;
        poke['type'] = result.types.map((type) =>
            type.type.name).join(', ');

        }
    return pokemonMapeados;

}

const drawPokemons = async (pokemonsMapeados) =>{
    //Recorro el bucle de pokemons mapeados para pintar los pokemons.
    for(let i = 0; i<=pokemonsMapeados.length; i++){
        const div = document.createElement('div');
        div.className = 'poke-div';
        
        const pokemonContentContainer = document.createElement('div');
        pokemonContentContainer.className = 'poke-div-content';

        const nombre = document.createElement('p');
        nombre.textContent = pokemonsMapeados[i].nombre.toUpperCase();
        pokemonContentContainer.appendChild(nombre);

        const img = document.createElement('img');
        img.setAttribute('src', pokemonsMapeados[i].img);
        pokemonContentContainer.appendChild(img);

        const tipo = document.createElement('p');
        tipo.textContent = `Tipo ${pokemonsMapeados[i].type}`;
        pokemonContentContainer.appendChild(tipo);
        
        div.appendChild(pokemonContentContainer);
        listaPokemon.appendChild(div);

        //Añado un evento a cada div de pokemons para mostrar pintar el popUp. 
        div.addEventListener('click', () =>{
            drawPokemonDetails(pokemonsMapeados[i]);
            });

        
    }
    
    /*
    SUSTITUIDO POR FOR(LET I), POR PROBLEMAS AL PASAR LA REFERENCIA DEL OBJETO A DRAWDETAILS.
    for(pokemon of pokemonsMapeados){

        const div = document.createElement('div');
        div.className = 'poke-div';
        
        const pokemonContentContainer = document.createElement('div');
        pokemonContentContainer.className = 'poke-div-content';

        const nombre = document.createElement('p');
        nombre.textContent = pokemon.nombre.toUpperCase();
        pokemonContentContainer.appendChild(nombre);

        const img = document.createElement('img');
        img.setAttribute('src', pokemon.img);
        pokemonContentContainer.appendChild(img);

        const tipo = document.createElement('p');
        tipo.textContent = `Tipo ${pokemon.type}`;
        pokemonContentContainer.appendChild(tipo);
        
        div.appendChild(pokemonContentContainer);
        listaPokemon.appendChild(div);

        div.addEventListener('click', () =>{
            drawPokemonDetails(pokemon);

        });
    }
*/

}

const drawPokemonDetails = async (pokemon) =>{
    //Creo el popUp que contiene poke-card
    const pokeCardPopUp = document.createElement('div');
    pokeCardPopUp.className = 'poke-card-popUp';
    //pokeCard es el container.
    const pokeCard = document.createElement('div');
    pokeCard.className = 'poke-card';
   
    //Nombre.
    const pokeCardTitle = document.createElement('div');
    pokeCardTitle.className = 'card-nombre'
    const pokeTitle = document.createElement('h1');
    pokeTitle.textContent = pokemon.nombre;
    pokeCardTitle.appendChild(pokeTitle);
    pokeCard.appendChild(pokeCardTitle);
    
    //Div para guardar img y info.
    const pokeDetails =  document.createElement('div');
    pokeDetails.className = 'card-details';
    pokeCard.appendChild(pokeDetails);
   
    const pokeImg = document.createElement('div');
    pokeImg.className= 'poke-card-img';
    const img = document.createElement('img');
    img.setAttribute('src', pokemon.img)
   
    const pokeInfo =  document.createElement('div');
    pokeInfo.className= 'poke-card-info';
    pokeImg.appendChild(img);
    pokeInfo.appendChild(pokeImg);

    //Div pare rellenar info.
    const pokeInfoHeight = document.createElement('div');
    pokeInfoHeight.className ='poke-card-info-detail';
    pokeInfoHeight.textContent = `Altura: ${pokemon.height}m`;

    const pokeInfoWeight = document.createElement('div');
    pokeInfoWeight.className ='poke-card-info-detail';
    pokeInfoWeight.textContent = `Peso: ${pokemon.weight}Kg`;

    const pokeInfoType = document.createElement('div');
    pokeInfoType.className ='poke-card-info-detail';
    pokeInfoType.textContent =`Tipo: ${pokemon.type}.`;

    //Añado la info a sus divs.
    pokeInfo.appendChild(pokeInfoHeight);
    pokeInfo.appendChild(pokeInfoWeight);
    pokeInfo.appendChild(pokeInfoType);
   
    //Añado los detalles.
    pokeDetails.appendChild(pokeInfo);
    pokeDetails.appendChild(pokeImg);

    //Añado todo al popUp.
    pokeCardPopUp.appendChild(pokeCard)
    listaPokemon.appendChild(pokeCardPopUp);
    pokeCardPopUp.style.display = 'block';

    //Para de mostrar el popUp cuando clicka fuera.
    window.addEventListener('click', (event) => {
        if (event.target === pokeCardPopUp) {
            pokeCardPopUp.style.display = 'none';
        }
    });

   

}




const init = async () =>{
    const pokemons  = await getPokemons();
    const pokemonsMapeados = await mapPokemons(pokemons);
    const pokemonsDraw = await drawPokemons(pokemonsMapeados);

} 

init();