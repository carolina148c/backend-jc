import * as resenaService from "../services/resenaService.js";

export const getResenas = async (req, res) => {
    try {
    const resenas = await resenaService.obtenerResenas();
    res.json(resenas);
    } catch (error) {
    res.status(500).json({ error: "Error al obtener las reseñas" });
    }
};

export const getResena = async (req, res) => {
    try {
    const resena = await resenaService.obtenerResenaPorId(req.params.id);
    if (!resena) return res.status(404).json({ error: "Reseña no encontrada" });
    res.json(resena);
    } catch (error) {
    res.status(500).json({ error: "Error al obtener la reseña" });
    }
};  

export const createResena = async (req, res) => {
    try {
    const { juegoId, puntuacion, textoReseña, horasJugadas, dificultad, recomendaria } = req.body;

    const nuevaResena = await resenaService.crearResena({
        juegoId,
        puntuacion,
        textoReseña,
        horasJugadas,
        dificultad,
        recomendaria,
    });

    res.status(201).json(nuevaResena);
    } catch (error) {
    res.status(400).json({ error: "Error al crear la reseña" });
    }
};

export const updateResena = async (req, res) => {
    try {
    const resena = await resenaService.actualizarResena(req.params.id, {
        ...req.body,
        fechaActualizacion: Date.now(),
    });
    if (!resena) return res.status(404).json({ error: "Reseña no encontrada" });
    res.json(resena);
    } catch (error) {
    res.status(400).json({ error: "Error al actualizar la reseña" });
    }
};

export const deleteResena = async (req, res) => {
    try {
    const eliminado = await resenaService.eliminarResena(req.params.id);
    if (!eliminado)
        return res.status(404).json({ error: "Reseña no encontrada" });
    res.json({ mensaje: "Reseña eliminada correctamente" });
    } catch (error) {
    res.status(500).json({ error: "Error al eliminar la reseña" });
    }
};
