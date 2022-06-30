let g1 = document.querySelector("#g1");
let g2 = document.querySelector("#g2");
let g3 = document.querySelector("#g3");
let result = Math.floor(Math.random() * 100) + 1;

let guesses = 0;
let guessCount = [];
let resetButton;

function play() {
  let userGuess = document.querySelector("#guess").value;
  if (userGuess < 1 || userGuess > 100) {
    alert("Enter a number between 1 to 100");
  } else {
    guessCount.push(userGuess);
    guesses = guesses + 1;
    if (userGuess < result) {
      g1.textContent = "Raise Your Guess";
      g2.textContent = "Number Of Guesses : " + guesses;
      g3.textContent = "Guessed Numbers are : " + guessCount;
    } else if (userGuess > result) {
      g1.textContent = "Reduce Your Guess";
      g2.textContent = "Number Of Guesses : " + guesses;
      g3.textContent = "Guessed Numbers are : " + guessCount;
    } else if (userGuess == result) {
      g1.textContent = "PERFECT DIRECT HIT!";
      g2.textContent = "The number is : " + result;
      g3.textContent = "You Guessed With The Number " + result;
    }
  }
  if (guesses == 5 && userGuess != result) {
    g1.textContent = "Sorry You Lost , Let's Try Again!";
  }
}
