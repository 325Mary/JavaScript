const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingresa un número: ", function(numero) {
  numero = parseInt(numero);

  if (!isNaN(numero)) {
    console.log("Números pares desde 1 hasta " + numero + ":");

    for (var i = 1; i <= numero; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }

    rl.close();
  } else {
    console.log("Debes ingresar un número válido.");
    rl.close();
  }
});
