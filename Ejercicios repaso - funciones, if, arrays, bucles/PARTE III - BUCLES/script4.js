/*______________________________________________________________________________________________________________*/
/*1. Función q admita 2 parám (num, text). Mostrar x consola el texto tantas veces como indique el num*/

// var showText = (num, text) => {
//     for (i = 0; i < num; i++) {
//         console.log(text)
//     }
// }
// showText(3, "hola")


/*______________________________________________________________________________________________________________*/
/*2. Función q admita como parám un objeto cualquiera y devuelva el núm de propiedades que tiene el objeto*/

// var showNumProps = obj => {
//     var result = 0;

//     for (var prop in obj) {
//        if (obj.hasOwnProperty(prop)) result++; // es un chequeo no obligatorio, pero xra asegurar q tiene prop
//     }
//     return result;
// }

// console.log(showNumProps({name: "Daf"}))


/*______________________________________________________________________________________________________________*/
/*3. Función q admita como parám un objeto y muestre por consola los valores de sus propiedades*/

// var showProps = obj => {
//     for (var prop in obj) {
//         console.log(obj[prop])
//     }
//     return prop;
// }

// showProps({name: "Daf", age: 34})


/*______________________________________________________________________________________________________________*/
/*4. Función q admita un array de números y otro parám que sea un número y sume cada elemento del array
multiplicado por dicho número. Devuelve el resultado*/

// var calculateArray = (arr, num) => {
//     var result = 0;

//     for (var item of arr) {
//         result += item * num;
//     }
//     return result;
// }

// console.log(calculateArray([1, 2], 2));

/*______________________________________________________________________________________________________________*/
/*5. Función q dado un str como parám y también un carácter, devuelva las veces aparece el carácter en el str*/

// var caractNumber = (str, target) => {
//     var occurrences = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === target) occurrences++;
//     }
//     return occurrences;
// }

// console.log(caractNumber("Hola mariposa", "a"))



/*______________________________________________________________________________________________________________*/
/*6. Función q dado un array de cualquier tipo, lo recorra del primer al último elemento, mostrando cada
elemento por consola*/

// var showArrayItems = arr => {
//     for (var item of arr) {
//         console.log(item)
//     }
// }

// showArrayItems([2, 6, 7, 0])


/*______________________________________________________________________________________________________________*/
/*7. Función q dado un array de cualquier tipo, lo recorra desde el último elemento al primero, y lo
muestre por consola*/

// var showArrayItemsReverse = arr => {
//     for (var i = arr.length - 1; i >= 0; i--) {
//         console.log(arr[i])
//     }
// }

// showArrayItemsReverse("hola")


/*______________________________________________________________________________________________________________*/
/*8. Función q dado un array de números, y otro parám que sea un número, diga cuantos elementos son menores a 
dicho número, y cuántos no*/

// var numStats = (arr, num) => {

//     var result = [0, 0, 0]; /*el 1º representa los num menores, el 2º los iguales, el 3º los mayores*/

//     for (var item of arr) {
//         if (item > num) result[2]++;
//         else if (item === num) result[1]++;
//         else if (item < num) result[0]++;
//     }
//     return result;
// }

// console.log(numStats([2, 3, 7, -1], 3))


/*______________________________________________________________________________________________________________*/
/*9. Función q admita 2 arrays como argum, y diga si el elemento del 1º, se encuentra en el 2º*/

// var searchCommonElements = (arr1, arr2) => {
//     for (var a of arr1) {
//         for (var b of arr2) {
//             if (a === b) return true
//         }
//     }
//     return false;
// }

// console.log(searchCommonElements([1, 2, 3], [4, 2, 5]))


/*______________________________________________________________________________________________________________*/
/*10. Función q admita 2 arrays como argum, y intercambia los elementos del 1º en el 2º y viceversa. 
Muestra los arrays transformados por consola.*/

