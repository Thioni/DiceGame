// VARIABLES JOUEUR 1

let playerOne = document.getElementById("playerOne");
let playerOnePot = document.getElementById('playerOnePot');
let playerOneTotalScore = document.getElementById('totalScoreOne');

// VARIABLES JOUEUR 2

let playerTwo = document.getElementById("playerTwo");
let playerTwoPot = document.getElementById('playerTwoPot');
let playerTwoTotalScore = document.getElementById('totalScoreTwo');

let playerOneTurn = true;

// VARIABLE D'INTERFACE

let roll = document.getElementById('roll');
let hold = document.getElementById('hold');
let newGame = document.getElementById('newGame');

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
    let myModal = new bootstrap.Modal(document.getElementById('myModal'))
    myModal.show()
    changePlayer()
  }
};

// HOLD

const addToTotal = () => {
  if (playerOneTurn == true) {
  playerOneTotalScore.textContent = parseInt(playerOneTotalScore.textContent) + parseInt(playerOnePot.textContent)
  playerOneTotalScore.textContent >= 100 ? winner(): changePlayer();
  } else {
    playerTwoTotalScore.textContent = parseInt(playerTwoTotalScore.textContent) + parseInt(playerTwoPot.textContent)
    playerTwoTotalScore.textContent >= 100 ? winner(): changePlayer();

  }
};

// WINNER

const winner = () => {
  if (playerOneTotalScore.textContent >= 100) {
    let playerOneWin = new bootstrap.Modal(document.getElementById('playerOneWin'))
    playerOneWin.show()
    startNewGame()
  } else { 
    let playerTwoWin = new bootstrap.Modal(document.getElementById('playerTwoWin'))
    playerTwoWin.show()
    startNewGame()
  }
};

// CHANGEMENT DE JOUEUR

const changePlayer = () => {
  if (playerOneTurn === true) {
    playerOne.classList.remove('active')
    playerTwo.classList.add('active')
    playerOneTurn = !playerOneTurn
    playerOnePot.textContent = 0;
  } else {
    playerTwo.classList.remove('active')
    playerOne.classList.add('active')
    playerOneTurn = !playerOneTurn
    playerTwoPot.textContent = 0;
  }
};

// NEW GAME

const startNewGame = () => {
  playerOnePot.textContent = 0
  playerTwoPot.textContent = 0
  playerOneTotalScore.textContent = 0
  playerTwoTotalScore.textContent = 0
  playerOneTurn = true
  playerTwo.classList.remove('active')
  playerOne.classList.add('active')
};

// EVENTS

roll.addEventListener('click', rollADice);
hold.addEventListener('click', addToTotal);
newGame.addEventListener('click', startNewGame);