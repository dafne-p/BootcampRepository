/* M Ó D U L O   7  -  L A B O R A T O R I O */

/*----------------------------------------------------------------------------------------*/
/*VALIDAR IBAN*/

/*1. Validar que el IBAN dado se informa con dos letras, y los números correspondientes*/

// const pattern = /^[ES]{2}\d{22}$/;
// const iban = "ES6600190020961234567890";

// const check = pattern.test(iban)
// console.log(check)




/*2. Permitir que se incluyan espacios en ciertas áreas, daremos por valida estas dos cadenas*/

// const pattern = /^[ES]{2}\s?(\d\s?){20,22}$/
// const values = ["ES6600190020961234567890", "ES66 0019 0020 9612 3456 7890"];

// values.forEach(value => {
// console.log("validar: ", pattern.test(value));
// });




/*3. Extraer el código de páis y el dígito de control*/

// const pattern = /^([ES]{2})(\d{2})\d{20}$/;
// const result = pattern.exec("ES6600190020961234567890");
// console.log(result)


/*----------------------------------------------------------------------------------------*/
/*VALIDAR MATRÍCULA COCHE*/


/*1. Validar los siguientes patrones*/

// const pattern = /^\d{4}(\s|-)?[A-Z]{3}$/
// const values = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"]

// values.forEach(value => {
//    console.log(`¿Es válido?: `, pattern.test(value));
// });




/*2. Extraer por un lado la parte numérica y por otro las letras*/

// const pattern = /^(\d{4})(\s|-)?([A-Z]{3})$/
// const values = [`2021 GMD`, '2345-GMD', `4532BDB`, `0320-AAA`];

// values.forEach(value => {
//   console.log(`el valor es "${value}"? -> `, pattern.exec(value));
// });



/*----------------------------------------------------------------------------------------*/
/*EJERCICIOS OPCIONALES*/

//EXTRAER IMÁGENES DE UN FICHERO HTML


//1. De una sola linea extraer el contenido de src

// const pattern = /^<img\s?src=".{5,}\.(jpg|png)"\s?\/>$/;
// const imagen = `<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>`

// console.log(pattern.exec(imagen))



//2. De un HTML extraer todos los src de todos los objetos img

/* !!!!!!!!! NO SE HACERLO !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/




/*----------------------------------------------------------------------------------------*/
//VALIDAR SINTAXIS DE TARJETA DE CRÉDITO



//1. Validar los siguiente formatos: 

// const pattern = /^(\d{4}(\s|-)?){4}$/
// var values = ["5299 6400 0000 0000", "5299-6400-0000-0000", "5299640000000000"];

// values.forEach(value => {
//   console.log(pattern.exec(value))
// });



//2. Extraer cada grupo de cuatro digitos

// const pattern = /^((\d{4})(\s|-)?){((\d{4})(\s|-)?)((\d{4})(\s|-)?)((\d{4})(\s|-)?)}$/
// var values = ["5299 6400 0000 0000", "5299-6400-0000-0000", "5299640000000000"];

// values.forEach(value => {
//   console.log(pattern.exec(value))
// });



/*----------------------------------------------------------------------------------------*/
//BUSCAR EXPRESIONES REGULARES


/*Comprobar si una clave es fuerte o no:
   Complejo: mínimo que tenga una minuscula, una mayuscula, un numero y un caracter especial
   Moderado: mínimo que tenga una minuscula, una mayuscula, un numero y mín 8 caract de longitud
*/




/*Validar que una URL esta bien formada (por ejemplo https://www.lemoncode.net ó www.lemoncode.net
ó lemoncode.net)*/




/*Validar que un color en Hexadecimal esta bien formado*/