// var swapArrays = (arr1, arr2) => {
//     var i = 0;
//     while (i < arr1.length && i < arr2.length) {
//         var tmp = arr1[i];
//         arr1[i] = arr2[i];
//         arr2[i] = tmp;
//         i++;
//     }
//     console.log(arr1, arr2)
// }
// swapArrays([1, 2], ["a", "b"])


/*______________________________________________________________________________________________________________*/
/*11. Función q admita un array como argum, y construya un obj en el que almacene cada uno de los elementos del
array en propiedades indexadas, del tipo ‘prop1’, ‘prop2’, ‘prop3’, etc.*/

// var objectFromArray = arr => {
//     var result = {};
//     for (var i = 0; i < arr.length; i++) {
//         var propName = "prop" + i;
//         result[propName] = arr[i];
//     }
//     return result;
// }

// console.log(objectFromArray(["hola", "adios"]))


/*______________________________________________________________________________________________________________*/
/*12. Función q admita un array y un núm, y empieza a recorrer dicho array por el número dado. Muestra por 
consola cada elemento por el que iteres*/

// var iterateArrayFrom = (arr, startIndex) => {
//     if (startIndex < arr.length) {
//         for (var i = startIndex; i < arr.length; i++) {
//             console.log(arr[i])
//         }
//     }
// }
// iterateArrayFrom(["uno", "dos", "tres"], 1)


/*______________________________________________________________________________________________________________*/
/*13 Función q dado un array de strings y otro parám como str diga si existe en el array.*/

// var isThereStr = (arr, target) => {
//     for (var item of arr) {
//         item === target ? console.log("Si existe: ", target) : console.log("No existe")
//     }
//     return target
// }
// isThereStr(["manzana", "pera", "limon"], "manzana");


/*______________________________________________________________________________________________________________*/
/*14. Array q contenga nombres de frutas y otro array con las mismas frutas, mismo orden pero en ingles.
Implementa una función de traducción, que dada una fruta en español, diga la traducción en Inglés, y
otra función equivalente que haga la traducción inversa.*/

// var frutas = ["manzana", "pera", "naranja"];
// var fruits = ["apple", "pear", "orange"];

/*OPCIÓN 1*/

// var translateFruitToSpa = fruit => {
//     var index = fruits.indexOf(fruit);
//     if (index > -1) { /*Si index es mayor q -1 significa que existe. Si no hay un indice, se devuelve -1*/
//         return frutas[index];
//     } else {
//         return "no encontrado"
//     }
// }
// console.log(translateFruitToSpa("orange"))

/*OPCIÓN 2*/

// var translateFruitToSpa = fruit => frutas[fruits.indexOf(fruit)];
// console.log(translateFruitToSpa("orange"));


/*______________________________________________________________________________________________________________*/
/*15. Función q admita un texto por parám y lo devuelva por consola al revés*/

// var reverseText = text => {
//     var result = "";
//     for (var i = text.length -1 ; i >= 0; i--) {
//         result += text[i];
//     }
//     console.log(result);
// }
// reverseText("hola que tal")

/*______________________________________________________________________________________________________________*/
/*16. Función q admita un texto por parám y lo devuelva en formato ‘EsTe Es Mi TeXtO’*/

// var alternateUpperAndLowerCase = text => {
//     var result = "";
//     for (var i = 0; i < text.length; i++) {
//         result += i % 2 === 0 ? text[i].toUpperCase() : text[i].toLowerCase();  
//     }
//     return result;
// }
// console.log(alternateUpperAndLowerCase("hello world"));


/*______________________________________________________________________________________________________________*/
/*17. Función q admita como parám un array de arrays. La función debe recorrer todos los elementos de cada 
subarray y mostrarlos por consola*/

// var iterateSubitems = arr => {
//     for (var subArr of arr) { /* recorrer el arr capturando los subarrays*/
//         for (var item of subArr) { /*recorrer el subarr iterando x sus items*/
//             console.log(item);
//         }
//     }
// };

// var myArr = [[1, 2], ["inicio", "fin"]];
// iterateSubitems(myArr);