const btns = document.querySelectorAll("button");
const results = document.querySelector("#results");
results.style.whiteSpace = "pre";
results.style.marginTop = "30px";
// CHOICE LOGIC ////////
///////////////////////
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

// PLAY ////////
///////////////////////
for (const btn of btns) {
  btn.choice = btn.textContent;
  btn.addEventListener("click", playRound, false);
}

let humanScore = 0;
let computerScore = 0;

function playRound(e) {
  results.textContent = "";
  let message;
  const computerChoice = getComputerChoice();
  const humanChoice = e.currentTarget.choice;

  if (humanChoice == computerChoice) {
    message = "It's a tie";
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    message = `It's a win. ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else {
    message = `It's a loss. ${humanChoice} loses to ${computerChoice}`;
    computerScore++;
  }

  message += `\n\nCurrent score: Human ${humanScore} - ${computerScore} Computer`;
  if (computerScore == 5 || humanScore == 5) {
    for (const btn of btns) {
      btn.choice = btn.textContent;
      btn.removeEventListener("click", playRound, false);
    }

    computerScore > humanScore
      ? (message += "\nComputer wins the game.")
      : (message += "\nPlayer wins the game.");
  }
  results.textContent += message;
}
