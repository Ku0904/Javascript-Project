let RandomNumber = parseInt(Math.random() * 100 + 1);
const SubmitButton = document.querySelector("#subt");
const UserInput = document.querySelector("#guessField");
const GuessSlot = document.querySelector(".guesses");
const Remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const StartOver = document.querySelector(".resultParas");
const p = document.querySelector("p");

let PrevGuess = [];
let NumGuess = 1;
let PlayGame = true;

if (PlayGame) {
  SubmitButton.addEventListener("click", function (event) {
    event.preventDefault();
    const guess = parseInt(UserInput.value);
    ValidateGuess(guess);
  });
}

function ValidateGuess(guess) {
  if (isNaN(guess)) {
    alert("please enter a valid number");
  } else if (guess < 1) {
    alert("please enter a number more than 1");
  } else if (guess > 100) {
    alert("please enter a number less than 100");
  } else {
    PrevGuess.push(guess);
    if (NumGuess === 11) {
      DisplayGuess(guess);
      DisplayMessage(`game over. random number was ${RandomNumber}`);
      EndGame();
    } else {
      DisplayGuess(guess);
      CheckGuess(guess);
    }
  }
}
function CheckGuess(guess) {
  if (guess === RandomNumber) {
    DisplayMessage(`you guessed it right`);
    EndGame();
  } else if (guess < RandomNumber) {
    DisplayMessage(`Number is TOO low`);
  } else if (guess > RandomNumber) {
    DisplayMessage(`Number is TOO high`);
  }
}
function DisplayGuess(guess) {
  UserInput.value = "";
  GuessSlot.innerHTML += `${guess} `;
  NumGuess++;
  Remaining.innerHTML = `${11 - NumGuess}`;
}
function DisplayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function EndGame() {
  UserInput.value = "";
  UserInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`;
  StartOver.appendChild(p);
  PlayGame = false;
  NewGame();
}

function NewGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (event) {
    RandomNumber = parseInt(Math.random() * 100 + 1);
    PrevGuess = [];
    NumGuess = 1;
    GuessSlot.innerHTML = "";
    Remaining.innerHTML = `${11 - NumGuess}`;
    UserInput.removeAttribute(`disabled`);
    StartOver.removeChild(p);

    PlayGame = true;
  });
}
