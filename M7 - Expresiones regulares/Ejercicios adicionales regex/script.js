/* M Ó D U L O   7  -  ENUNCIADOS EJERCICIOS EXTRA DE REGEX*/

/*-------------------------------------------------------------------------------------------*/

/*1. Un número de teléfono en España está formado por, un número de 2-3 cifras, que indican
el prefijo de la comunidad autónoma, además consta de 3 pares de números que pueden estar 
separados por espacios o no. 
Valida si es válido un número del tipo 952 35 42 77 o 952354277*/


// const pattern = /^(\d{2,3}\s?){4}$/
// var values = ["952 35 42 77", "952354277"];

// values.forEach(value => {
//   console.log(pattern.test(value))
// });



/*-------------------------------------------------------------------------------------------*/

/*2. Los números en España pueden empezar por 9 si se trata de números fijos, o con 6 si son
números móviles. Utiliza la expresión regular del ejercicio anterior para que ahora pueda
validar números que empiecen por 9 o 6. 
Ejemplo 952 35 42 77 , 652 35 42 77 , 952354277 o 652354277*/


// const pattern = /^[6|9](\d{1,2}\s?){4}$/
// var values = ["952 35 42 77", "952354277", "652 35 42 77", "652354277"];

// values.forEach(value => {
//   console.log(pattern.test(value))
// });



/*-------------------------------------------------------------------------------------------*/

/*3. Es normal ver números con el siguiente formato +34 952 63 19 80 . El 34 es el código de
España. Mejora la regex para que pueda aceptar el código del país.*/


// const pattern = /^(\+34)?\s?(\d{2,3}\s?){4}$/
// var values = ["+34 952 63 19 80", "+34952631980"];

// values.forEach(value => {
//   console.log(pattern.test(value))
// });



/*-------------------------------------------------------------------------------------------*/

/*4. También es tipico ver números de teléfonos con el siguiente formato (+34) 952 63 19 80
Mejora la regex anterior para que pueda aceptar los paréntesis del código del país*/

// const pattern = /^(\(?\+34\)?)?\s?(\d{2,3}\s?){4}$/
// var values = ["+34 952 63 19 80", "+34952631980", "952631980", "(+34) 952 63 19 80", "(+34)9526319 80"];

// values.forEach(value => {
//   console.log(pattern.test(value))
// });



/*-------------------------------------------------------------------------------------------*/

/*5. En España el NIE comienza por las letras X, Y o Z seguido de 7 números y una letra.
Dado un NIE del formato X 1234567P , X1234567P o X 1234567 P , indica si es un NIE válido o no*/


// const pattern = /^(X|Y|Z)\s?\d{7}\s?[A-Z]$/
// var values = ["X 1234567P", "X1234567P", "X 1234567 P"];

// values.forEach(value => {
//   console.log(pattern.test(value))
// });



/*-------------------------------------------------------------------------------------------*/

/*6. Otra manera de representar el NIE es separando los 7 dígitos y la letra por un guión. 
Ejemplo X 1234567-P . Mejora la regex sobre el NIE para que ahora pueda aceptar el guión o no*/


// const pattern = /^(X|Y|Z)\s?\d{7}(\s|-)?[A-Z]$/
// var values = ["X 1234567P", "X1234567P", "X 1234567 P", "X 1234567-P"];

// values.forEach(value => {
//   console.log(pattern.test(value))
// });



/*-------------------------------------------------------------------------------------------*/
/*7. Un código postal es un número de 4 dígitos, los dos primeros indican la provincia a la 
que pertenece. Valida si el "29015" está bien formado para la provincia de Málaga sabiendo que
su CP empieza por 29*/


// const pattern = /^29\d{3}$/
// var values = ["29015"];

// values.forEach(value => {
//   console.log(pattern.test(value))
// });



/*-------------------------------------------------------------------------------------------*/

/*8. Valida ahora que además un CP sea de Málaga y de Madrid. El CP de Madrid empieza por 28.
Ejemplo: 28024*/


// const pattern = /^(29|28)\d{3}$/
// var values = ["29015", "28024"];

// values.forEach(value => {
//   console.log(pattern.test(value))
// });



/*-------------------------------------------------------------------------------------------*/

/*9. Valida ahora que además un CP sea de Málaga, Madrid y Barcelona. El CP de Barcelona empieza
por 08. Ejemplo: 08024*/


// const pattern = /^(29|28|08)\d{3}$/
// var values = ["29015", "28024", "08024"];

// values.forEach(value => {
//   console.log(pattern.test(value))
// });



/*-------------------------------------------------------------------------------------------*/

/*10. En html podemos determinar un color según la propiedad RGB. RGB consta de 3 núm separados
por comas y puede tener un espacio o no. Cada uno de esos números pueden ser de 1, 2 o 3 dígitos
Crea una expresión regular que valide si es un color RGB válido o no.
Ejemplo: RGB(128, 128, 0) o rgb(128, 128, 0)*/

// const pattern = /^(RGB|rgb)\((\s?\d{1,3},?){3}\)$/
// var values = ["RGB(128, 128, 0)", "rgb(128, 128, 0)"];

// values.forEach(value => {
//   console.log(pattern.test(value))
// });