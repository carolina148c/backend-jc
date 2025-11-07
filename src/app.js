const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL;

// Middleware para procesar JSON
app.use(express.json());

// Conexión a MongoDB

// Ruta base de prueba
app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

// Puerto
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
