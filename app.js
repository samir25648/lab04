const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.listen(5000, () => {
  console.log('Servidor iniciado en el puerto 5000');
});

// Ruta principal
app.get('/', (req, res) => {
  res.render('index');
});

// Ruta de clientes
app.get('/clientes', (req, res) => {
  const clientes = [
    { nombre: 'Samir', Apellido: 'Alanya' },
    { nombre: 'Jorge', Apellido: 'Ramirez' },
    { nombre: 'Luis', Apellido: 'Escobar' }
  ];
  res.render('clientes', { clientes });
});

// Ruta de productos
app.get('/productos', (req, res) => {
  const productos = [
    { nombre: 'Laptop', precio: 1000 },
    { nombre: 'Televisor', precio: 2000 },
    { nombre: 'Licuadora', precio: 3000 }
  ];
  res.render('productos', { productos });
});