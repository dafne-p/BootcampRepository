
//ME FALTA ESTA TAREA QUE ERA OPCIONAL, NO HE SABIDO HACERLA: 
//Si alguno de los operandos es vacío, muestra como resultado "Error".

var sum = (num1, num2) => num1 + num2;
var rest = (num1, num2) => num1 - num2;
var multi = (num1, num2) => num1 * num2;
var dividir = (num1, num2) => num1 / num2;

function calculate(operacion) {
    var num1 = Number(document.getElementById("valor1").value);
    var num2 = Number(document.getElementById("valor2").value);

    switch(operacion) {
        case "+": document.getElementById("result").value = sum(num1, num2); break;
        case "-": document.getElementById("result").value = rest(num1, num2); break;
        case "*": document.getElementById("result").value = multi(num1, num2); break;
        case "/": document.getElementById("result").value = dividir(num1, num2); break;
    };
};
    
document.getElementById("buttonSuma").addEventListener("click", () => {calculate("+");});
document.getElementById("buttonResta").addEventListener("click", () => {calculate("-");});
document.getElementById("buttonMulti").addEventListener("click", () => {calculate("*");});
document.getElementById("buttonDivision").addEventListener("click", () => {calculate("/");});