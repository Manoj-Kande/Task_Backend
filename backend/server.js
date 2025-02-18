import express from "express";
import cors from "cors";
import connectDb from "./config/db.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import transactionModel from "./models/transactionModule.js";
import { addIdToNewTransaction } from "./addId.js";

const app = express();
const port = 4000;

// Applying middleware
app.use(cors());
app.use(express.json());

// Connecting to database
connectDb();

// API Routes
app.use("/api/transaction", transactionRoutes);

app.get("/", async (req, res) => {
  try {
    // Call the function, which will handle sending the response
    await addIdToNewTransaction(req, res);
  } catch (err) {
    res.status(500).send("Error in adding transaction");
  }
});

const addData=async ()=>{
    await transactionModel.insertMany([
        {
          name: "Grocery Shopping",
          type: "Expense",
          amount: "1500",
          date: "2025-02-18",
          status: "Completed",
          category: "Food",
          id: 1
        },
        {
          name: "Salary Credit",
          type: "Income",
          amount: "50000",
          date: "2025-02-01",
          status: "Completed",
          category: "Salary",
          id: 2
        },
        {
          name: "Electricity Bill",
          type: "Expense",
          amount: "2000",
          date: "2025-02-10",
          status: "Pending",
          category: "Utilities",
          id: 3
        },
        {
          name: "Movie Night",
          type: "Expense",
          amount: "800",
          date: "2025-02-15",
          status: "Completed",
          category: "Entertainment",
          id: 4
        },
        {
          name: "Freelance Work",
          type: "Income",
          amount: "10000",
          date: "2025-02-12",
          status: "Completed",
          category: "Freelance",
          id: 5
        }
    ])
    .then(()=>{
        console.log("Data inserted successfully");
    })
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
