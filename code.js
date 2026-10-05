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

function checkWin(){
  let i = 5;

  if(humanScore >= i){
    const end = document.createElement("div");
    document.body.appendChild(end);
    end.textContent = "You won with a score of " + humanScore + " against a Score of the Computer with " + computerScore + ".";

    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }
  else if(computerScore >= i){
    const end = document.createElement("div");
    document.body.appendChild(end);
    end.textContent = "You lost with a score of " + humanScore + " against a Score of the Computer with " + computerScore + ".";

    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }
}

function playRound(humanChoice, computerChoice){
  let humanCap = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
  let computerCap = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
  const result = document.querySelector("#result");

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

function playGame(){
  const rundeAnz = document.createElement("div");
  const humanAnz = document.createElement("div");
  const compAnz = document.createElement("div");

  let runde = 1;

  document.body.appendChild(rundeAnz);
  document.body.appendChild(humanAnz);
  document.body.appendChild(compAnz);

  const rock = document.querySelector("#rock");
  const paper = document.querySelector("#paper");
  const scissors = document.querySelector("#scissors");

  rundeAnz.textContent = "Round: " + runde; //Hier einmal angefuehrt, dass Startanzeige stimmt
  humanAnz.textContent = "Your Score: " + humanScore; //Hier einmal angefuehrt, dass Startanzeige stimmt
  compAnz.textContent = "Computer Score: " + computerScore; //Hier einmal angefuehrt, dass Startanzeige stimmt

  rock.addEventListener("click", () => {
  rundeAnz.textContent = "Round: " + runde;
  humanAnz.textContent = "Your Score: " + humanScore;
  compAnz.textContent = "Computer Score: " + computerScore;
  runde++;
  playRound("rock", getComputerChoice());
  checkWin();
  })

  paper.addEventListener("click", () => {
  rundeAnz.textContent = "Round: " + runde;
  humanAnz.textContent = "Your Score: " + humanScore;
  compAnz.textContent = "Computer Score: " + computerScore;
  runde++;
  playRound("paper", getComputerChoice());
  checkWin();
  })

  scissors.addEventListener("click", () => {
  rundeAnz.textContent = "Round: " + runde;
  humanAnz.textContent = "Your Score: " + humanScore;
  compAnz.textContent = "Computer Score: " + computerScore;
  runde++;
  playRound("scissors", getComputerChoice());
  checkWin();
  })
  }

playGame()