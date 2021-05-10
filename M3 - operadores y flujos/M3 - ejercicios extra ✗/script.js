//_________________________________________________________________________________________
//1. ESCRIBE EN UNA VAR UN DÍA DE LA SEMANA Y DECIR QUÉ ASIGNATURA TOCA ESE DÍA

// horario = [
//     {
//     day: "Lunes",
//     subject: "Matemáticas", },
//     {
//     day: "Martes",
//     subject: "Lengua", },
//     {
//     day: "Miércoles",
//     subject: "Física", },
//     {
//     day: "Jueves",
//     subject: "Química", },
//     {
//     day: "Viernes",
//     subject: "Gimnasia", }
// ]

// var dia = "viernes";

// switch(dia) {
//     case "lunes": console.log("Toca matemáticas"); break;
//     case "martes": console.log("Toca lengua"); break;
//     case "miercoles": console.log("Toca física"); break;
//     case "jueves": console.log("Toca química"); break;
//     case "viernes": console.log("Toca gimnasia"); break;
// }


//_________________________________________________________________________________________
//2. SEGÚN UNA VA LLAMADA hora, MOSTRAR UN BUENOS DÍAS, BUENAS TARDES O BUENAS NOCHES SEGÚN LA HORA.
//SE UTILIZARÁN LOS TRAMOS DE 6 A 12, DE 13 A 20 Y DE 21 A 5. SOLO SE TIENEN EN CUENTA LA HORA NO LOS MINUTOS.

// var hora = 1;

// if(hora>=6 && hora<=12) {
//     console.log("Buenos días");
// } 
// else if (hora>=13 && hora<=20) {
//     console.log("Buenas tardes");
// }
// else if (hora>=21) {
//     console.log("Buenas noches");
// }
// else if (hora<=5) {
//     console.log("Buenas noches");
// }


//_________________________________________________________________________________________
//3. DADA UNA VAR LLAMADA diaSemana (QUE CONTENGA UN NÚM DEL 1-7) MOSTRAR EL DÍA DE LA SEMANA CORRESPONDIENTE

// var diaSemana = 5;

// switch(diaSemana) {
//     case 1: console.log("Lunes"); break;
//     case 2: console.log("Martes"); break;
//     case 3: console.log("Miércoles"); break;
//     case 4: console.log("Jueves"); break;
//     case 5: console.log("Viernes"); break;
//     case 6: console.log("Sábado"); break;
//     case 7: console.log("Domingo"); break;
// }


//_________________________________________________________________________________________
//4. CALCULA LA MEDIA DE TRES NOTAS Y MUESTRA SI ESTÁ APTA, NO APTA, NOTABLE O SOBRE SALIENTE
// APTO: 5 -- NO APTO: MENOS DE 5 -- NOTABLE: 5 -7 -- SOBRESALIENTE: 7 - 10

//NO ME FUNCIONA!

// var notaUno = 1;
// var notaDos = 9;
// var notaTres = 9;

// var notaMedia = (notaUno + notaDos + notaTres) / 3;

// switch(notaMedia) {
//     case notaMedia<5: console.log("No apto"); break;
//     case notaMedia=5: console.log("Apto"); break;
//     case notaMedia>5 && notaMedia<7: console.log("Notable"); break;
//     case notaMedia>=7: console.log("Sobresaliente"); break;
// }


//_________________________________________________________________________________________
//5. SEGÚN UNA VARIABLE dia Y OTRA mesNacimiento, CALCULAR EL HORÓSCOPO DE LA PERSONA


//_________________________________________________________________________________________
//6. SEGÚN UNA VAR LLAMADA numero, CALCULE SI ES PAR O IMPAR.

// var numero = 13305;

// numero % 2 == 0 ? console.log("Es par") : console.log("Es impar")


//_________________________________________________________________________________________
//7. USA UNA VARIABLE Y DI SI ES POSITIVO O NEGATIVO

// var num = -3;

// num > 0 ? console.log("positivo") : console.log("negativo")


//_________________________________________________________________________________________
//8. DI SI UN NÚMERO ES MAYOR DE 100

// var valor = 2022;

// if(valor > 100) {
//     console.log("es mayor que 100") 
// } else {
//     console.log("es menor que 100")
// }


//_________________________________________________________________________________________
//9. USA 3 VAR QUE CONTENGAN UN NÚMERO Y DI SI EL 3º ES IGUAL A LA SUMA DEL 1º  Y EL 2º

var prim = 4;
// var seg = 4;
// var terc = 8;

// var suma = prim + seg;

// suma === terc ? console.log("la suma de " + prim + " + " + seg + " es igual que " + terc)
// : console.log("son diferentes")


//_________________________________________________________________________________________
//10. CALCULAR SU ÁREA SEGÚN EL TIPO DE FIGURA GEOMÉTRICA.
// ÁREA DEL CUADRADO: LADO * LADO.
// ÁREA DEL CÍRCULO: PI * RADIO AL CUADRADO

// var square = {
//     sideOne: 2,
//     sideTwo: 3,
//     typeOfGemotricFigure: 'Cuadrado'
// }

// var circle = {
//     radius: 5,
//     typeOfGemotricFigure: 'Círculo'
// }

// var typeOfGemotricFigure = "Cuadrado";

// if (typeOfGemotricFigure === "Círculo") {
//     var resulta = Math.PI * (Math.pow(circle.radius, 2));
//     console.log(resulta);

// } else if(typeOfGemotricFigure === "Cuadrado") {
//     var result = square.sideOne * square.sideTwo;
//     console.log(result);
// }
