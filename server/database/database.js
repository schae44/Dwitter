import Mongoose from "mongoose";
import { config } from "../config.js";

let db;
export async function connectDB() {
  return Mongoose.connect(config.db);
}
