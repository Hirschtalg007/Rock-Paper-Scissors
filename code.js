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
  let humanCap = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
  let computerCap = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
  if(humanChoice == "rock" && computerChoice == "scissors"){
    result.textContent = "You win! Rock beats Scissors";
    return ++humanScore
  }
  else if (humanChoice == "paper" && computerChoice == "rock"){
    result.textContent = "You win! Paper beats Rock";
    return ++humanScore
  }
  else if (humanChoice == "scissors" && computerChoice == "paper"){
    result.textContent = "You win! Scissors beats Paper";
    return ++humanScore
  }
  else if (humanChoice == computerChoice){
    result.textContent = `Draw! You and the Computer choose ${humanCap}`;
  }
  else{
    result.textContent = `You lose! ${computerCap} beats ${humanCap}!`
    return ++computerScore
  }
}

/*function playGame(){
  let round = 6;
  
  for(let i = 1 ; i < round ; i++){
    console.log(`Round: ${i}`)
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection)
    console.log(`\nYour Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}\n`);
  }
  if (humanScore > computerScore){
    console.log("Winner, amazing");
  }
  else if (humanScore < computerScore){
    console.log("Looser, try again");
  }
  else{
    console.log("Draw, try again");
  }
}

playGame()*/

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result");

rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
})

paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
})

scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
})