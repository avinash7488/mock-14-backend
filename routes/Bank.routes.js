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
 




// userRouter.patch("/logout",async(req,res)=>{
//     const userID=req.body.userID;
//     try{
//         await UserModel.findByIdAndUpdate({_id:userID},{is_active:false});
//         res.send({"msg":"Your account is logged out"})
//     }catch(err){
//         res.send({"msg":"somthing went wrong! cannot logout Account","error":err.message})
//     }
// })

// AccountRouter.post("/dashboard",async(req,res)=>{
//     const payload=req.body;
//     try{
//         const account = new AccountModel(payload);
//         await account.save();
//         res.send({"msg":"account Created"})
//     }catch(err){
//         res.send({"msg":"Cannot Create account","error":err.message})
//     }
// })


// const express = require("express");
// const bcrypt = require("bcrypt");
// const { UserModel } = require("../modal/User.model");




// const userRouter= express.Router();



 


// userRouter.post("/calculator",async(req,res)=>{
//     const {p,i,n}=req.body;
//     const r=i/100
//     try{
//         const F= Math.floor(p*((((1+r)**n)-1)/r));
//         const TI = p*n;
//         const TG = F - TI;
//         const obj = {total_Investment_Amount:TI,
//             total_Interest_Gained:TG,
//             total_Maturity_Value:F};
//         res.send(obj)
//     }catch(err){
//         res.send({"msg":"cannot Calculate","error":err.message})
//     }
// })



module.exports = {AccountRouter}