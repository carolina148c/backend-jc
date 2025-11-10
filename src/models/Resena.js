import mongoose from "mongoose";

const resenaSchema = new mongoose.Schema(
    {
    juegoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Juego",
        required: true,
    },
    puntuacion: { type: Number, required: true, min: 1, max: 5 }, // 1-5 estrellas
    textoReseña: { type: String, required: true },
    horasJugadas: { type: Number, default: 0 },
    dificultad: {
        type: String,
        enum: ["Fácil", "Normal", "Difícil"],
        default: "Normal",
    },
    recomendaria: { type: Boolean, default: true },
    fechaCreacion: { type: Date, default: Date.now },
    fechaActualizacion: { type: Date, default: Date.now },
    },
    { versionKey: false }
);

// Actualiza automáticamente la fecha de modificación
resenaSchema.pre("save", function (next) {
    this.fechaActualizacion = Date.now();
    next();
});

const Resena = mongoose.model("Resena", resenaSchema);
export default Resena;
