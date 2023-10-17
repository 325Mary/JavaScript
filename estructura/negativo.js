function  positivoNegativoCero(num) {
    if (num > 0) {
        return "Numero positivo";
    }
    else if (num < 0) {
        return "numero negativo";
    }
    else {
        return "numero es cero";
    }
    
}

var num = 0;
console.log(positivoNegativoCero(num));