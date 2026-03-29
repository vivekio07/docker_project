const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerdisplay');
const computerDisplay = document.getElementById('computerdisplay');
const resultDisplay = document.getElementById('resultdisplay');
const playerscore = document.getElementById('playerscore');
const computerscore = document.getElementById('computerscore');
let playerScore = 0;
let computerScore = 0;

function playgame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "You win!";
    playerScore++;
  } else {
    result = "You lose!";
    computerScore++;
  }

  // Update displays
  playerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;
  playerscore.textContent = `Player Score: ${playerScore}`;
  computerscore.textContent = `Computer Score: ${computerScore}`;

  resultDisplay.classList.remove("green-text", "red-text");

  // Change result color
  switch (result) {
    case "You win!":
      resultDisplay.classList.add("green-text");
      break;
    case "You lose!":
      resultDisplay.classList.add("red-text");
      break;

  }
}
