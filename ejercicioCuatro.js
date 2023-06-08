const axios = require('axios');
const url = 'https://pokeapi.co/api/v2/pokemon/';

function pokemonMoves(name){
  axios
  .get(`${url}${name}`)
  .then(response => {
    const value = response.data
    //console.log(value)
    pokemonInfo(value)
  })
  .catch(error => {
    console.error(error);
  })
}

function pokemonInfo(result){
  const info = [];

  
  result.moves.forEach(element => {
    info.push(element.move.name)
  })
  console.log(info)
}

module.exports = pokemonMoves;