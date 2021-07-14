//Constantes
var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];

// Datos
var myTeam = [
    {
    name: "María",
    availability: new Array(8).fill(true)},
    {
    name: "Pedro",
    availability: new Array(8).fill(true)},
    {
    name: "Esther",
    availability: new Array(8).fill(true)},
    {
    name: "Marcos",
    availability: new Array(8).fill(true)},
];

console.log(myTeam)

var getAvailability = () => {

    for (var person of myTeam) {

        console.log("----------------------------------------")
        console.log(person.name, person.availability)

        for (var i = 0; i < WORK_HOURS.length; i++) {

            var workingHours = Math.random() < 0.5 ? "Sí" : "No";
            person.availability.push(workingHours)
            console.log(WORK_HOURS[i], workingHours)

        }
    }
}

getAvailability();