const axios = require('axios');

const url = 'https://pokeapi.co/api/v2/pokemon/';

function teams(){
  axios
  .get(url)
  .then(response => {
    const value = response.data.results
    
  })
  .catch(error => {
    console.error(error);
  })
}

module.exports = teams;