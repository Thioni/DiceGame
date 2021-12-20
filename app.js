// VARIABLES JOUEUR 1

let playerOne = document.getElementById("playerOne");
let playerOnePot = document.getElementById('playerOnePot');

// VARIABLES JOUEUR 2
let playerTwo = document.getElementById("playerTwo");
let playerTwoPot = document.getElementById('playerTwoPot');

let playerOneTurn = true;

// VARIABLE D'INTERFACE

let roll = document.getElementById('roll');

// FACES DU DÉ

let dice = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

// ROLL

const rollADice = () => {
  let diceResult = Math.floor(Math.random() * 6) + 1;
  document.getElementById('die').src= dice[diceResult -1];

  if (diceResult > 1 && playerOneTurn === true) {
    playerOnePot.textContent = parseInt(playerOnePot.textContent) + diceResult
  } else if (diceResult > 1 && playerOneTurn === false) {
    playerTwoPot.textContent = parseInt(playerTwoPot.textContent) + diceResult
  } else {
    playerOnePot.textContent = 0
    playerTwoPot.textContent = 0
  }
};

// EVENTS

roll.addEventListener('click', rollADice);