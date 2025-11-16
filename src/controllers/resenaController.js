import Resena from "../models/Resena.js";
import Juego from "../models/Juego.js";

// Obtener todas las reseñas con información del juego
export const obtenerResenas = async (req, res) => {
    try {
        const resenas = await Resena.find().populate("juegoId");
        res.json(resenas);
    } catch (error) {
        console.error("Error al obtener reseñas:", error);
        res.status(500).json({ error: "Error al obtener las reseñas" });
    }
};

// Obtener reseñas por ID del juego
export const obtenerResenasPorJuego = async (req, res) => {
    try {
        const juegoId = req.params.juegoNombre; // Para compatibilidad, aunque el nombre es confuso
        const resenas = await Resena.find({ juegoId }).populate("juegoId");
        res.json(resenas);
    } catch (error) {
        console.error("Error al obtener reseñas del juego:", error);
        res.status(400).json({ error: "Error al obtener reseñas del juego" });
    }
};

// Crear una nueva reseña
export const crearResena = async (req, res) => {
    try {
        const body = { ...req.body };

        console.log("📝 Body recibido:", body);

        // Si envían juegoId, usarlo directamente; si envían juegoNombre, resolver
        if (body.juegoId && body.juegoId !== "") {
            console.log(`✅ juegoId recibido: ${body.juegoId}`);
        } else if (body.juegoNombre && body.juegoNombre !== "") {
            console.log(`🔍 Buscando juego por nombre: "${body.juegoNombre}"`);
            const juego = await Juego.findOne({ titulo: body.juegoNombre });
            if (juego) {
                body.juegoId = juego._id;
                console.log(`✅ Juego encontrado: ${body.juegoNombre} (ID: ${juego._id})`);
            } else {
                console.warn(`⚠️ Juego no encontrado: "${body.juegoNombre}". Se guardará sin juegoId.`);
            }
        } else {
            console.warn("⚠️ Ni juegoId ni juegoNombre proporcionados.");
        }

        const nuevaResena = new Resena(body);
        await nuevaResena.save();
        await nuevaResena.populate("juegoId");
        console.log(`✅ Reseña guardada:`, nuevaResena);
        res.status(201).json(nuevaResena);
    } catch (error) {
        console.error("❌ Error al crear reseña:", error.message);
        res.status(400).json({ error: "Error al crear la reseña", details: error.message });
    }
};

// Actualizar una reseña
export const actualizarResena = async (req, res) => {
    try {
        const resenaActualizada = await Resena.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        ).populate("juegoId");

        if (!resenaActualizada) {
            return res.status(404).json({ error: "Reseña no encontrada" });
        }

        res.json(resenaActualizada);
    } catch (error) {
        console.error("Error al actualizar reseña:", error);
        res.status(400).json({ error: "Error al actualizar la reseña", details: error.message });
    }
};

// Eliminar una reseña
export const eliminarResena = async (req, res) => {
    try {
        const eliminada = await Resena.findByIdAndDelete(req.params.id);

        if (!eliminada) {
            return res.status(404).json({ error: "Reseña no encontrada" });
        }

        res.json({ mensaje: "Reseña eliminada correctamente" });
    } catch (error) {
        console.error("Error al eliminar reseña:", error);
        res.status(400).json({ error: "Error al eliminar la reseña", details: error.message });
    }
};
