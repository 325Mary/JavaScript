var productos = [
    { nombre: "Producto 1", precio: 10.99, stock: 20 },
    { nombre: "Producto 2", precio: 5.99, stock: 30 },
    { nombre: "Producto 3", precio: 8.49, stock: 15 },
    { nombre: "Producto 4", precio: 12.99, stock: 10 }
  ];
  
  // Listar los productos con su información
  productos.forEach(function(producto) {
    console.log("Nombre: " + producto.nombre);
    console.log("Precio: $" + producto.precio);
    console.log("Cantidad en stock: " + producto.stock);
    console.log("--------------------");
  });
  