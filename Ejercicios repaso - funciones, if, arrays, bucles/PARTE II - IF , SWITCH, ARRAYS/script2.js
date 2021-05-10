/*_______________________________________________________________________________________________________________*/
/* F U N C I O N E S   C O N   I F,  E L S E,  S W I T C H,  C O M P R O B A C I O N E S  */
/*_______________________________________________________________________________________________________________*/

/*1. Función que admita un parámetro, de cualquier tipo, y que compruebe si el parámetro es undefined o null*/

// var isNullOrUnd = (x) => (x === null || x === undefined);


/*_______________________________________________________________________________________________________________*/
/*2. Función que admita un número como parámetro y devuelva si el número es positivo o negativo*/

// var numero = number => number >= 0 ? console.log(true) : console.log(false)
// numero(-1)

// se podría añadir un isNaN(numero) para comprobar si el parámetro es un número o no


/*_______________________________________________________________________________________________________________*/
/*3. Función que admita un número como parámetro y diga, por consola, si es mayor, menor o igual que 100*/

//NO SE EJECUTA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// var numeroCien = num => {
//     switch(num) {
//         case num > 100: console.log("es mayor que 100"); break;
//         case num < 100: console.log("es menor que 100"); break;
//         case num === 100: console.log("es igual que 100"); break;
//     }
// }
// numeroCien(2);


/*_______________________________________________________________________________________________________________*/
/*4. Función que admita como parámetro un objeto y devuelva si dicho objeto tiene una propiedad ‘name’ o no*/

//NO SE EJECUTA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// var user = {
//     surname: "Prado",
//     age: 24
// };

// var objectHasName = (obj) => {
//     if (obj.hasOwnProperty("name")) {
//         return obj;
//     } else {
//         return "el objeto no tiene propiedad";
//     }
// };

// console.log(objectHasName());



/*_______________________________________________________________________________________________________________*/
/*5. Función que admita 2 números como argumento y compruebe si el primero es divisible por el segundo*/

// var comprobarDivisible = (a, b) => a % b === 0 ? console.log("divisibles") : console.log("no divisibles");
// comprobarDivisible(12, 4)


/*_______________________________________________________________________________________________________________*/
/*6. Función que admita un string y un número como parámetro, y comprobar que tienen ese número de caracteres*/

// NO LO ENTIENDO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// var checkString = (str, num) => (str.lenght === num);
// console.log(checkString("Hola que tal", 15))


/*_______________________________________________________________________________________________________________*/
/*7. Función que admita un día de la semana en formato número (del 1 al 7) y devuelva que día es (en texto)*/

// var fecha = (dia) => {
//     switch(dia) {
//         case 1: console.log("Lunes"); break;
//         case 2: console.log("Martes"); break;
//         case 3: console.log("Miércoles"); break;
//         case 4: console.log("Jueves"); break;
//         case 5: console.log("Viernes"); break;
//         case 6: console.log("Sábado"); break;
//         case 7: console.log("Domingo"); break;
//         default: console.log("No es un día válido de la semana"); break;
//     }
// }

// fecha(3)


/*_______________________________________________________________________________________________________________*/
/*8. Función que dado un número (del 1 al 12), diga a qué mes corresponde en texto*/

// igual que el ejercicio 7


/*_______________________________________________________________________________________________________________*/
/*9. Función que admita 2 arrays como argumento, y devuelva el array más largo*/

// let animales = ["perro", "gato"];
// let colores = ["azul", "blanco", "rosa"];

// var arrayLength = (arr1, arr2) => {
//     if (arr1.length > arr2.length) {
//         console.log("El 1º array es más largo: ", arr1)
//     } else if (arr2.length > arr1.length) {
//         console.log("El 2º array es más largo: " , arr1)
//     } else {
//         console.log("Ambos son iguales")
//     }
// }

// console.log(arrayLength(animales, colores));


/*_______________________________________________________________________________________________________________*/
/*10. Función que admita 2 arrays como argumento, y devuelva si el primer elemento de ambos arrays es igual o no*/

// let animales = ["perro", "elefante", "rinoceronte"];
// let mascotas = ["perro", "gato", "hamster"];

// Array.isArray es para comprobar que lo que le pasemos (arr1) es un array

// var sameFirstElement = (arr1, arr2) => Array.isArray(arr1) && Array.isArray(arr2) && arr1[0] === arr2[0];
// console.log(sameFirstElement(animales, mascotas))


/*_______________________________________________________________________________________________________________*/
/* F U N C I O N E S   C O N   A R R A Y S */
/*_______________________________________________________________________________________________________________*/

/*11. Función que admita un array de números, y devuelva el 2º elemento. Si no eixiste, devuelva undefined */

// se ha añadido un if para primero comprobr la long del array, porque si es menor q 1, directamente da und

// let num = [3, 2];

// var showNumber = arr => {
//     if (arr.length > 1) {
//         return arr[1]
//     } else {
//         return undefined
//     }
// };

// console.log(showNumber(num))


/*_______________________________________________________________________________________________________________*/
/*12. Función que admita un string como parámetro y devuelva la última letra */


//OPCIÓN 1:

// var showLastLetter = str => {
//     var lastLetter = str.length - 1;
//     return str[lastLetter];
// }
// console.log(showLastLetter("hola"))


//OPCIÓN 2:
// var showLastLetter = str => {
//     return str.slice(-1)
// };
// console.log(showLastLetter("hola caracola"))


/*_______________________________________________________________________________________________________________*/
/*13. Función que dado un array, intercambie el 1º elemento por el último. Muestra por consola el resultado */

// let mascotas = ["perro", "gato", "hamster"];

// var swapFirstAndLastElement = arr => {
//     var tempElement = arr[0];
//     var lastIndex = arr.length - 1;
//     arr[0] = arr[lastIndex];
//     arr[lastIndex] = tempElement;
//     console.log(arr)
// }
// swapFirstAndLastElement(mascotas);