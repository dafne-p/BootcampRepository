//PARTE I: FUNCIONES BÁSICAS

/*_______________________________________________________________________________________________________________*/
/*1. Función que muestre por consola “Hola Mundo”*/

// var helloWorld = () => console.log("Hola Mundo");
// helloWorld();


/*_______________________________________________________________________________________________________________*/
/*2. Función que admita como parámetro un nombre y salude por consola a dicha persona*/

// var sayHello = name => console.log("Hola", name);
// sayHello("Dafne")


/*_______________________________________________________________________________________________________________*/
/*3. Función que, dado un string como parámetro, devuelva el string en mayúsculas*/

// var mayusculas = texto => console.log(texto.toUpperCase());
// mayusculas("de minúsculas a mayúsculas");


/*_______________________________________________________________________________________________________________*/
/*4. Función que, dado un string como parámetro devuelva, el string en minúsculas*/

// function minusculas(texto) { console.log(string.toLowerCase())}
// minusculas("HELLO WORLD")


/*_______________________________________________________________________________________________________________*/
/*5. Función que admita 2 números como parámetro y devuelva la suma de ambos*/

// Forma 1:
// function addNumbers(a, b) {console.log(a+b)};
// addNumbers(3, 5)

// Forma 2:
// var suma = (a, b) => a + b;
// console.log(suma (2, 3))


/*_______________________________________________________________________________________________________________*/
/*6. Función que admita 3 argumentos de tipo string y devuelva otro string con la concatenación de los 3*/

// function concatenar(a, b, c) { console.log(a, b, c)}
// concatenar("hola", "qué", "tal")


/*_______________________________________________________________________________________________________________*/
/*7. Función que admita como parámetro un objeto y añada a dicho objeto una prop llamada ‘id’ inicializada a null*/

// var addParameter = (obj, propName, value) => {
//     obj[propName] = value
// } 

// var miObjeto = {
//     nombre: "Dafne",
//     edad: 24,
// }

// addParameter(miObjeto, "id", null);
// console.log(miObjeto)
