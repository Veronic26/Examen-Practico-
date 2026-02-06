/**
 * Proyecto REST + TDD
 * Autor: Veronica Thalia Campoverde Maza
 */

const express = require('express');
const cors = require('cors');
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
const userRoutes = require('./routes/users.routes');
app.use('/api/users', userRoutes);

// Puerto
const PORT = 3000;

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
