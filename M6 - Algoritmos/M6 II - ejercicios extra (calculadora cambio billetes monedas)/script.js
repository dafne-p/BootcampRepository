// FALTA EL CHALLENGE: HACER EL CÁLCULO SEGÚN LOS BILLETES Y MONEDAS QUE TENGAMOS DISPONIBLES
// hacer un random para cada cantidad de billete/moneda??

myBills = [
    200,
    100,
    50,
    20,
    10,
    5
];

myCoins = [
    2,
    1,
    0.50,
    0.20,
    0.10,
    0.05,
    0.02,
    0.01
];

var handlerCalculate = () => {
    var totalEuro;
    totalEuro = document.getElementById("totalAmountInput").value;
    var givenEuro;
    givenEuro = document.getElementById("givenInput").value;
    calculateDifference(givenEuro, totalEuro);
};


var calculateDifference = (given, total) => {
    var difference = given - total;
    document.getElementById("result").innerHTML = difference.toFixed(2);
    toGiveBack(difference);
};


var toGiveBack = toReturn => {
    console.log("A devolver: ", toReturn.toFixed(2), "€")
    console.log("-------------------")

    if (toReturn > 9) {

        for (var bill of myBills) {
        
            var total = Math.floor(toReturn / bill);
            
            if (total > 0) {
                console.log("Devolver", total, "billetes de", bill)
                calculateRest(toReturn, total, bill);
                return total

            } else if (total ) {
                calculateRest(toReturn, total, bill)
                return total
            };
        };

    } else {

        for (var coin of myCoins) {

            var total = Math.floor(toReturn / coin);

            if (total > 0) {
                console.log("Devolver", total, "monedas de", coin)
                calculateRest(toReturn, total, coin);
                return total

            } else if (total ) {
                calculateRest(toReturn, total, coin)
                return total
            }; 
        }
    }
};


var calculateRest = (devolver, totall, billete) => {
    var backAmount = devolver - totall * billete;

    (toGiveBack(backAmount)) ? true : returnCoins(backAmount);
    return backAmount
};


var returnCoins = backAmount => {

    for (coin of myCoins) {
        var total = Math.floor(backAmount / coin)

        if (total > 0) {
            console.log("devolver", total, "monedas de", coin)
            calculateRest(backAmount, total, coin)
            return total
        }
    }
};

document.getElementById("calculate_btn").addEventListener("click", handlerCalculate);