import mongoose from "mongoose";

const juegoSchema = new mongoose.Schema(
    {
    titulo: { type: String, required: true },
    genero: { type: String, required: true },              // Ej: "Acción", "RPG"
    plataforma: { type: String, required: true },          // Ej: "PC", "PlayStation"
    añoLanzamiento: { type: Number },
    desarrollador: { type: String },
    imagenPortada: { type: String },                       // URL de la portada
    descripcion: { type: String },
    completado: { type: Boolean, default: false },
    fechaCreacion: { type: Date, default: Date.now },
    },
    { versionKey: false } 
);

const Juego = mongoose.model("Juego", juegoSchema);
export default Juego;
