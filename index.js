// CHECK why this gives errors 
// let countEl = document.getElementById("count-el")
// console.log(count-el)

// 🐱‍👤🐱‍🐉🐱‍🚀🐱‍👓🧛‍♂️👨‍💻🕴🤙🤸‍♂️

let name = "Ed "
let greeting = "Welcome back, "

// function welcome() {
//     document.getElementById("welcome-el").textContent = greeting + name + '🧛‍♂️'
// }
// welcome()

let count = 0
// terminal log
console.log("Intial count " + count)

// increment btn
function increment() {
    count += 1
    document.getElementById("count-el").textContent = count
    console.log("Increment Button Clicked - Value = " + count)
}

// save btn / reset count
function save() {
    let countStr = count + " - "
    document.getElementById("log").textContent += countStr
    count = 0
    document.getElementById("count-el").textContent = 0   
}

// reset entries
function reset() {
    document.getElementById("log").textContent = " "
}

let myPoints = 3
function add3Points() {
    myPoints += 3
    console.log(myPoints);
}
function remove1Point() {
    myPoints -= 1
    console.log(myPoints);
}

add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()

function error() {
    console.log("R2-D2 says: ERROR");
    document.getElementById("error-par").textContent = "Contact Admin" 
    alert("Something went wrong, please try again")
}
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
// decrement button
// let countDcr = count -= 1
// // console.log("Decrement Count = " + countDcr);
// // decrement btn
// function decrement() {
//     document.getElementById("count-el").textContent = countDcr
//     console.log("Decrement Button Clicked - Value = " + countDcr)
// }