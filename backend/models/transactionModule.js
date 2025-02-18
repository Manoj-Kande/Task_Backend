import mongoose  from "mongoose";
  
const transactionSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    type:{
        type:String,
    },
    amount:{
        type:String,
    },
    date:{
        type:String,
    },
    status:{
        type:String
    },
    category:{
        type:String
    }

});

const transactionModel= mongoose.models.transactions ||  mongoose.model("transactions",transactionSchema);
export default transactionModel;