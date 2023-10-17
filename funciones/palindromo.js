function esPalindromo(cadena) {
    // Elimina espacios en blanco y convierte la cadena a minúsculas
    cadena = cadena.replace(/\s/g, '').toLowerCase();
  
    // Invierte la cadena
    var cadenaInvertida = cadena.split('').reverse().join('');
  
    // Compara la cadena original con la cadena invertida
    return cadena === cadenaInvertida;
  }
  
  // Ejemplo de uso:
  var palabra = "reconocer";
    // var palabra = "amor"
  if (esPalindromo(palabra)) {
    console.log(palabra + " es un palíndromo.");
  } else {
    console.log(palabra + " no es un palíndromo.");
  }
  