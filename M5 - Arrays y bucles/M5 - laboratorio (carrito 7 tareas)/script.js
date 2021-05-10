const carrito = [
    {
    id: 198752, 
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    prime: true },
    { 
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    prime: true },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    prime: false },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    prime: true }
];

//________________________________________________________________________________________________________
//1. LISTAR TODOS LOS PRODUCTOS

// var i = 0;

// for (items of carrito) {
//     listar();
//     console.log("--------")
// };

// function listar() {
//     for (prop in items)
//     console.log(prop + ": " + items[prop]);
//     i++;
// };


//________________________________________________________________________________________________________
//2. ELIMINAR EL PRODUCTO DE ID: 54657 DEL CARRITO DE LA COMPRA

// carrito.splice(2, 1)
// console.log(carrito)


//________________________________________________________________________________________________________
//3. CALCULAR EL TOTAL DEL CARRITO DE LA COMPRA

// var total = 0;

// for (item of carrito) {
//     total = total + item.price * item.count;
// }

// console.log("Precio total: " + total);


//________________________________________________________________________________________________________
//4. FILTRAR POR LOS PRODUCTOS QUE SEAN PRIME

var i = 0;

premium = carrito[i].prime

for (i=0; i < carrito.length; i++) {
    if(premium) {
        console.log("Sin gastos") 
    } else {
        console.log("Con gastos")
    }
}

// function filtrar() {
//     for (prop in item) {
//         console.log(carrito[i])
//         break;
//     }
// }


//________________________________________________________________________________________________________
// OPCIONALES:


//5. SI TODOS LOS PRODUCTOS SON PRIME, MOSTRAR MENSAJE "SIN GASTOS DE ENVÍO", SI NO "CON GASTOS DE ENVÍO"

// var i = 0;

// for (item of carrito) {
//     clasify(premium);
// }

// var premium = [carrito[i].prime]

// function clasify(premium) {
//     for (prop in item) {
//         if(premium === true) {
//             console.log("Sin gastos de envío")
//         } else {
//             console.log("Con gastos de envío")
//         }
//     }
// }


//________________________________________________________________________________________________________
//6. MOSTRAR EL CARRITO EN UN LISTADO DE HTML BÁSICO




//________________________________________________________________________________________________________
//7. APLICAR 5% DTO SI LA COMPRA ES MAYOR A 50€

// var total = 0;

// for (item of carrito) {
//     total = total + item.price * item.count;
// }

// console.log("Precio total: " + total);

// function discount() {
//     var totalDto = 0;
//     if (total > 50) {
//         totalDto = total - (total * 0.05)
//     }
//     console.log("Precio total con 5% dto: " + totalDto)
// }

// discount();

