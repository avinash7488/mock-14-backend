const mongoose= require("mongoose");

const LedgerSchema= mongoose.Schema({
    deposit:String,
    withdraw: String,
    transfer: Object
},{
    versionKey:false
});

const LedgerModel=mongoose.model("ledger",LedgerSchema);

module.exports={LedgerModel};