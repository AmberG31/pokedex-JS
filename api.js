const fetchPokemon = (pokemonname) => {
 return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`)
  .then((response) => response.json())
  .then((data) => {
    const pokemon = {
      name: data.name,
      id: data.id,
      height: data.height,
      weight: data.weight,
      types: data.types.map(item => item.type.name)
    };
    return pokemon;
  });
};


// fetchPokemon('charizard').then((pokemon) => console.log(pokemon))

// fetchPokemon('pikachu').then((pokemon) => console.log(pokemon));

module.exports = fetchPokemon;

// const fetchPokemon = require('./api')
