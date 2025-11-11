import Resena from "../models/Resena.js";

// Obtener todas las reseñas
export const obtenerResenas = async (req, res) => {
    try {
    const resenas = await Resena.find().populate("juegoId", "titulo plataforma genero");
    res.json(resenas);
} catch (error) {
    res.status(500).json({ error: "Error al obtener las reseñas" });
}
};

// Obtener reseñas por juego
export const obtenerResenasPorJuego = async (req, res) => {
    try {
    const resenas = await Resena.find({ juegoId: req.params.juegoId });
    res.json(resenas);
} catch (error) {
    res.status(400).json({ error: "Error al obtener reseñas del juego" });
}
};

// Crear una nueva reseña
export const crearResena = async (req, res) => {
    try {
    const nuevaResena = new Resena(req.body);
    await nuevaResena.save();
    res.status(201).json(nuevaResena);
} catch (error) {
    res.status(400).json({ error: "Error al crear la reseña" });
}
};

// Actualizar una reseña
export const actualizarResena = async (req, res) => {
    try {
    const resenaActualizada = await Resena.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!resenaActualizada) return res.status(404).json({ error: "Reseña no encontrada" });
    res.json(resenaActualizada);
} catch (error) {
    res.status(400).json({ error: "Error al actualizar la reseña" });
}
};

// Eliminar una reseña
export const eliminarResena = async (req, res) => {
    try {
    const eliminada = await Resena.findByIdAndDelete(req.params.id);
    if (!eliminada) return res.status(404).json({ error: "Reseña no encontrada" });
    res.json({ mensaje: "Reseña eliminada correctamente" });
} catch (error) {
    res.status(400).json({ error: "Error al eliminar la reseña" });
}
};
