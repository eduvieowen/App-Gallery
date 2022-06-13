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


