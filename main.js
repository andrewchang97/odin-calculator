let displayScreen = "";
function updateDisplay(){
    const displayString = document.querySelector(".numberDisplay")
    displayString.innerHTML = displayScreen
}
let variable = 0;
let operator = "";
let x = "";
let currentNumber = ""
function clearAll(){
    displayScreen = ""
    variable = ""
    x = ""
    operator = ""
    a = ""
    b = ""
    currentNumber = ""
    updateDisplay()
}
function one(){
    displayScreen +="1"
    currentNumber +="1"
    updateDisplay();
}
function two(){
    displayScreen +="2"
    currentNumber +="2"
    updateDisplay();
}
function three(){
    displayScreen +="3"
    currentNumber +="3"
    updateDisplay();
}
function four(){
    displayScreen +="4"
    currentNumber +="4"
    updateDisplay();
}
function five(){
    displayScreen +="5"
    currentNumber +="5"
    updateDisplay()
}
function six(){
    displayScreen +="6"
    currentNumber +="6"
    updateDisplay();
}
function seven(){
    displayScreen +="7"
    currentNumber +="7"
    updateDisplay();
}
function eight(){
    displayScreen +="8"
    currentNumber +="8"
    updateDisplay();
}
function nine(){
    displayScreen +="9"
    currentNumber +="9"
    updateDisplay();
}
function zero(){
    displayScreen +="0"
    currentNumber +="0"
    updateDisplay();
}
function add(){
    operator = "+";
    displayScreen += "+"
    updateDisplay();
    x = currentNumber;
    currentNumber = "";
}
function subtract(){
    operator = "-"
    displayScreen += "-"
    updateDisplay();
    x = currentNumber;
    currentNumber = ""
}
function multiply(){
    operator = "*"
    displayScreen += "*"
    updateDisplay();
    x = currentNumber;
    currentNumber = ""
}
function divide(){
    operator = "/";
    displayScreen += "/";
    updateDisplay();
    x = currentNumber;
    currentNumber = ""
}
let answerAdd = 0
let answerSub = 0
let answerMult = 0
let answerDiv = 0

function equals(){
    let a = parseInt(x);
    let b = parseInt(currentNumber);
    if (isNaN(b)){
        alert("The problem isn't complete. Try again!")
    } else {
        if (operator === "+"){
            answerAdd = (a + b);
            answerDisplay(answerAdd);
        } else if (operator === "-"){
            answerSub = (a - b);
            answerDisplay(answerSub);
        } else if (operator === "*"){
            answerMult = (a*b);
            answerDisplay(answerMult);
        } else if (operator === "/"){
            if (b === 0){
                alert("You cannot divide by zero!")
            } else {
            answerDiv = a / b;
            answerDisplay(Math.round(answerDiv * 100) / 100);
            }
        } else {
            console.log("error")
        }
    }
}
function answerDisplay(z){
    const answerString = document.querySelector(".numberDisplay")
    answerString.innerHTML = z;
}
// const add = function(x,y) {
// 	let answerAdd = x + y;
//   return answerAdd;
// };

// const subtract = function(x,y) {
// 	let answerSubt = x - y;
//   return answerSubt;
// };