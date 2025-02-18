import transactionModel from "../models/transactionModule.js";

const addTransaction = async (req, res) => {
  const transaction = new transactionModel({
    name: req.body.name,
    type: req.body.type,
    amount: req.body.amount,
    date: req.body.date,
    status: req.body.status,
    category: req.body.category,
  });
  try {
    transaction.save();
    res.json({ success: true, message: "Transaction added successfully" });
  } catch (err) {
    console.log("error while saving the transaction in the adding time");
    res.json({ success: false, message: "Error", error: err });
  }
};

const editTransaction = async (req, res) => {
  const id = req.body._id;

  transactionModel
    .findByIdAndUpdate(id, req.body, { new: true })
    .then((updatedTransaction) => {
      if (!updatedTransaction) {
        return res.status(404).json({ message: "Transaction not found" });
      }
      res.json(updatedTransaction);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: "Error updating transaction", details: err });
    });
};

const getTransactions= async (req,res)=>{
    try {
        const transactions=await transactionModel.find({});
        res.json({success:true,data:transactions});
    } catch (err) {
        console.log("error while fetching the food list");
        console.log(err);
        res.json({success:false,message:"Error",error:err});
    }
}

const deleteTransaction = async (req,res)=>{
    try {
        
        const id=Number(req.params.id);
        const transaction = await transactionModel.findOneAndDelete({ id: id })
        .then(()=>{
            console.log("Deleted Data Successfully");
        })
        .catch((err)=>{
            console.log("Error while deleting the date");
            console.log(err);
        });
        res.json({success:true,message:"Food Removed"});
    } catch (err) {
        console.log("error while deleting the error");
        console.log(err);
        res.json({success:false,message:"Error",error:err});
    }
}

export { addTransaction ,editTransaction,getTransactions,deleteTransaction};
