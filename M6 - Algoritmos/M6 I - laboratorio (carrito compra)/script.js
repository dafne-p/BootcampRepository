// Constantes.
const REGULAR_TYPE = 0.21;
const LOWER_TYPE = 0.04;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
    {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,},
    {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,},
    {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,},
    {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,},
    {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,},
    {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,},
    {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,},
    {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0}
];

/*1. Generar HTML dinámico para representar selección de uds para cada producto de la lista*/

var container = document.getElementById("product-list-container")

function showDescription(description) {
    var descriptionList = document.createElement("h5"); /* Crear un elemento */
    var descriptionList = document.createElement("li");
    descriptionList.innerText = description; /* Modificar elemento */
    container.appendChild(descriptionList); /* Añadir elemento */
}

function showUnits(product) {
    var unitInput = document.createElement("input"); //
    unitInput.setAttribute("type", "number"); //
    unitInput.setAttribute("id", "__input");
    unitInput.setAttribute("value", 0);
    unitInput.setAttribute("min", 0);
    unitInput.setAttribute("max", product.stock);
    container.appendChild(unitInput); //
    unitInput.addEventListener("change", (event) => {
        product.units = event.target.valueAsNumber
        isDisabled();
    }); 
}

function showPrice(price) {
    var priceList = document.createElement("span");
    priceList.setAttribute("id", "__price")
    priceList.innerText = " " + price + " €/ud";
    container.appendChild(priceList)
}

//MOSTRAR LISTA DE PRODUCTOS

function showProducts(productList) {
    for (var item of productList) {
        showDescription(item.description);
        showUnits(item);
        showPrice(item.price);
    }
}

showProducts(products);

//--------------------------------------------------------------------------------------------------
/*2. Calcular factura y mostrar desglose final del precio */


function calculateSubtotal() {
    var subtotal = 0;

    for (var item of products) {
        subtotal = subtotal + item.price * item.units;        
    };
    document.getElementById("_subtotal").innerText = subtotal;
    return subtotal;
}

function calculateIva(subTotal) {
    var iva = 0;
    for (var item of products) {
        
        if(item.units>0) {
            if(item.tax === REGULAR_TYPE) {
                iva = iva + subTotal * REGULAR_TYPE;
            } else if (item.tax === LOWER_TYPE) {
                iva = iva + subTotal * LOWER_TYPE;
            } else if (item.tax === EXEMPT_TYPE) {
                iva = iva + subTotal * EXEMPT_TYPE;
            }
        }
    }
    document.getElementById("_iva").innerText = iva;
    return iva;
}

function calculateTotal(subTotal, totalIva) {
    var total = subTotal + totalIva;
    document.getElementById("_total").innerText = total
}

function handlerCalculate() {
    var subTotal = calculateSubtotal();
    var totalIva = calculateIva(subTotal);
    calculateTotal(subTotal, totalIva);
}

// EXTRA

function isDisabled() {
    var isActive = true;
    for (item of products) {
        if (item.units > 0) {
            isActive = false;
        } 
    }
    document.getElementById("btn").disabled = isActive;
}
isDisabled();


document.getElementById("btn").addEventListener("click", handlerCalculate);
document.getElementById("btn").addEventListener("click", () => console.log(products));