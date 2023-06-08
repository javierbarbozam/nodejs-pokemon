const axios = require('axios');
//let readlineSync = require('readline-sync');

const url = 'https://pokeapi.co/api/v2/pokemon/';

function pokemonSearchName(name){
  axios
  .get(`${url}${name}`)
  .then(response => {
    const value = response.data
    pokemonInfo(value)
  })
  .catch(error => {
    console.error(error);
  })
}

function pokemonInfo(result){
  const info = {
    name: result.name,
    height: result.height,
    weight: result.weight,
    type: []
  }
  
  result.types.forEach(element => {
    info.type.push(element.type.name)
  })
  console.log(info)
}

module.exports = pokemonSearchName;