let image = document.getElementById("guess-image");
let button = document.getElementById("play");
let word = document.getElementById("pokemon-name");
let guessed = document.getElementById("guessed-words");

let wordChoices = [
  "bulbasaur",
  "charizard",
  "charmander",
  "eevee",
  "pikachu",
  "squirtle",
];
// function main work staion //

function playGame() {
  // get a random word from the array
  let selectedWord = getWord();

  // display no of letters as blanks of the words selcted
  let hiddenWord = createBlanks(selectedWord);

  //start guessing the words
  checkGuess(selectedWord, hiddenWord);

  // fill blanks
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

  // event function on key up anywhere inside the document.
  document.onkeyup = function (event) {
    // every event is a key pressed
    let userGuess = event.key;
    let userValueArr = userValue.split("");
    let answer = "";

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

// playgame button to start the game//
button.addEventListener("click", function () {
  playGame();
});
