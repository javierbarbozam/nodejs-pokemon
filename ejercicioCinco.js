const axios = require('axios');
let readlineSync = require('readline-sync');

const url = 'https://pokeapi.co/api/v2/';

let rlS = readlineSync.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMenu() {
  console.log('1. Search pokemon by name');
  console.log('2. List types of pokemon');
  console.log('3. Exit');
  rlS.question('Select an option: ', (option) => {
    switch (option) {
      case '1':
        pokemonSearchName();
        break;
      case '2':
        listTypesPokemon();
        break;
      case '3':
        rlS.close();
        break;
      default:
        console.log('Please select a valid option.');
        showMenu();
        break;
    }
  });
}

function pokemonSearchName() {
  rlS.question('Insert a pokemon name: ', (name) => {
    const pokemonName = name.toLowerCase();
    axios
    .get(`${url}pokemon/${pokemonName}`)
    .then(response => {
      const pokemon = response.data;
      console.log(`Name: ${pokemon.name}`);
      console.log(`Type: ${pokemon.types.map(type => type.type.name).join(', ')}`);
      console.log(`Height: ${pokemon.height}cm`);
      console.log(`Weight: ${pokemon.weight}kg`);
      showMenu();
    })
    .catch(error => {
      console.error(error);
      showMenu();
    });
  });
}

function listTypesPokemon() {
  axios
  .get(`${url}type`)
  .then(response => {
    const types = response.data.results;
    console.log('Types of pokemon:');
    types.forEach(type => {
      console.log(type.name);
    });
    showMenu();
  })
  .catch(error => {
    console.error(error);
    showMenu();
  });
}

module.exports = showMenu;