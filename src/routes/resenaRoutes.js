import express from "express";
import {
    obtenerResenas,
    obtenerResenasPorJuego,
    crearResena,
    actualizarResena,
    eliminarResena,
} from "../controllers/resenaController.js";

const router = express.Router();

// Obtener todas las reseñas
router.get("/", obtenerResenas);

// Obtener reseñas por nombre del juego 
router.get("/juego/:juegoNombre", obtenerResenasPorJuego);

// Crear una reseña
router.post("/", crearResena);

// Editar una reseña
router.put("/:id", actualizarResena);

// Eliminar una reseña
router.delete("/:id", eliminarResena);

export default router;
