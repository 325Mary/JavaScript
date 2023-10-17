function esParoImpar(numero) {

    if (numero % 2 === 0) {
        return "El numero es par";
    }
    else {
        return "El numero es impar";
    }

}

var numero = 7;

console.log(esParoImpar(numero));