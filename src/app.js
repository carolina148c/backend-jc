import express from "express";
import cors from "cors";
import path from "path";
import juegoRoutes from "./routes/juegoRoutes.js"; // Rutas de juegos
import resenaRoutes from "./routes/resenaRoutes.js"; // Rutas de reseñas

const app = express();

app.use(cors());
app.use(express.json());
// Servir archivos estáticos subidos (portadas)
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// Healthcheck
app.get("/api/health", (req, res) => res.json({ status: "ok", ts: new Date().toISOString() }));

//RUTAS
app.use("/api/juegos", juegoRoutes);
app.use("/api/resenas", resenaRoutes);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({ error: err.message || "Error interno del servidor" });
});

export default app;
