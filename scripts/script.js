function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const random = Math.floor(Math.random() * 3)
  return choices[random]
}

let playerSelection = "rock"
let computerSelection = getComputerChoice();

function calculateWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "tie";
  } else if ((playerSelection == "rock" && computerSelection == "scissor") ||
      (playerSelection == "paper" && computerSelection == "rock") ||
      (playerSelection == "scissor" && computerSelection == "paper")) {
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
  } else if (winner =="computer") {
    roundMessage = "You Lose! " + capitalize(computerSelection) +
     " beats " + capitalize(playerSelection)
  } else {
    roundMessage = "Tie! Both had " + FirstLetter(playerSelection) 
  }
  
  return roundMessage;
}