const axios = require("axios");

const url = "https://pokeapi.co/api/v2/pokemon/";

function getTeamMember(id) {
  axios
    .get(`${url}${id}`)
    .then((response) => {
      const value = response.data;
      console.log('pokemon team', renderTeam(value))
    })
    .catch((error) => {
      console.error(error);
    });
}

const pokemonCount = 1000;

function randomId(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function renderTeam (value) {
  const team = [];
  const pokemon = {
    name: value.name,
    id: value.id
  }
  team.push(pokemon)
  return team
}

function pokemonTeam() {
  for (let i = 0; i <= 5; i++) {
    getTeamMember(randomId(1, pokemonCount));
  }
}

module.exports = pokemonTeam;
