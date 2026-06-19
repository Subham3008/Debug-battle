import mongoose from "mongoose"
import env from "./env.js"
import logger from "./logger.js"

export const connectDB = async () => {
  try {
    await mongoose.connect(env.MONGO_URI)
    logger.info("mongodb connected.");
  } catch (error) {
    logger.error("Error in mongodb.");
  }
}