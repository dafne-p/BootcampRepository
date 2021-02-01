
var Hoteles = {
    NH: {
        Name: "NH",
        Location: "Málaga",
        Img: "https://res.cloudinary.com/lastminute/image/upload/c_scale,w_470/q_auto/v1563815136/zrz300qmxfvifnq0ltig.jpg",
    },
    
    Alanda: {
        Name: "Alanda",
        Location: "Marbella",
        Img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/f6/84/36/alanda-hotel-marbella.jpg?w=900&h=-1&s=1",
    },
};

var SelectedHotel = prompt("Introduce el nombre del hotel: NH o Alanda");
document.getElementById("hotel-name").innerHTML = "Hotel " + Hoteles[SelectedHotel].Name;
document.getElementById("hotel-location").innerHTML = "Ubicado en " + Hoteles[SelectedHotel].Location;
document.getElementById("hotel-img").src = Hoteles[SelectedHotel].Img;


var Hotel = {
    Stars: {
        una: "★☆☆☆☆",
        dos: "★★☆☆☆",
        tres:"★★★☆☆",
        cuatro: "★★★★☆",
        cinco: "★★★★★",
    },

    Anonimato: "",
};

Stars = prompt("Cuántas estrellas: una, dos, tres, cuatro o cinco");
document.getElementById("stars").innerHTML = Hotel.Stars[Stars] + " estrellas";

Hotel.Anonimato = confirm("¿Desea que su reseña sea anónima?");
document.getElementById("anonimato").checked = Hotel.Anonimato;