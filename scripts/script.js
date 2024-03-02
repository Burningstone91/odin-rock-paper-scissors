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
  
  console.log(roundMessage);
  updateScoreboard(winner);
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






function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, Paper or Scissors)", "").toLowerCase();
    let computerSelection = getComputerChoice();
    let winner = calculateWinner(playerSelection, computerSelection);

    if (winner == "player") {
      playerScore += 1;
    } else if (winner == "computer") {
      computerScore += 1;
    }

    console.log(playRound(playerSelection, computerSelection));
  }

  if (playerScore > computerScore) {
    console.log("You Won!");
  } else if (playerScore < computerScore) {
    console.log("You Lose!");
  } else {
    console.log("Tie!");
  }

  console.log("Final Score: You: " + playerScore + " / Computer: " + computerScore);
  
}

//console.log(playGame());