import Juego from "../models/Juego.js";

export const obtenerJuegos = async () => await Juego.find();

export const obtenerJuegoPorId = async (id) => await Juego.findById(id);

export const crearJuego = async (data) => await Juego.create(data);

export const actualizarJuego = async (id, data) =>
    await Juego.findByIdAndUpdate(id, data, { new: true });

export const eliminarJuego = async (id) => await Juego.findByIdAndDelete(id);
