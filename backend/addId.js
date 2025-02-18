import mongoose from "mongoose";
import transactionModel from "./models/transactionModule.js";

// Function to generate an auto-increment ID
const generateAutoIncrementId = async () => {
  const lastTransaction = await transactionModel.findOne().sort({ id: -1 });
  return lastTransaction ? lastTransaction.id + 1 : 1; // Start from 1 if no transaction exists
};

const addIdToNewTransaction = async (req, res) => {
  try {
    const newId = await generateAutoIncrementId();

    const newTransaction = new transactionModel({
      name: req.body.name,
      type: req.body.type,
      amount: req.body.amount,
      date: req.body.date,
      status: req.body.status,
      category: req.body.category,
      id: newId,  // Set the auto-generated id
    });

    await newTransaction.save();
    res.json({ success: true, data: newTransaction });  // This sends the response
  } catch (err) {
    res.json({ success: false, message: "Error adding transaction", error: err });
  }
};

export { addIdToNewTransaction };
