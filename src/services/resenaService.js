import Resena from "../models/Resena.js";

export const obtenerResenas = async () =>
    await Resena.find().populate("juegoId", "titulo genero plataforma imagenPortada");

export const obtenerResenaPorId = async (id) =>
    await Resena.findById(id).populate("juegoId", "titulo genero plataforma imagenPortada");

export const crearResena = async (data) => await Resena.create(data);

export const actualizarResena = async (id, data) =>
    await Resena.findByIdAndUpdate(id, data, { new: true });

export const eliminarResena = async (id) => await Resena.findByIdAndDelete(id);
