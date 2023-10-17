function sumArreglo(arreglo) {
    var suma = 0;
    for (var i = 0; i < arreglo.length; i++) {
      suma += arreglo[i];
    }
    return suma;
  }
  
  var Arreglo = [1, 2, 3, 4, 5];
  var resultado = sumArreglo(Arreglo);
  console.log("La suma de los elementos del arreglo es: " + resultado); // Esto mostrará "La suma de los elementos del arreglo es: 15" en la consola
  