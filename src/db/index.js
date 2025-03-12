import mongoose from "mongoose";
import express from "express"

import { DB_NAME } from "../constants.js";

const app = express()
const port = process.env.PORT
const db_uri = process.env.MONGODB_URI

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${db_uri}/${DB_NAME}`) // return type Obj
        console.log(`\n MongoDB connected || DB HOST: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.error("DB connection error: ", error)
        // throw error
        process.exit(1) // explore later
    }
}

export default connectDB