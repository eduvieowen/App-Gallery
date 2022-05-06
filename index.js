// 🐱‍👤🐱‍🐉🐱‍🚀🐱‍👓🧛‍♂️👨‍💻🕴🤙🤸‍♂️

// -- WELCOME MESSAGE
// let name = "Ed "
// let greeting = "Welcome back, "

// function welcome() {
//     document.getElementById("welcome-el").textContent = greeting + name + '🧛‍♂️'
// }
// welcome()

// -- PEOPLE COUNTER
let count = 0
console.log("Intial count " + count)

function increment() {
    count += 1
    document.getElementById("count-el").textContent = count
    console.log("Increment Button Clicked - Value = " + count)
}
// decrement button
// let countDcr = count -= 1
// // console.log("Decrement Count = " + countDcr);
// // decrement btn
// function decrement() {
//     document.getElementById("count-el").textContent = countDcr
//     console.log("Decrement Button Clicked - Value = " + countDcr)
// }
function save() {
    let countStr = count + " - "
    document.getElementById("log").textContent += countStr
    count = 0
    document.getElementById("count-el").textContent = 0   
}
function reset() {
    document.getElementById("log").textContent = " "
}
// -- end

// -- ERROR BUTTON
function error() {
    console.log("R2-D2 says: ERROR");
    document.getElementById("error-par").textContent = "Contact Admin" 
    alert("Something went wrong, please try again")
}
// --end

// -- CALCULATOR
let num1 = 1
let num2 = 2
let num3 = 0
function add() {
    let add = num1 + num2
    console.log("Result of Addition:" + add);
    document.getElementById("num1").textContent = num1
    document.getElementById("num2").textContent = num2
    document.getElementById("num3").textContent = add
}
function sub() {
    let sub = num1 - num2
    console.log("Result of Addition:" + sub);
    document.getElementById("num1").textContent = num1
    document.getElementById("num2").textContent = num2
    document.getElementById("num3").textContent = sub
}
function mul() {
    let mul = num1 * num2
    console.log("Result of Addition:" + mul);
    document.getElementById("num1").textContent = num1
    document.getElementById("num2").textContent = num2
    document.getElementById("num3").textContent = mul
}
function div() {
    let div = num1 / num2
    console.log("Result of Addition:" + div);
    document.getElementById("num1").textContent = num1
    document.getElementById("num2").textContent = num2
    document.getElementById("num3").textContent = div
}
function res() {
    document.getElementById("num1").textContent = 0
    document.getElementById("num2").textContent = 0
    document.getElementById("num3").textContent = 0
}
// --end

// -- BLACKJACK
let firstCard = 1
let secondCard = 5
var newC
let total = firstCard + secondCard

function renderGame () {
    const gameContainer = document.querySelector('#gameContainer')
    // const startButton = document.querySelector('#startButton')
    
    if (gameContainer.classList.contains("hidden"))
    {
        gameContainer.classList.remove("hidden");
        document.getElementById("startButton").textContent = "RESTART GAME"
        document.getElementById("startButton").classList.replace("bg-green-600", "bg-red-600")
    } 
    else 
    {
        // gameContainer.classList.add("hidden")
    }
}

document.getElementById("firstCard").textContent += firstCard
document.getElementById("secondCard").textContent += secondCard

// function card1() {
//     document.getElementById("firstCard").textContent = firstCard
// }
// function card2() {
//     document.getElementById("secondCard").textContent = secondCard
// }
function newCard() {
    newC = 1
    total += newC

    document.getElementById("newCard").textContent += newC + " - "
}
function sum() {
    document.getElementById("sumContent").textContent = total
}
function result() {
    if (total < 21) 
    {
        document.getElementById("resultMessage").classList.remove("hidden")
        document.getElementById("resultMessage").textContent = " Do you want to draw a new card?"

        const options = document.querySelector("#options")

        if (options.classList.contains("hidden")) {
            options.classList.remove("hidden")
        } 
        else 
        {
            options.classList.add("hidden")
        }

    } else if (total === 21) {
        document.getElementById("resultMessage").classList.remove("hidden")
        document.getElementById("resultMessage").textContent = "🎊 BlackJack! 🎊"
        hasBlackJack = true
    } 
    else 
    {
        document.getElementById("resultMessage").classList.remove("hidden")
        document.getElementById("resultMessage").textContent = "You're out of the game :("
        isAlive = false
    }
}
function yesFunction() {
    document.getElementById("options").classList.add("hidden")
    document.getElementById("resultMessage").classList.add("hidden")
    const newCardContainer = document.querySelector("#newCard")

    if (newCardContainer.classList.contains("hidden"))
    {
        newCardContainer.classList.remove("hidden")
    }
    // else
    // {
    //     newCardContainer.classList.add("hidden")
    // }
}

// const optionsContainer = document.querySelector("#result");
// const options = document.querySelector("#options");

// optionsContainer.addEventListener("click", function (){
//     if (options.classList.contains("hidden")) {
//         options.classList.remove("hidden");
//     } 
//     else 
//     {
//         options.classList.add("hidden");
//     }
    
// })