const container =  document.getElementById('container');
const listaPokemon = document.getElementById('pokedex');
listaPokemon.className = 'poke-lista';

//Metodo getPokemons, hace el fetch y devuelve los 150 pokemons.
//Async ya que espera a la respuesta del fetch.
const getPokemons = async () =>{
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const result = await response.json();
        console.log(result.results);
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
        poke['type'] = result.types.map((type) =>
            type.type.name).join(', ');

        }
        console.log(pokemonMapeados)
    return pokemonMapeados;

}

const drawPokemons = async (pokemonsMapeados) =>{
    for(pokemon of pokemonsMapeados){

        const div = document.createElement('div');
        div.className = 'poke-div';
        
        const pokemonContentContainer = document.createElement('div');
        pokemonContentContainer.className = 'poke-div-content';

        const nombre = document.createElement('p');
        nombre.textContent = pokemon.nombre.toUpperCase();;
        pokemonContentContainer.appendChild(nombre);

        const img = document.createElement('img');
        img.setAttribute('src', pokemon.img);
        pokemonContentContainer.appendChild(img);

        const tipo = document.createElement('p');
        tipo.textContent = `Tipo ${pokemon.type}`;
        pokemonContentContainer.appendChild(tipo);
        
        div.appendChild(pokemonContentContainer);
        listaPokemon.appendChild(div);
    }

}




const init = async () =>{
    const pokemons  = await getPokemons();
    const pokemonsMapeados = await mapPokemons(pokemons);
    const pokemonsDraw = await drawPokemons(pokemonsMapeados);

    console.log(pokemonsMapeados);

} 

init();