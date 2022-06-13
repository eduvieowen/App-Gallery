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
