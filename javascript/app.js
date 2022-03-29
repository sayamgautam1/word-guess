let image = document.getElementById("guess-image");
let button = document.getElementById("play");
let word = document.getElementById("pokemon-name");
let guessed = document.getElementById("guessed-words");
let result = document.getElementById("result");
let gameTime = 20;
let timerInterval;
let countdown = document.getElementById("countdown");
let win = localStorage.getItem("win");
let loss = localStorage.getItem("loss");
let playerWin = document.getElementById("player-win");
let playerLoss = document.getElementById("player-loss");
let reset = document.getElementById("reset");

let wordChoices = [
  "bulbasaur",
  "charizard",
  "charmander",
  "eevee",
  "pikachu",
  "squirtle",
  "dragonite",
  "tyranitar",
  "metagross",
  "arcanine",
  "mewtwo",
];
// function main work staion //

function playGame() {
  win = localStorage.getItem("win");
  loss = localStorage.getItem("loss");
  // get a random word from the array
  let selectedWord = getWord();

  // display no of letters as blanks of the words selcted
  let hiddenWord = createBlanks(selectedWord);

  //start guessing the words
  checkGuess(selectedWord, hiddenWord);

  //check if won in the said interval
  gameTime = 20;
}

//fucntion to generate random word from the provided words
function getWord() {
  let index = Math.floor(Math.random() * wordChoices.length);
  let takenWord = wordChoices[index];
  image.src = "./assets/images/" + takenWord + ".jpeg";
  return takenWord;
}

// function to generate no of blanks as the selcted word

function createBlanks(guessWord) {
  //split the word into an array of characters
  let wordsArr = guessWord.split("");
  //add - - for display
  let displayArr = [];
  for (i = 0; i < wordsArr.length; i++) {
    displayArr.splice(i, 0, " _ ");
  }
  word.innerHTML = displayArr.join("");
  return displayArr;
}

//function to guess the selected word

function checkGuess(userValue, blanks) {
  let guesses = [];
  let guessedLetters = "";
  let answer = "";

  // event function on key up anywhere inside the document.
  document.onkeyup = function (event) {
    // every event is a key pressed
    let userGuess = event.key;
    let userValueArr = userValue.split("");

    // const matches = userValue.matchAll(userGuess)
    // for (let match of matches) {
    //     guesses[match.index] = userGuess
    // }

    for (i = 0; i < userValue.length; i++) {
      if (userGuess === userValueArr[i]) {
        // blanks.splice(i, 1, userGuess);
        blanks[i] = userGuess;
      }
    }

    answer = blanks.join("");
    word.innerHTML = answer;

    guesses.push(userGuess);
    guessedLetters = guesses.join(",");
    guessed.innerText = guessedLetters;

    if (answer === userValue) {
      clearInterval(timerInterval);
      win++;
      countdown.innerText = "Congratulations you win!!";
      playerWin.innerText = win;
      localStorage.setItem("win", win);
    }

    // if (wordIndex !== 1 && userValue.includes(userGuess)) {
    //   blanks.splice(wordIndex, 1, userGuess);
    //   answer = blanks.join("");
    //   word.innerHTML = answer;
    // } else {
    //   guesses.push(userGuess);
    // }
    // guessedWords = guesses.join(",");
    // guessed.innerHTML = guessedWords;
  };
}

// function to set interval of the game

function setTime() {
  // Sets interval in variable
  timerInterval = setInterval(function () {
    gameTime--;
    countdown.textContent = gameTime + " seconds remaining.";

    if (gameTime === 0) {
      // Stops execution of action at set interval

      clearInterval(timerInterval);
      loss++;
      countdown.innerText = "Sorry Times up!!";
      playerLoss.innerText = loss;
      localStorage.setItem("loss", loss);
    }
  }, 1000);
}

// playgame button to start the game//
button.addEventListener("click", function () {
  playGame();
  if (timerInterval) {
    clearInterval(timerInterval);
    setTime();
  } else {
    setTime();
  }
});

//reset local storage memory
function resetValues() {
  localStorage.setItem("win", 0);
  localStorage.setItem("loss", 0);
  win = 0;
  loss = 0;

  playerLoss.innerText = 0;
  playerWin.innerText = 0;
  countdown.innerHTML = "Click Play to Begin";
  image.src = "./assets/images/pokemon.jpeg";
  word.innerHTML = "";
  guessed.innerHTML = "";
  clearInterval(timerInterval);
}

reset.addEventListener("click", function () {
  resetValues();
});
