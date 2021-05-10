const booking1 = { count: 3, price: 127.95 };
const booking2 = { count: 5, price: 112.95 };

//1. Comparar si dos reservas son iguales

// if (booking1.count == booking2.count && booking1.price == booking2.price) {
//     console.log("Coincicen")
// } else {
//     console.log("Son diferentes")
// }

//_____________________________________________________________________________________
//2. Mostrar la suma del número de noches de las dos reservas

// var totalnoches = booking1.count + booking2.count;
// console.log("2. Total de noches de ambas reservas:", totalnoches);


//_____________________________________________________________________________________
//3. Comparar dos reservas para mostrar la de mayor número de noches

// booking1.count > booking2.count ? 
//     console.log("3. Mostrando reserva 1", booking1) 
//     : console.log("3. Mostrando reserva 2", booking2);


//_____________________________________________________________________________________
//4. Ampliar una noche más a una reserva

// var ampliar = booking1.count++;
// console.log(ampliar);


//_____________________________________________________________________________________
//4. Aplicar descuento del 20% si el precio supera los 500€

// const booking = {
//     count: 5,
//     price: 127.95,
// };

// var total = booking.count * booking.price;

// var dto = 0.2;

// let preciototal = total > 500 ? 
//     console.log("4. Precio de reserva:", total, "€" + "  Precio con 20%dto aplicado:", total - (dto * total), "€") 
//     : console.log("4. Precio de la reserva:", total, "€" + " No se aplica el descuento");


//_____________________________________________________________________________________
//5. Calcular la diferencia de precio total entre dos reservas (incluidos descuentos)

// var precio1 = booking1.count * booking1.price; 
// var dto1 = precio1 * dto;
// var total1 = precio1 - dto1;

// var precio2 = booking2.count * booking2.price; 
// var dto2 = precio2 * dto;
// var total2 = precio2 - dto2;

// console.log("5. Diferencia de precio total entre dos reservas con dto incluido", total1 - total2);


//_____________________________________________________________________________________
//6. Comparar dos reservas para mostrar la de mayor precio total (incluidos descuentos)

// var comparacion = total1 == total2 ? 
// console.log("6. La reserva 1 es mayor") 
// : console.log("6. La reserva 2 es mayor");


//_____________________________________________________________________________________
//7. Mostrar número de reservas a las que se podrían aplicar descuento

// precio1 > 500? 
//     console.log("7. Dto aplicable a reserva 1", booking1) 
//     : console.log("7. Dto no aplicable a reserva 1");

// precio2 > 500? 
//     console.log("7. Dto aplicable a reserva 2", booking2) 
//     : console.log("7. Dto no aplicable a reserva 2");


//_____________________________________________________________________________________
//8. Mostrar "Todas con descuento" si las dos reservas tienen descuentos

// precio1 > 500 && precio2 > 500 ? 
//     console.log("8. Todas las reservas tienen dto: ", booking1, booking2) 
//     : console.log("8. No todas las reservas tienen dto");


//_____________________________________________________________________________________
//9. Mostrar la suma del precio total con descuentos de las dos reservas

// console.log("9. Precio total de ambas reservas con dto:", total1 + total2, "€");