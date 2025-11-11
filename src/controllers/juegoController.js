import Juego from "../models/Juego.js";

// Obtener todos los juegos
export const obtenerJuegos = async (req, res) => {
  try {
    const juegos = await Juego.find().sort({ fechaCreacion: -1 });
    res.json(juegos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los juegos" });
  }
};

// Obtener un juego por ID
export const obtenerJuegoPorId = async (req, res) => {
  try {
    const juego = await Juego.findById(req.params.id);
    if (!juego) return res.status(404).json({ error: "Juego no encontrado" });
    res.json(juego);
  } catch (error) {
    res.status(400).json({ error: "ID inválido o error en la búsqueda" });
  }
};

// Crear nuevo juego
export const crearJuego = async (req, res) => {
  try {
    const nuevoJuego = new Juego(req.body);
    await nuevoJuego.save();
    res.status(201).json(nuevoJuego);
  } catch (error) {
    res.status(400).json({ error: "Error al crear el juego" });
  }
};

// Actualizar juego existente
export const actualizarJuego = async (req, res) => {
  try {
    const juegoActualizado = await Juego.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!juegoActualizado) return res.status(404).json({ error: "Juego no encontrado" });
    res.json(juegoActualizado);
  } catch (error) {
    res.status(400).json({ error: "Error al actualizar el juego" });
  }
};

// Eliminar juego
export const eliminarJuego = async (req, res) => {
  try {
    const eliminado = await Juego.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ error: "Juego no encontrado" });
    res.json({ mensaje: "Juego eliminado correctamente" });
  } catch (error) {
    res.status(400).json({ error: "Error al eliminar el juego" });
  }
};
