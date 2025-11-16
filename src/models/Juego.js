import mongoose from "mongoose";

const juegoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  genero: { type: String, required: true },
  plataforma: { type: String, required: true },
  anoLanzamiento: { type: Number, required: false },
  desarrollador: { type: String, required: true },
  imagenPortada: { type: String, required: true },
  descripcion: { type: String, required: true },
  completado: { type: Boolean, default: false }
});

export default mongoose.model("Juego", juegoSchema);
