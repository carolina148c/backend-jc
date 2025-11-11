import Juego from "../models/Juego.js";

// Obtener todos los juegos
export const obtenerJuegos = async () => {
  return await Juego.find();
};

// Obtener un juego por ID
export const obtenerJuegoPorId = async (id) => {
  return await Juego.findById(id);
};

// Crear un nuevo juego
export const crearJuego = async (data) => {
  const nuevoJuego = new Juego(data);
  return await nuevoJuego.save();
};

// Actualizar un juego
export const actualizarJuego = async (id, data) => {
  return await Juego.findByIdAndUpdate(id, data, { new: true });
};

// Eliminar un juego
export const eliminarJuego = async (id) => {
  return await Juego.findByIdAndDelete(id);
};
