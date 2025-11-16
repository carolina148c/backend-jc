import mongoose from "mongoose";

const resenaSchema = new mongoose.Schema({
    juegoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Juego",
        required: false,
    },
    juegoNombre: {
        type: String,
        required: false,
    },
    puntuacion: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    textoResena: {
        type: String,
        required: true,
    },
    horasJugadas: {
        type: Number,
        default: 0,
    },
    dificultad: {
        type: String,
        enum: ["Fácil", "Normal", "Difícil"],
        default: "Normal",
    },
    recomendaria: {
        type: Boolean,
        default: true,
    },
});

export default mongoose.model("Resena", resenaSchema);
