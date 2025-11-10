import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";


dotenv.config();
const app = express();

// Middlewares
app.use(express.json());

// Conectar a MongoDB
connectDB();

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("Servidor conectado y MongoDB funcionando.");
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
