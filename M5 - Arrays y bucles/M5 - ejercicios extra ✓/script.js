//1. MOSTRAR DATOS DEL ARRAY DE 0 AL VALOR FINAL DEL ARRAY CON LOS BUCLES DADOS EN CLASE

    // var array1 = [25, 2.05, 1000, 63, 4.01, -9]

    // for (i = 0; i < array1.length; i++) {
    //     listar(array1[i]);
    // };

    // function listar(numero) {
    //     console.log(numero)
    // };


//_________________________________________________________________________________________________________________


//2. MOSTRAR LOS NÚMEROS QUE SEAN MAYORES A 0 DEL SIGUIENTE ARRAY

// var array2 = [14, 2, 2.02, 63, 0, -9]

// for (i = 0; i < array2.length; i++) {
//     if (array2[i] > 0) {
//         console.log("posición " + i + ": " + array2[i])
//     }
// }


//_________________________________________________________________________________________________________________

//3. SEPARA EN UN ARRAY LOS NÚMEROS >= 0, Y EN OTRO LOS <0, Y MUESTRA LOS ARRAYS CON LOS RESULTADOS


// var array3 = [14, 2, 2.02, 63, 0, -9];
// var mayores = [];
// var menores = [];

// for (i = 0; i < array3.length; i++) {

//     if(array3[i] >= 0) {
//         mayores.push(array3[i]);
//     } else {
//         menores.push(array3[i]);
//     }
// }
// console.log("Array de mayores: " + mayores);
// console.log("Array de menores: " + menores);

 in
//_________________________________________________________________________________________________________________


//4. BORRA DEL ARRAY LOS NÚMEROS MENORES DE 0 Y MUESTRA EL ARRAY RESULTANTE

// var array4 = [14, 2, 2.02, 63, 0, -9];

// for (i=0; i<array4.length; i++) {

//     if(array4[i] < 0) {
//         array4.splice(i, 1)
//     }
// }

// console.log(array4);


//_________________________________________________________________________________________________________________


//5. MUESTRA EL SIGUIENTE ARRAY EN SENTIDO INVERSO (DEL VALOR FINAL AL INICIAL)

// array5 = [
//     { id: 1, name: "John", },
//     { id: 2, name: "Doe", },
//     { id: 3, name: "Clara", },
//     { id: 4, name: "Elisa", },
//     { id: 4, name: "Pedro", }
// ]

// for (i = array5.length - 1; i >= 0; i--) {
//     console.log(array5[i])
// }


//_________________________________________________________________________________________________________________


//6. MUESTRA SOLO LOS OBJETOS DEL SIGUIENTE ARRAY QUE TENGAN EDAD >= 18

// array6 = [ 
//     { id: 1, name: "Jhon", age: 25, }, 
//     { id: 2, name: "Doe", age: 8, }, 
//     { id: 3, name:"Clara", age: 15, }, 
//     { id: 4, name: "Elisa", age: 30, }, 
//     { id: 4, name: "Pedro", age: 18, }
// ]

// var i = 0;

// for (i = 0; i < array6.length; i++) {
//     if (array6[i].age >= 18) {
//         mostrar(array6[i]);
//     }
// }

// function mostrar(item) {
//     console.log(item);
// }


//_________________________________________________________________________________________________________________


//7. INSERTAR EN UN ARRAY LOS QUE TENGAN EDAD >= 18, Y LOS MENORES EN OTRO ARRAY. MOSTRAR RESULTADO

// array7 = [ 
//     { id: 1, name: "Jhon", age: 25, }, 
//     { id: 2, name: "Doe", age: 8, }, 
//     { id: 3, name:"Clara", age: 15, }, 
//     { id: 4, name: "Elisa", age: 30, }, 
//     { id: 4, name: "Pedro", age: 18, }
// ]

// arrayMayor = [];
// arrayMenor = [];

// for (item of array7) {
// console.log(item)
//     if(item.age >= 18) {
//         arrayMayor.push(item);

//     } else {
//         arrayMenor.push(item);
//     }
// }

// console.log(arrayMayor);
// console.log(arrayMenor);


