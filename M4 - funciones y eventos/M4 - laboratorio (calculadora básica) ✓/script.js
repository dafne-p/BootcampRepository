var sum = (num1, num2) => Number(num1) && Number(num2) ? Number(num1) + Number(num2) : "Error";
var rest = (num1, num2) => Number(num1) && Number(num2) ? Number(num1) - Number(num2) : "Error";
var multi = (num1, num2) => Number(num1) && Number(num2) ? Number(num1) * Number(num2) : "Error";
var dividir = (num1, num2) => Number(num1) && Number(num2) ? Number(num1) / Number(num2) : "Error";

function calculate(operacion) {
    var num1 = document.getElementById("valor1").value;
    var num2 = document.getElementById("valor2").value;

    switch(operacion) {
        case "+": 
            document.getElementById("result").value = sum(num1, num2);
            break;
        case "-":
            document.getElementById("result").value = rest(num1, num2); 
            break;
        case "*": 
            document.getElementById("result").value = multi(num1, num2); 
            break;
        case "/":
            document.getElementById("result").value = dividir(num1, num2); 
            break;
    };
};
    
document.getElementById("buttonSuma").addEventListener("click", () => {
    calculate("+");
});
document.getElementById("buttonResta").addEventListener("click", () => {
    calculate("-");
});
document.getElementById("buttonMulti").addEventListener("click", () => {
    calculate("*");
});
document.getElementById("buttonDivision").addEventListener("click", () => {
    calculate("/");
});