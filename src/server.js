import dotenv from "dotenv";
import app from "./app.js";
import conectarDB from "./config/db.js";

dotenv.config(); // Carga las variables de entorno del archivo .env

// Conexión a la base de datos MongoDB Atlas
conectarDB();

// Puerto desde .env o por defecto 4000
const PORT = process.env.PORT || 4000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
