import express from "express";
import cors from "cors";
import juegoRoutes from "./routes/juegoRoutes.js"; // ✅ importa las rutas reales de juegos
import resenaRoutes from "./routes/resenaRoutes.js"; // esta la haremos más adelante

const app = express();

app.use(cors());
app.use(express.json());

// Healthcheck
app.get("/api/health", (req, res) => res.json({ status: "ok", ts: new Date().toISOString() }));

// ✅ Monta las rutas de juegos y reseñas
app.use("/api/juegos", juegoRoutes);
app.use("/api/resenas", resenaRoutes);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({ error: err.message || "Error interno del servidor" });
});

export default app;
