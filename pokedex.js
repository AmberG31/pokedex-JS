class Pokedex {
  constructor() {
    this.balls = [];
  }

  catch(pokemonname) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`)
      .then((response) => response.json())
      .then((data) => {
        this.balls.push({
          name: data.name,
          id: data.id,
          height: data.height,
          weight: data.weight,
          types: data.types.map(item => item.type.name)});
    })
  };

  all() {
    return this.balls.map(pokemon => pokemon.name);
  };

};

module.exports = Pokedex;
