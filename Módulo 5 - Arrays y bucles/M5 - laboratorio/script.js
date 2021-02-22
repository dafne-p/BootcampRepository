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
    prime: false
    }
];


//1. LISTAR TODOS LOS PRODUCTOS

var i = 0;

for (items of carrito) {
    listar();
};

function listar() {
    console.log(carrito[i]);
};


//2. ELIMINAR EL PRODUCTO DE ID: 54657 DEL CARRITO DE LA COMPRA

//3. CALCULAR EL TOTAL DEL CARRITO DE LA COMPRA

//4. FILTRAR POR LOS PRODUCTOS QUE SEAN PRIME

// OPCIONALES:

//5. SI TODOS LOS PRODUCTOS SON PRIME, MOSTRAR MENSAJE "SIN GASTOS DE ENVÍO", SI NO "CON GASTOS DE ENVÍO"

//6. MOSTRAR EL CARRITO EN UN LISTADO DE HTML BÁSICO

//7. APLICAR 5% DTO SI LA COMPRA ES MAYOR A 50€