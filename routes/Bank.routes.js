const express = require("express");
const { AccountModel } = require("../modal/Account.model");




const AccountRouter= express.Router();

// below code can be used to get all products which are added by doctors ---------------->
AccountRouter.post("/create",async(req,res)=>{
    const {ID}= req.body;
    if(ID){
    try{
        await AccountModel.findByIdAndUpdate({_id:ID},{isOpen:true});
        res.send({"msg":"Account already exist"})
    }catch(err){
        res.send({"msg":"somthing went wrong!","error":err.message})
    }
    }else{
        const payload=req.body;
        try{
            const account = new AccountModel(payload);
            await account.save();
            res.send({"msg":"Account Created"})
        }catch(err){
            res.send({"msg":"Cannot Create Account","error":err.message})
        } 
    }
})
 



module.exports = {AccountRouter}