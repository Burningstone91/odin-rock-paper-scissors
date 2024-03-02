function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const random = Math.floor(Math.random() * 3)
  return choices[random]
}

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

function capitalize (str) {
  let firstLetter = str.charAt(0);
  let remainingString = str.slice(1);
  return firstLetter.toUpperCase() + remainingString.toLowerCase();
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