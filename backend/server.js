import express from "express";
import cors from "cors";
import path from "path";
import connectDb from "./config/db.js";
import transactionRoutes from "./routes/transactionRoutes.js";

const app=express();
const port =4000;
// appling middle ware
app.use(cors());
app.use(express.json());

// Connecting to database
connectDb();

// Api Routes 
app.use("/api/transaction",transactionRoutes);

app.get("/",(req,res)=>{
    res.send("Api  is working at port 4000");
    
});

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})