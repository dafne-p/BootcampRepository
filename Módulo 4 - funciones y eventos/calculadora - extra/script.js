var result = 0;
var operation = "+";
var operationString;

function cleanInput() {
   document.getElementById("valor").value = "";
};

function handlerSum() {
    operationString = "+";
    calculate();
};

function handlerRest() {
    operationString = "-";
    calculate();
};

function handlerMulti() {
    operationString = "*";
    calculate();
};

function handlerDivision() {
    operationString = "/";
    calculate();
};

function handlerResult() {
    operationString = "";
    calculate();
    document.getElementById("result").value = result;
};



function calculate() {
    var num1 = Number(document.getElementById("valor").value);

    switch(operation) {
        case "+": 
            result = result + num1;
            break;
        case "-":
            result = result - num1;
            break;
        case "*": 
            result = result * num1; 
            break;
        case "/":
            result = result / num1;
            break;
    };
    operation = operationString; 
    cleanInput();
};
    
document.getElementById("buttonSuma").addEventListener("click", handlerSum);
document.getElementById("buttonResta").addEventListener("click", handlerRest);
document.getElementById("buttonMulti").addEventListener("click", handlerMulti);
document.getElementById("buttonDivision").addEventListener("click", handlerDivision);
document.getElementById("buttonResult").addEventListener("click", handlerResult);