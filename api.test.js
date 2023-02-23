const fetchPokemon = require('./api');

describe('fetchPokemon', () => {
  it('we can fetch data for pikachu and return the pokemon object', (done) => {
    fetchPokemon('pikachu')
      .then((pokemon) => {
        expect(pokemon.name).toEqual('pikachu')
        done();
      })
  });
});
