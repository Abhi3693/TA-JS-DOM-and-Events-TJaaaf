let buttonsContainer = document.querySelector(".buttons-container");

let operation = document.querySelector(".opration-holder");
let display = document.querySelector(".display");
let allNumbers = document.querySelector(".allNumbers");
let isEqual = document.querySelector(".result");
let clear = document.querySelector(".c");


let currentOperator = null;
let fullInputs = "";

function setDisplay(inputs) {
    fullInputs = inputs;
    display.innerText = inputs;
}

function handleOperatorClick(operator) {
    let inputsString = fullInputs;

    if (currentOperator) {
        inputsString = inputsString.substring(0, inputsString.length - 1    );
    }
    setDisplay(inputsString + operator);

    currentOperator = operator;
}


function handleNumbersClick(number) {
    setDisplay(fullInputs + number);
    currentOperator = null;
}


function handleClear() {  
    setDisplay("0");
}


function showResult() {
    if(fullInputs === "" || fullInputs === 0){
        setDisplay("")  
    } else {
        setDisplay(eval(fullInputs))
    }
}


buttonsContainer.addEventListener("click", event => {
    let data = event.target.dataset;
    // console.dir(event);
    // console.log(event.target);

    switch(data.type) {
        case "operator":
            handleOperatorClick(data.text);
            break;
        case "value":
            handleNumbersClick(data.text);
            break;
        case "clear":
            handleClear();
            break;
        case "result":
            showResult();
            break;
        default:
            // Do nothing
    }
});