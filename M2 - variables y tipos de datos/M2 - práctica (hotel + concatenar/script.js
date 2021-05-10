var Hotel = {
    Name: "",
    Location: "",
};

Hotel.Name = prompt("Introduce el nombre del hotel");
document.getElementById("hotel-name").innerHTML = "Hotel " + Hotel.Name;

Hotel["Location"] = prompt("Introduce la ubicación del hotel");
document.getElementById("hotel-location").innerHTML = Hotel["Location"];

