const Pokedex = require('./pokedex');
const pokedex = new Pokedex();

describe('Pokedex', () => {
  it('Adds pikachu to the pokedex and returns the list', (done) => {
    pokedex.catch('pikachu') 
    .then(() => {
      expect(pokedex.all()).toContain('pikachu');
      done();
    }) 
  })

  it('Adds jigglypuff to the pokedex and returns the list', (done) => {
    pokedex.catch('jigglypuff') 
    .then(() => {
      expect(pokedex.all()).toContain('pikachu', 'jigglypuff');
      done();
    }) 
  })
});
