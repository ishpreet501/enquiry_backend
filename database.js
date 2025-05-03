import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config()

const URI = process.env.URI

export async function dbconnection() {
  try {
    await mongoose.connect(URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
}
