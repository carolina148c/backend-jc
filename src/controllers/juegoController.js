import * as juegoService from "../services/juegoService.js";

export const getJuegos = async (req, res) => {
    try {
    const juegos = await juegoService.obtenerJuegos();
    res.json(juegos);
    } catch (error) {
    res.status(500).json({ error: "Error al obtener los juegos" });
    }
};

export const getJuego = async (req, res) => {
    try {
    const juego = await juegoService.obtenerJuegoPorId(req.params.id);
    if (!juego) return res.status(404).json({ error: "Juego no encontrado" });
    res.json(juego);
    } catch (error) {
    res.status(500).json({ error: "Error al obtener el juego" });
    }
};

export const createJuego = async (req, res) => {
    try {
    const { titulo, genero, plataforma, añoLanzamiento, desarrollador, imagenPortada, descripcion, completado } = req.body;

    const nuevoJuego = await juegoService.crearJuego({
        titulo,
        genero,
        plataforma,
        añoLanzamiento,
        desarrollador,
        imagenPortada,
        descripcion,
        completado,
    });

    res.status(201).json(nuevoJuego);
    } catch (error) {
    res.status(400).json({ error: "Error al crear el juego" });
    }
};

export const updateJuego = async (req, res) => {
    try {
    const juego = await juegoService.actualizarJuego(req.params.id, req.body);
    if (!juego) return res.status(404).json({ error: "Juego no encontrado" });
    res.json(juego);
    } catch (error) {
    res.status(400).json({ error: "Error al actualizar el juego" });
    }
};

export const deleteJuego = async (req, res) => {
    try {
    const eliminado = await juegoService.eliminarJuego(req.params.id);
    if (!eliminado)
        return res.status(404).json({ error: "Juego no encontrado" });
    res.json({ mensaje: "Juego eliminado correctamente" });
    } catch (error) {
    res.status(500).json({ error: "Error al eliminar el juego" });
    }
};
