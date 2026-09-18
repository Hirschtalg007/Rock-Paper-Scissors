let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    let randNum = Math.floor(Math.random()*3);
    switch(randNum){
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper or Scissors?");
    return humanChoice;
}

function playRound(humanChoice, computerChoice){
  let humanlow = humanChoice.toLowerCase();
  if(humanlow == "rock" && computerChoice == "scissors"){
    return humanScore++, console.log("You win! Rock beats Scissors")
  }
  else if (humanlow == "paper" && computerChoice == "rock"){
    return humanScore++, console.log("You win! Paper beats Rock")
  }
  else if (humanlow == "scissors" && computerChoice == "paper"){
    return humanScore++, console.log("You win! Scissors beats Paper")
  }
  else if (humanlow == computerChoice){
    return console.log(`Draw! You and the Computer choose ${humanChoice}`)
  }
  else{
    return computerScore++, console.log("You lose!")
  }
}

const computerSelection = getComputerChoice();
console.log(computerSelection);
const humanSelection = getHumanChoice();

playRound(humanSelection, computerSelection)

console.log(`Your Score: ${humanScore}`);
console.log(`Computer Score: ${computerScore}`)