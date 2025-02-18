import mongoose from "mongoose";
import dotenv from "dotenv";
import transactionModel from "../models/transactionModule.js";
dotenv.config(); 

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        
        console.log("Connected to Database Successfully");
    } catch (err) {
        console.error("Error while connecting to Database:", err);
    }
};

export default connectDb;
