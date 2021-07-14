/* n define el tamaño*/
/* char es el caracter*/

//1. CUADRADO

// var square = (n, char) => {
//    var str = "";

//    for (var fila = 1; fila <= n; fila++) {
//       str = "";
//       for (var col = 1; col <= n; col++) {
//          str += char;
//       }
//       console.log(str)
//    }
// }
// square(3, "*");


// ________________________________________________________________________________________________________________
//2. CUADRADO CON BORDE

// var squareWithBorder = (n, charBorder, charInner) => {

//    for (fila = 1; fila <= n; fila++) {
//       if(fila === 1 || fila === n) {
//          console.log(createBorder(n, charBorder))
//       } else {
//          console.log(createInner(n, charBorder, charInner))
//       }
//    }
// }

// var createBorder = (n, charBorder) => {
//    var str = "";
//    for (i = 1; i <= n; i++) {
//       str += charBorder;
//    }
//    return str;
// }
 
// var createInner = (n, charBorder, charInner) => {
//    var str = "";
//    for (j = 1; j <= n; j++) {
//       switch(j) {
//          case 1: str += charBorder; break;
//          case n: str += charBorder; break;
//          default: str += charInner; break;
//       }
//    }
//    return str;
// }
// squareWithBorder(8, "B", "*")

// ________________________________________________________________________________________________________________
//3. CUADRADO DIAGONAL LEFT-RIGHT

var squareDiagonalLR = (n, charDiagonal, charUp, charDown) => {

   for (var fila = 1; fila <= n; fila++) {
      console.log(createFila(n, charDiagonal, charUp, charDown))
   }
}

// var createBorder = (n, charDiagonal) => {
//    var str = "";
//    for (i = 1; i <= n; i++) {
//      str += charDiagonal;
//    }
//    return str;
// }


var createFila = (n, charDiagonal, charUp, charDown) => {
   var str = "";
   for (var j = 1; j <= n; j++) {
      if (j > n) {
         str += charUp
      } else if (j < n) {
         str += charDown
      } else if (j === n) {
         str += charDiagonal
      } else {
         console.log("nop");
      }
   }
   return str;
}

squareDiagonalLR(5, "\\", "A", "B");


// ________________________________________________________________________________________________________________
//4. CUADRADO DIAGONAL RIGHT-LEFT



// ________________________________________________________________________________________________________________
//5. MEDIO DIAMANTE

// var halfDiamond = (n, char) => {

// }
// halfDiamond(3, "*")


// ________________________________________________________________________________________________________________
//6. PIRÁMIDE

// var pyramid = (n, char) => {

// }   
// pyramid(5, "*")


// ________________________________________________________________________________________________________________
//7. DIAMANTE

// var diamond = (n, char) => {
   
// }
// diamond(4, "*")