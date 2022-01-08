const pick = {1:"rock" , 2:"paper", 3:"scissors"}

function computerPlay (){
    let randNum = Math.floor(Math.random()*3)+1;
    return pick[randNum]
}
function game (){
    let computerScore = 0;
    let playerScore = 0; 
    for (let i =0; i<5; i++){
function playRound(playerSelection, computerSelection){
    if (playerSelection == "scissors" && computerSelection =="paper"){
        playerScore ++
        return `You Won! ${playerSelection} beats ${computerSelection}`
    }
    if (playerSelection == "paper" && computerSelection =="rock"){
        playerScore ++
        return `You Won! ${playerSelection} beats ${computerSelection}`
    }
    
    if (playerSelection == "rock" && computerSelection =="scissors"){
        playerScore ++
        return `You Won! ${playerSelection} beats ${computerSelection}`
    }
    if (playerSelection == computerSelection)
    { return `its a tie ${playerSelection} ${computerSelection}`}
    else {
        computerScore ++
        return `You Lose ${computerSelection} beats ${playerSelection}`
    }
}

const playerSelection = prompt('Please, pick one Rock, Paper, Scissors').toLowerCase()
const computerSelection = computerPlay()

console.log(playRound(playerSelection, computerSelection)) } 
if (computerScore>playerScore){return `You lose ${computerScore} to ${playerScore}`}
else {
    return `You won ${playerScore} to ${computerScore}`
}
}