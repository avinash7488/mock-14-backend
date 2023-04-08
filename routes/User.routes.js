const express = require("express");
const bcrypt = require("bcrypt");
const { UserModel } = require("../modal/User.model");




const userRouter= express.Router();

// below code can be used to get all products which are added by users ---------------->
userRouter.get("/",async(req,res)=>{
    const userID=req.body.userID;
    try{
        const user = await UserModel.find({userID});
        res.send(user)
    }catch(err){
        res.send({"msg":"somthing went wrong! cannot Get User","error":err.message})
    }
})
 


userRouter.post("/calculator",async(req,res)=>{
    const {p,i,n}=req.body;
    const r=i/100
    try{
        const F= Math.floor(p*((((1+r)**n)-1)/r));
        const TI = p*n;
        const TG = F - TI;
        const obj = {total_Investment_Amount:TI,
            total_Interest_Gained:TG,
            total_Maturity_Value:F};
        res.send(obj)
    }catch(err){
        res.send({"msg":"cannot Calculate","error":err.message})
    }
})




// below code can be used to Logout Account by users---------------->
userRouter.patch("/logout",async(req,res)=>{
    const userID=req.body.userID;
    try{
        await UserModel.findByIdAndUpdate({_id:userID},{is_active:false});
        res.send({"msg":"Your account is logged out"})
    }catch(err){
        res.send({"msg":"somthing went wrong! cannot logout Account","error":err.message})
    }
})

module.exports = {userRouter}