import mongoose from "mongoose";

const resenaSchema = new mongoose.Schema({
    juegoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Juego",
    required: true,
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
    fechaCreacion: {
    type: Date,
    default: Date.now,
    },
    fechaActualizacion: {
    type: Date,
    default: Date.now,
    },
});

// Middleware para actualizar fechaActualizacion en cada modificación
resenaSchema.pre("findOneAndUpdate", function (next) {
    this.set({ fechaActualizacion: new Date() });
    next();
});

export default mongoose.model("Resena", resenaSchema);
