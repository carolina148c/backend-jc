import express from "express";
import multer from "multer";
import path from "path";
import {
  obtenerJuegos,
  obtenerJuegoPorId,
  crearJuego,
  actualizarJuego,
  eliminarJuego,
} from "../controllers/juegoController.js";

const router = express.Router();

// Configuración de multer para subir imágenes a /uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(process.cwd(), 'uploads'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const safeName = file.originalname.replace(/[^a-z0-9.\-\_]/gi, '_');
    cb(null, `${uniqueSuffix}-${safeName}`);
  },
});

const upload = multer({ storage });

// Rutas para CRUD de juegos
router.get("/", obtenerJuegos);
router.get("/:id", obtenerJuegoPorId);
// Para crear/editar con imagen usar 'imagen' como field name
router.post("/", upload.single('imagen'), crearJuego);
router.put("/:id", upload.single('imagen'), actualizarJuego);
router.delete("/:id", eliminarJuego);

export default router;
