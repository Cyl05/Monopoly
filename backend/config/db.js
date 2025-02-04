import mongoose from 'mongoose';
import env from "dotenv";

env.config();

// connectDB function connects to the DB 🤯
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected");
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}