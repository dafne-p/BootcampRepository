// 100€ Standard / 120€ Junior Suite / 150€ Suite.
// SPA incrementa la tarifa anterior en 20€.
// Individual menos 25% tarifa por noche / Doble la deja tal cual / Triple incrementa en un 25%
// Cada noche de parking suma 10€.

//ME FALTA LA PARTE OPCIONAL: QUITAR BOTÓN "CALCULAR" Y MOSTRAR RESULTADO A MEDIDA QUE SE RELLENA EL FORMULARIO


function roomPrice() {
    var type = document.getElementById("room-type").value;
    
    switch(type) {
        case "Standard": 
            return 100;
        case "jSuite":
            return 120;
        case "Suite":
            return 150;
    };
}

function spaPrice () {
    var spaSelected = document.getElementById("b-spa").checked;
    return spaSelected ? 20 : 0;
}


function roomPeople() {
    var people = document.getElementById("room-people").value;

    switch(people) {
        case "Individual": 
            return -0.25; 

        case "Doble":
            return 0;

        case "Triple":
            return 0.25
    };
}


function nightCount() {
    var noches = Number(document.getElementById("b-count").value);
    console.log("Número de noches :" + noches);
    return noches;
}


function parkingPrice() {
    var parking = Number(document.getElementById("b-parking").value);
    return parking;
}


function handlerCalculate() {
    var roomTotal = roomPrice();
    var spaTotal = spaPrice();
    var nightTotal = nightCount();
    var peopleTotal = roomPeople();
    var parkingTotal = parkingPrice();

    document.getElementById("result").innerText = spaTotal + ((roomTotal * peopleTotal) + roomTotal) * nightTotal + (parkingTotal * 10);
}

document.getElementById("b-calculate").addEventListener("click", handlerCalculate);