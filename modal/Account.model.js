const mongoose= require("mongoose");

const AccountSchema= mongoose.Schema({
    "name":String,
    "gender":String,
    "dob":String,
    "email":String, 
    "mobile":Number, 
    "address":String, 
    "initialBalance":Number,
    "adharNo":Number, 
    "panNo":String,
    "isOpen":Boolean
},{
    versionKey:false
});

const AccountModel=mongoose.model("account",AccountSchema);

module.exports={AccountModel};