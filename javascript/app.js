let image = document.getElementById("guess-image");
let button = document.getElementById("play");
let word = document.getElementById("pokemon-name");

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
  console.log(selectedWord);

  let wordLength = selectedWord.length;

  startGuess(selectedWord);
}

//fucntion to generate random word from the provided words
function getWord() {
  let index = Math.floor(Math.random() * wordChoices.length);
  let takenWord = wordChoices[index];
  image.src = "./assets/images/" + takenWord + ".jpeg";
  return takenWord;
}

//function to guess the selected word

function startGuess(guessWord) {
  //split the word into an array of characters
  let wordsArr = guessWord.split("");
  //add - - for display
  let displayArr = [];
  for (i = 0; i < wordsArr.length; i++) {
    displayArr.splice(i, 0, " _ ");
  }
  word.innerHTML = displayArr.join("");
}
// playgame button to start the game//
button.addEventListener("click", function () {
  playGame();
});
