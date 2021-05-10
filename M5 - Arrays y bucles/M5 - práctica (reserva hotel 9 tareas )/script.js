const bookings = [
    { id: 1, price: 45.30, count: 3, room: "standard", prepaid: false, succeeded: true },
    { id: 2, price: 92.45, count: 4, room: "superior", prepaid: false, succeeded: true },
    { id: 3, price: 63.50, count: 7, room: "standard", prepaid: true, succeeded: false },
    { id: 3, price: 37.50, count: 2, room: "standard", prepaid: true, succeeded: true },
    { id: 5, price: 87.90, count: 5, room: "superior", prepaid: true, succeeded: false }
];

//1. LISTAR TODAS LAS RESERVAS

// for (reserva of bookings) {
//     listar(reserva);
// }

// function listar(reserva) {
//     for (prop in reserva) {
//         console.log(prop + ": " + reserva[prop]);
//     }
// };

//________________________________________________________________________________________________________________

//2. CREAR UNA FUNCIÓN QUE NOS INDIQUE SI AL MENOS UNA RESERVA HA FALLADO

// function error() {

//     var exito = true;

//     var i = 0;

//     while(exito) {
//         console.log("-------------------")
//         console.log("comprobando reserva en posicion " + i);
//         console.log("exito vale" + exito + " y la reserva " + bookings[i].succeeded);
//         exito = exito && bookings[i].succeeded;
//         console.log("resultado de exito " + exito);
//         i++;
//     }
    
//     return !exito;
// }

// console.log("Existe reserva con error: " + error());

//________________________________________________________________________________________________________________

//3. LISTAR SOLO LAS RESERVAS QUE HAN TENIDO ÉXITO

// for(reserva of bookings) {
//     if (reserva.succeeded) listar(reserva);
// }

// function listar(reserva) {
//     console.log("---------")
//     for (prop in reserva) {
//         console.log(prop + ": " + reserva[prop]);
//     }
// };


//________________________________________________________________________________________________________________

//4. LISTAR RESERVAS QUE YA ESTÁN PAGADAS

// for (reserva of bookings) {
//     if (reserva.prepaid) listar(reserva);
// }

// function listar(reserva) {
//     console.log("----------------")
//     for (prop in reserva) {
//         console.log(prop + " " + reserva[prop])
//     }
// }

//________________________________________________________________________________________________________________

//5. CALCULAR LA SUMA TOTAL DE LOS PRECIOS

// var total = 0;

// for (reserva of bookings) {
//     total = total + reserva.price * reserva.count;
// }

// console.log("total: " + total);

// function imprimir(reserva) {
//     for (prop in reserva) {
//         console.log(prop + reserva[prop])
//     }
// }

    //MI VERSION QUE NO FUNCIONA
    // for (reserva of bookings) {
    //     sumaTotal(reserva) + total;
    // }

    // var total = 0;

    // function sumaTotal(bookings) {

    //     for (prop in reserva) {
    //         var precio = bookings.price * bookings.count;
    //         console.log("precio de " + prop + reserva[prop] + " es : " + precio);
    //         break;
    //     }

    //     return precio;
    // }

    // console.log()

//________________________________________________________________________________________________________________

//6. APLICAR UN 10% DTO A TODAS LAS RESERVAS

// for (reserva of bookings) {
//     sumaTotal(reserva) + total;
// }

// var total = 0;

// function sumaTotal(bookings) {

//     for (prop in reserva) {
//         var precio = bookings.price * bookings.count;
//         var dto = precio * 0.9;
//         console.log("precio de " + prop + reserva[prop] + " con 10% es : " + dto);
//         break;
//     }

//     return precio;
// }

// console.log()

//________________________________________________________________________________________________________________

//7. BUSCAR RESERVAS PAGADAS QUE HAN FALLADO

// for (reserva of bookings) {
//     if(!reserva.succeeded && reserva.prepaid) fallo(reserva);
// }

// function fallo(reserva) {
//     console.log("--------------")
//     for (prop in reserva) {
//         console.log(prop + " " + reserva[prop])
//     }
// }

//________________________________________________________________________________________________________________

//8. BUSCAR SI EXISTE ALGÚN ID REPETIDO (BUCLE ANIDADO)

// var repetido = false;

// for (i = 0; i < bookings.length; i++) {
//     var reserva1 = bookings[i];
    
//     for (x = i+1; x < bookings.length; x++) {
//         var reserva2 = bookings[x];
//         repetido = repetido || reserva1.id === reserva2.id;
//     }
// }

// console.log("¿Hay id repetido?: " + repetido);