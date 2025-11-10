import express from "express";
import {
    getResenas,
    getResena,
    createResena,
    updateResena,
    deleteResena,
} from "../controllers/resenaController.js";

const router = express.Router();

router.get("/", getResenas);
router.get("/:id", getResena);
router.post("/", createResena);
router.put("/:id", updateResena);
router.delete("/:id", deleteResena);

export default router;