//_________________________________________________________________________________________________________________


//8. INCREMENTAR 10€ EL PRECIO DE LOS QUE TENGAN <10 HABITACIONES DISPONIBLES
// MUESTRA LOS QUE CUMPLEN LA CONDICIÓN Y LOS QUE NO

// hotels = [
//     {
//     hotelId: 1,
//     hotelName: "John",
//     availableRooms: 25,
//     price: 10.20,},

//     {
//     hotelId: 2,
//     hotelName: "Doe",
//     availableRooms: 8,
//     price: 4.25,},

//     {
//     hotelId: 3,
//     hotelName: "Clara",
//     availableRooms: 15,
//     price: 14.30,},

//     {
//     hotelId: 4,
//     hotelName: "Elisa",
//     availableRooms: 30,
//     price: 10,},

//     {
//     hotelId: 4,
//     hotelName: "Pedro",
//     availableRooms: 10,
//     price: 8.10,},
// ]

// for (booking of hotels) {
//     if(booking.availableRooms < 10) {
//         subirPrecio(booking);
//     } else{
//         console.log(booking)
//     }
// };

// function subirPrecio(hotel) {
//     hotel.price = hotel.price + 10;
//     console.log(hotel)
// };


//_________________________________________________________________________________________________________________


//9. INCREMENTAR 10€ EL PRECIO DE LOS QUE TENGAN <10 HABITACIONES DISPONIBLES
// MUESTRA SOLO LOS QUE CUMPLEN LA CONDICIÓN
// NO CORREGIDO

// hotels = [
//     {
//     hotelId: 1,
//     hotelName: "John",
//     availableRooms: 25,
//     price: 10.20,},

//     {
//     hotelId: 2,
//     hotelName: "Doe",
//     availableRooms: 8,
//     price: 4.25,},

//     {
//     hotelId: 3,
//     hotelName: "Clara",
//     availableRooms: 15,
//     price: 14.30,},

//     {
//     hotelId: 4,
//     hotelName: "Elisa",
//     availableRooms: 30,
//     price: 10,},

//     {
//     hotelId: 4,
//     hotelName: "Pedro",
//     availableRooms: 10,
//     price: 8.10,},
// ]

// var i = 0;

// for (booking of hotels) {
//     console.log()
// }

// for (booking of hotels) {
//     if(hotels[i].availableRooms < 10) subirPrecio();
//     i++
// };

// function subirPrecio() {

//     for (prop in booking) {
//         hotels[i].price = booking.price + 10;
//         console.log(hotels[i])
//         break;
//     }
// };


//_________________________________________________________________________________________________________________


//10. DADO EL SIGUIENTE ARRAY DE HOTELS Y EL HTML CON UN INPUT DE TEXTO Y UN BOTÓN
// MOSTRAR EL MENSAJE "EL HOTEL 1 EXISTE" SI EXISTE EL HOTEL
// MOSTRAR EL MENSAJE "EL HOTEL 1 NO EXISTE" SI NO EXISTE EL HOTEL
// PISTA: USA UN EVENTO DE JAVASCRIPT DE LOS VISTOS POR AHORA EN EL CURSO

// hotels = [ 
//     { hotelId: 1, hotelName: "Hotel 1", availableRooms: 25, price: 10.20, },
//     { hotelId: 2, hotelName: "Hotel 2", availableRooms: 8, price: 4.25, },
//     { hotelId: 3, hotelName: "Hotel 3", availableRooms: 15, price: 14.30, },
//     { hotelId: 4, hotelName: "Hotel 4", availableRooms: 30, price: 10, },
//     { hotelId: 5, hotelName: "Hotel 5", availableRooms: 10, price: 8.10, }
// ]

// function existeHotel() {

//     var name = document.getElementById("textBox").value;

//     for (booking of hotels) {

//         if(name === booking.hotelName) {
//             return "El hotel existe"
//         }
//     }
//     return "El hotel no existe"
// }

// function mensaje() {
//     console.log(existeHotel());
// }

// document.getElementById("myButton").addEventListener("click", mensaje);