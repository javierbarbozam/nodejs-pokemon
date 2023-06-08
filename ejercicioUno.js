const axios = require('axios');

const url = 'https://pokeapi.co/api/v2/pokemon/';

function pokemon20Names(){
  axios
  .get(url)
  .then(response => {
    const value = response.data.results
    pokeNames(value)
  })
  .catch(error => {
    console.error(error);
  })
}

  function pokeNames(names){
  let counter = 0;
  names.forEach(element => {
    console.log(counter+=1, element.name);
  });
}

module.exports = pokemon20Names;