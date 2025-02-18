import express from "express";

import { addTransaction, deleteTransaction, editTransaction, getTransactions } from "../controllers/transactionController.js";

const transactionRouter=express.Router();

transactionRouter.post("/add",addTransaction);
transactionRouter.get("/get",getTransactions);
transactionRouter.put("/edit",editTransaction);
transactionRouter.post("/delete/:id",deleteTransaction);
export default transactionRouter;