const pokemon20Names = require('./ejercicioUno');
const pokemonSearchName = require('./ejercicioDos');
const pokemonTeam = require('./ejercicioTres');
const pokemonMoves = require('./ejercicioCuatro');
const showMenu = require('./ejercicioCinco');

let readlineSync = require('readline-sync');
let question = readlineSync.question('Insert a pokemon name: ');

pokemon20Names();
pokemonSearchName(question)
pokemonTeam()
pokemonMoves(question)
showMenu();