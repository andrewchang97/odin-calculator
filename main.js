let displayScreen = "";
function updateDisplay(){
    const displayString = document.querySelector(".numberDisplay")
    displayString.innerHTML = displayScreen
}
let variable = 0;
let operator = "";
let x = "";
let y = 0;
let currentNumber = ""
function clearAll(){
    displayScreen = ""
    variable = ""
    x = ""
    y = ""
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
    // x = variable;
    operator = "+";
    displayScreen += "+"
    updateDisplay();
    x = currentNumber;
    currentNumber = "";

}
function subtract(){
    // x = variable;
    operator = "-"
    displayScreen += "-"
    updateDisplay();
    x = currentNumber;
    currentNumber = ""
}
function multiply(){
    x = variable;
    operator = "*"
    displayScreen += "*"
    updateDisplay();
}
function divide(){
    x = variable;
    operator = "/";
    displayScreen += "/";
    updateDisplay();
}
let answerAdd = 0
function equals(){
    let a = parseInt(x);
    let b = parseInt(currentNumber);
    if (operator = "+"){
        answerAdd = a + b;
        answerDisplay(answerAdd);
    } else if (operator = "-"){
        answerSub = (a - b);
        answerDisplay(answerSub);
    } else if (operator = "*"){
        answerMult = (a*b);
        answerDisplay(answerMult);
    } else if (operator = "/"){
        answerDiv = (a/b);
    } else {
        console.log("error")
    }
}
function answerDisplay(x){
    const answerString = document.querySelector(".numberDisplay")
    answerString.innerHTML = x;
}
// const add = function(x,y) {
// 	let answerAdd = x + y;
//   return answerAdd;
// };

// const subtract = function(x,y) {
// 	let answerSubt = x - y;
//   return answerSubt;
// };