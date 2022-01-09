const scissors = document.querySelector('#scissors')
const paper = document.querySelector('#paper')
const rock = document.querySelector('#rock')
const update = document.querySelector('.update')
const playerScore1 = document.querySelector('.playerScore1')
const computerScore1 = document.querySelector('.computerScore1')
let playerSelection = 'nothing'

rock.addEventListener('click', ()=> {
     playerSelection = 'rock'
    game()
})
paper.addEventListener('click', ()=> {
    playerSelection = 'paper'
    game()
})
scissors.addEventListener('click', ()=> {
    playerSelection = 'scissors'
   game()
})

const pick = {1:"rock" , 2:"paper", 3:"scissors"}

function computerPlay (){
    let randNum = Math.floor(Math.random()*3)+1;
    return pick[randNum]
}
let computerScore = 0;
let playerScore = 0; 

function game (){
    
    function playRound(playerSelection, computerSelection){ 
    if (playerSelection == "scissors" && computerSelection =="paper"){
        playerScore ++
        update.innerText = `You Won! this round ${playerSelection} beats ${computerSelection}`
        return playerScore1.innerText = playerScore
    }
    if (playerSelection == "paper" && computerSelection =="rock"){
        playerScore ++
        update.innerText = `You Won! this round ${playerSelection} beats ${computerSelection}`
        return playerScore1.innerText = playerScore
    }
    
    if (playerSelection == "rock" && computerSelection =="scissors"){
        playerScore ++
        update.innerText = `You Won! this round ${playerSelection} beats ${computerSelection}`
        return playerScore1.innerText = playerScore
    }
    if (playerSelection == computerSelection)
    { update.innerText = `its a tie ${playerSelection} ${computerSelection}`}
    else {
        computerScore ++
        update.innerText = `You Lose this round ${computerSelection} beats ${playerSelection}`
        return computerScore1.innerText = computerScore
    }
    }
    const computerSelection = computerPlay()
    playRound(playerSelection, computerSelection)
    if (computerScore ==5){
        rock.disabled = true
        paper.disabled = true
        scissors.disabled = true
        return update.innerText='You Lost the computer got to 5 first'
        }
    if (playerScore ==5){
        rock.disabled = true
        paper.disabled = true
        scissors.disabled = true
        return update.innerText='You won! you got to 5 first'
        }
 } 
// if (computerScore>playerScore){
//     return `You lose ${computerScore} to ${playerScore}`}
// else {
//     return `You won ${playerScore} to ${computerScore}`
// }
