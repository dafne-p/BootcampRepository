// 5. Calcular la diferencia de precio total entre dos reservas (incluidos descuentos).

var precio1 = booking1.count * booking1.price; 
var dto1 = precio1 * dto;
var total1 = precio1 - dto1;

var precio2 = booking2.count * booking2.price; 
var dto2 = precio2 * dto;
var total2 = precio2 - dto2;

console.log("5. Diferencia de precio total entre dos reservas con dto incluido", total1 - total2);