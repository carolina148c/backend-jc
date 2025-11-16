import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async (attempt = 1) => {
  try {
    console.log(`📡 Intento ${attempt}: Conectando a MongoDB Atlas...`);
    const mongooseInstance = await mongoose.connect(process.env.MONGO_URI, {
      retryWrites: true,
      w: "majority",
      serverSelectionTimeoutMS: 3000,
      socketTimeoutMS: 45000,
      family: 4,
    });
    console.log("✅ Conectado a MongoDB Atlas");
    return mongooseInstance;
  } catch (error) {
    console.error(`❌ Error Atlas (intento ${attempt}):`, error.message);
    
    // Si falla Atlas después de 2 intentos, intentar conexión local
    if (attempt >= 2) {
      try {
        console.log("\n📡 Intentando conexión a MongoDB local...");
        const localUri = "mongodb://localhost:27017/ProyectoFinal";
        const mongooseInstance = await mongoose.connect(localUri, {
          serverSelectionTimeoutMS: 3000,
          socketTimeoutMS: 45000,
        });
        console.log("✅ Conectado a MongoDB local (fallback)");
        return mongooseInstance;
      } catch (localError) {
        console.error("❌ Error local:", localError.message);
        console.log("⚠️  Reintentando conexión Atlas en 5 segundos...");
        setTimeout(() => connectDB(1), 5000);
      }
    } else {
      console.log(`⚠️  Reintentando conexión Atlas en 5 segundos... (intento ${attempt + 1})`);
      setTimeout(() => connectDB(attempt + 1), 5000);
    }
  }
};

export default connectDB;
