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
console.log(getComputerChoice());