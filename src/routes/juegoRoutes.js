import express from "express";
import {
    getJuegos,
    getJuego,
    createJuego,
    updateJuego,
    deleteJuego,
} from "../controllers/juegoController.js";

const router = express.Router();

router.get("/", getJuegos);
router.get("/:id", getJuego);
router.post("/", createJuego);
router.put("/:id", updateJuego);
router.delete("/:id", deleteJuego);

export default router;
