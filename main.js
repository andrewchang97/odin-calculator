let displayScreen = "";
function updateDisplay(){
    const displayString = document.querySelector(".numberDisplay")
    displayString.innerHTML = displayScreen
}
let variable = 0;
let operator = ""; //decides which function to use in calculation
let x = ""; //x is the first variable in the calculation
let currentNumber = "" //current number is the number that the user is editing at any moment
let i = 0; //i will decide if it's the first calculation in the session
let j = 0; //j will decide if there are multiple calculations on the screen
let k = 0; //k will decide where the back button works
let l = 0; //l will also decide where back button works
function clearAll(){ //will clear all variables in the calculator, as if it's been refreshed
    displayScreen = ""
    variable = ""
    x = ""
    operator = ""
    a = ""
    b = ""
    i = 0
    j = 0
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
function decimal(){
    displayScreen +="."
    currentNumber +="."
    updateDisplay();
}
function add(){ //function for the add button. If adding, it switches operator to + and current number is put to the x variable.
    //when a number function is added, it changes current number to x, and then current number is blank
    if (j === 0){
        if (i === 0){
            operator = "+";
            displayScreen += "+"
            updateDisplay();
            x = currentNumber;
            currentNumber = "";
            j++; //j will decide if more than one equation is on the page at one time
        } else { //this is used if there's already been a calculation and it needs to take the last answer
            operator = "+";
            x = answer; //x is equal to the last answer
            answer = 0;
            currentNumber = "";
            displayScreen += "+"
            updateDisplay();
            j++;
        }
    } else {
        alert("Please calculate before continuing")
    }
}
function subtract(){
    if (j === 0){
        if (i === 0){
            operator = "-"
            displayScreen += "-"
            updateDisplay();
            x = currentNumber;
            currentNumber = ""
            j++;
        } else {
            operator = "-";
            x = answer;
            answer = 0;
            currentNumber = "";
            displayScreen += "-"
            updateDisplay();
            j++;
        }
    } else {
        alert("Please calculate before continuing")
    }
}
function multiply(){
    if (j === 0){
        if (i === 0){
            operator = "*"
            displayScreen += "*"
            updateDisplay();
            x = currentNumber;
            currentNumber = ""
            j++;
        } else {
            operator = "*";
            x = answer;
            answer = 0;
            currentNumber = "";
            displayScreen += "*"
            updateDisplay();
            j++;
        }
    } else {
        alert("Please calculate before continuing")
    }
}
function divide(){
    if (j === 0){
        if (i === 0){
            operator = "/"
            displayScreen += "/"
            updateDisplay();
            x = currentNumber;
            currentNumber = ""
            j++;
        } else {
            operator = "/";
            x = answer;
            answer = 0;
            currentNumber = "";
            displayScreen += "/"
            updateDisplay();
            j++;
        }
    } else {
        alert("Please calculate before continuing")
    }
}
let answerAdd = 0 //just to establish that these values are 0 beforehand
let answerSub = 0
let answerMult = 0
let answerDiv = 0

function equals(){
    let a = parseFloat(x);
    let b = parseFloat(currentNumber);
    k = 0;
    if (isNaN(b) || currentNumber === ""){
        alert("The problem isn't complete. Try again!")
    } else {
        if (operator === "+"){
            answerAdd = (a + b);
            answer = answerAdd;
            answerDisplay(answer);
            // answerAdd = 0;
            displayScreen = answer;
            i++;
            j = 0;
        } else if (operator === "-"){
            answerSub = (a - b);
            answer = answerSub;
            answerDisplay(answer);
            // answerSub = 0;
            displayScreen = answer;
            i++;
            j = 0;
        } else if (operator === "*"){
            answerMult = (a*b);
            answer = answerMult;
            answerDisplay(answer);
            // answerMult = 0;
            displayScreen = answer;
            i++;
            j = 0;
        } else if (operator === "/"){
            if (b === 0){
                alert("You cannot divide by zero!")
            } else {
            answerDiv = a / b;
            answerDivTwo = Math.round(answerDiv * 1000) / 1000;
            answer = answerDivTwo;
            answerDivTwo = 0;
            answerDiv = 0;
            answerDisplay(answer);
            displayScreen = answer;
            i++;
            j = 0;
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
function back(){
//having trouble knowing how to go about the back button
    let lastEntry = displayScreen;
    let lastCheck = displayScreen.charAt(lastEntry.length - 1);

    if (/[0-9.]/.test(lastCheck) && x === ""){
        displayScreen = lastEntry.slice(0,-1);
        currentNumber = lastEntry.slice(0,-1);
        // x = currentNumber;
        updateDisplay();    
    } else if (/[+\-*/]/.test(lastCheck)) {
        displayScreen = lastEntry.slice(0,-1);
        currentNumber = displayScreen;
        operator = "";
        x = currentNumber;
        j--;
        updateDisplay();
        console.log("pig")
    } else if (/[0-9.]/.test(lastCheck) && [x != ""]) {
        displayScreen = lastEntry.slice(0, -1);
        // currentNumber2 = lastEntry.slice(0, -1);
        currentNumber = lastEntry.slice(0,0);
        console.log(currentNumber); //figured out current number is the entire display, not just the y component
        updateDisplay();
    }
    else {
            alert("Can't go back further")
    }
    }
