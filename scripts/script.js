const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
let playerScore = 0;
let computerScore = 0;
const paraPlayerScore = document.querySelector(".playerScore");
const paraComputerScore = document.querySelector(".computerScore");

rockBtn.addEventListener("click", function() {
  playRound("rock", getComputerChoice());
})

paperBtn.addEventListener("click", function() {
  playRound("paper", getComputerChoice());
})

scissorsBtn.addEventListener("click", function() {
  playRound("scissors", getComputerChoice());
})



function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * 3)
  return choices[random]
}

function calculateWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "tie";
  } else if ((playerSelection == "rock" && computerSelection == "scissors") ||
      (playerSelection == "paper" && computerSelection == "rock") ||
      (playerSelection == "scissors" && computerSelection == "paper")) {
    return "player";
  } else {
    return "computer";
  }
}

function playRound(playerSelection, computerSelection) {
  let winner = calculateWinner(playerSelection, computerSelection);
  if (winner == "player") {
    roundMessage = "You Won! " + capitalize(playerSelection) +
     " beats " + capitalize(computerSelection)
  } else if (winner == "computer") {
    roundMessage = "You Lose! " + capitalize(computerSelection) +
     " beats " + capitalize(playerSelection)
  } else {
    roundMessage = "Tie! Both had " + capitalize(playerSelection) 
  }
  
  alert(roundMessage);
  updateScoreboard(winner);
  checkGameStatus();
}

function capitalize (str) {
  return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1) 
}

function updateScoreboard(winner) {
  if (winner == "computer") {
    computerScore += 1;
  } else if (winner == "player") {
    playerScore += 1;
  }
  paraPlayerScore.textContent = "Player Score: " + playerScore;
  paraComputerScore.textContent = "Computer Score: " + computerScore;
}

function checkGameStatus() {
  if (playerScore == 5) {
    alert("You won!")
    resetGame();
  } else if (computerScore == 5) {
    alert("You Lost")
    resetGame();
  }

}

function resetGame() {
  paraPlayerScore.textContent = "Player Score: 0";
  paraComputerScore.textContent = "Computer Score: 0";
}