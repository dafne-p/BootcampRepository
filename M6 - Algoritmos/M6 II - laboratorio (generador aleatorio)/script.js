var randomPick = (n, min, max) => {
    var range = max - min + 1;
    var array = [];

    while (array.length < n) {
 
        var randomsito = Math.floor(Math.random() * range) + min;
        console.log(randomsito)

        if (array.indexOf(randomsito) === -1) {
            array.push(randomsito)
        }

    }

    return array;
}

console.log("resultado de randompick: ", randomPick(10, 1, 100));