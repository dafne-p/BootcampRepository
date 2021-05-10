var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

// ENCONTRAR LA POSICIÓN DE LAS LETRAS EN EL ALFABETO ORIGEN
var searchIndex = (alphabet, letter) => {
    for (var i = 0; i < alphabet.length; i++) {
        if (alphabet[i] === letter) return i;
    }
    return -1;
}

// ACCEDER AL ALFABETO DESTINO PARA CONOCER LA LETRA ENCRIPTADA
var transformLetter = (letter, inputText, outputText) => {
    var letterIndex = searchIndex(inputText, letter);
    if (letterIndex === -1) {
        return letter
    } else {
        return outputText[letterIndex];
    }
}

// PASAR A MINÚSCULAS, HACER STRING CON LAS LETRAS TRANSFORMADAS
var transformMessage = message => {
    var messageLowerCase = message.toLowerCase();
    var result = "";

    for (var letter of messageLowerCase) {
        result = result + transformLetter(letter, plainAlphabet, encryptedAlphabet);
    }
    return result;
}


function handlerEncrypt() {
    var texto;
    document.getElementById("textA").value = texto;
    transformMessage(texto);
}

document.getElementById("encryptBtn").addEventListener("click", handlerEncrypt);