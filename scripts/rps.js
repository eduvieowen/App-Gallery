// --rock paper scissors

const compChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('rsp-result')
console.log(resultDisplay);

const possibleChoices = document.querySelectorAll('.rpsButton')

let userChoice
let compChoice
let results

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', function(event) {
   userChoice = event.target.id
   userChoiceDisplay.innerHTML = userChoice
   compChoiceGen ()
   getRes()
}));

function compChoiceGen() {
    const rand = Math.floor(Math.random() * 3)
    console.log(rand);
    if (rand === 0) {
        compChoice = 'rock'
    }
    if (rand === 1) {
        compChoice = 'paper'
    }
    if (rand === 2) {
        compChoice = 'scissors'
    }
    compChoiceDisplay.innerHTML = compChoice
}

function getRes() {
    if (compChoice === userChoice) {
        results = "it's a draw"
    }
    
    if (compChoice === 'rock' && userChoice === 'paper') {
        results = "you win :)"
    }
    if (compChoice === 'paper' && userChoice === 'rock') {
        results = "you loose :("
    }

    if (compChoice === 'rock' && userChoice === 'scissors') {
        results = "you loose :("
    }
    if (compChoice === 'scissors' && userChoice === 'rock') {
        results = "you win :)"
    }

    if (compChoice === 'scissors' && userChoice === 'paper') {
        results = "you loose :("
    }
    if (compChoice === 'paper' && userChoice === 'scissors') {
        results = "you win :)"
    }

    resultDisplay.innerHTML = results
}