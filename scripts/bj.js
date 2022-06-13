// -- BLACKJACK
let firstCard = 10 + Math.random()
let secondCard = 0
let newC
let total = firstCard + secondCard

const gameContainer = document.querySelector('#gameContainer')
const startButton = document.querySelector('#startButton')
const restartButton = document.querySelector('#restartButton')

const options = document.querySelector("#options")
const optionsTwo = document.querySelector("#optionsTwo")
const newCardContainer = document.querySelector("#newCard")
const sumContent = document.getElementById("sumContent")

let cardOne = document.getElementById("cOne")
let cardTwo = document.getElementById("cTwo")

let resContainer = document.getElementById("result")
let resMes = document.getElementById("resultMessage")

let cards = [
    firstCard,
    secondCard
]


//starts the game
function renderGame () {
  
    cardOne.textContent = cards[0]
    cardTwo.textContent = cards[1]
    
    if (gameContainer.classList.contains("hidden"))
    {
        gameContainer.classList.remove("hidden");
        startButton.classList.add("hidden")
        restartButton.classList.remove("hidden")
    } 
    else 
    {
        gameContainer.classList.add("hidden")
        startButton.classList.remove("hidden")
        restartButton.classList.add("hidden")

    }
}
// function restartGame() {
    
//     cardOne.textContent = cards[0]
//     cardTwo.textContent = cards[1]
    
//     cards = [
//         firstCard,
//         secondCard
//     ]

//     total = firstCard + secondCard
    
//     if (startButton.classList.contains("hidden"))
//     {
//         gameContainer.classList.add("hidden");
//         restartButton.classList.add("hidden")
//         startButton.classList.remove("hidden")

//         newCardContainer.textContent = ""
//         newCardContainer.classList.add("hidden")
//         sumContent.innerText = ""

//     } 
//     else 
//     {
//         gameContainer.classList.remove("hidden")
//         startButton.classList.add("hidden")

//     }
// }

function sum() {

    console.log(total);
    sumContent.textContent = total
}
function result() {
    if (total <= 20) 
    {
        resContainer.classList.remove("hidden")
        resMes.textContent = "Do you want to draw a new card?"

    } 
    else if (total === 21) 
    {
        resContainer.classList.remove("hidden")
        options.classList.add("hidden")
        resMes.textContent = "🎊 BlackJack! 🎊"
        // hasBlackJack = true
    } 
    else
    {
        resContainer.classList.remove("hidden")
        options.classList.add("hidden")
        resMes.textContent = "You're out of the game :("
        // isAlive = false
    }

}
function yesFunction() {

    resContainer.classList.add("hidden")
    newCardContainer.classList.remove("hidden")

}
function noFunction() {
    
    resMes.textContent = "Hand In?"
    options.classList.add("hidden")
    optionsTwo.classList.remove("hidden")

}

function yesFunctionTwo() {

    if (total <= 20)
    {
        optionsTwo.classList.add("hidden")
        resMes.textContent = "Total less than 21. You're out of the game :("
        sum()
    }
    else if (total === 21)
    {
        optionsTwo.classList.add("hidden")
        resMes.textContent = "🎊 BlackJack! 🎊"
        sum()
    } 
    else
    {
        optionsTwo.classList.add("hidden")
        resMes.textContent = "You're out of the game :("
        sum()
    }
}
function newCard() {
    
    newC = 20
    total += newC
    cards.push(newC)
    
    newCardContainer.textContent += newC + " - "
}