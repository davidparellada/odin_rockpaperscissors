function getComputerChoice() {
  let rand = Math.random() * 3;
  let computerChoice;

  if (rand < 1) {
    computerChoice = "rock";
  } else if (rand < 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("What do you want to play?").toLowerCase();
  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    let message;

    if (humanChoice == computerChoice) {
      message = "It's a tie";
    } else if (
      (humanChoice == "rock" && computerChoice == "scissors") ||
      (humanChoice == "paper" && computerChoice == "rock") ||
      (humanChoice == "scissors") & (computerChoice == "paper")
    ) {
      message = `It's a win. ${humanChoice} beats ${computerChoice}`;
      humanScore++;
    } else {
      message = `It's a loss. ${humanChoice} loses to ${computerChoice}`;
      computerScore++;
    }

    console.log(message);
    console.log(
      `Current score: Human ${humanScore} - ${computerScore} Computer`
    );
  }

  for (let round = 0; round < 5; round++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  if (humanScore > computerScore) {
    console.log("Human won");
  } else {
    console.log("Computer won");
  }
}

playGame();
