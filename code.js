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
    console.log("You win! Rock beats Scissors");
    return ++humanScore
  }
  else if (humanlow == "paper" && computerChoice == "rock"){
    console.log("You win! Paper beats Rock");
    return ++humanScore
  }
  else if (humanlow == "scissors" && computerChoice == "paper"){
    console.log("You win! Scissors beats Paper");
    return ++humanScore
  }
  else if (humanlow == computerChoice){
    console.log(`Draw! You and the Computer choose ${humanChoice}`)
  }
  else{
    console.log(`You lose! ${computerUp} beats ${humanChoice}!`);
    return ++computerScore
  }
}

function playGame(){
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

playGame()