// function ordenarDescendente(arreglo) {
//     // Utilizamos el método sort para ordenar los números de forma descendente
//     // Restamos b de a para lograr el orden descendente
//     return arreglo.sort((a, b) => b - a);
//   }
  
//   var numeros = [5, 2, 8, 1, 9, 4];
//   var numerosOrdenados = ordenarDescendente(numeros);
//   console.log("Números ordenados de forma descendente: " + numerosOrdenados);
  

function ordenarDescendente(arreglo) {
     return arreglo.sort((a, b) => b - a);
  }

  var numeros = [5, 2, 8, 1, 9, 4];
  var numerosOrdenados = ordenarDescendente(numeros);
  
  console.log("Números ordenados de forma descendente:");
  for (var i = 0; i < numerosOrdenados.length; i++) {
    console.log(numerosOrdenados[i]);
  }
  