let image = document.getElementById("guess-image");
let button = document.getElementById("play");
let selectedWord = "";
let wordChoices = [
  "bulbasaur",
  "charizard",
  "charmander",
  "eevee",
  "pikachu",
  "squirtle",
];

// function to select random word to be guessed and select the respected image

function wordSelect() {
  let index = Math.floor(Math.random() * wordChoices.length);
  selectedWord = wordChoices[index];
  console.log(selectedWord);
  image.src = "./assets/images/" + selectedWord + ".jpeg";
}

button.addEventListener("click", function () {
  wordSelect();
});
