/*CALCULAR IVA SEGUN PRODUCTO*/

const product = { count: 3, price: 12.55, type: "libro" };

var total = product.count * product.price;
console.log("Total precio sin IVA", total);

var IVA = {
    bajo: 0.1,
    medio: 0.04,
    alto: 0.21,
};

switch(product.type) {
    case "ropa":   
        console.log("Total precio IVA incluido", (total * IVA.alto) + total); 
        break;

    case "alimento": 
        console.log("Total precio IVA incluido", (total * IVA.medio) + total); 
        break;

    case "libro": 
        console.log("Total precio IVA incluido", (total * IVA.bajo) + total); 
        break;
};