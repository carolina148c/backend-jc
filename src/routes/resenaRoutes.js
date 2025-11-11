import express from "express";
import {
    obtenerResenas,
    obtenerResenasPorJuego,
    crearResena,
    actualizarResena,
    eliminarResena,
} from "../controllers/resenaController.js";

const router = express.Router();

// Endpoints de reseñas
router.get("/", obtenerResenas); // Obtener todas las reseñas
router.get("/juego/:juegoId", obtenerResenasPorJuego); // Reseñas por juego
router.post("/", crearResena); // Crear nueva reseña
router.put("/:id", actualizarResena); // Actualizar reseña
router.delete("/:id", eliminarResena); // Eliminar reseña

export default router;
