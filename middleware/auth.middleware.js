const jwt = require("jsonwebtoken");
const { AccountModel } = require("../modal/Account.model");

const auth = async(req,res,next)=>{
    const {email}= req.body;
    const account = await AccountModel.find({email});
    if(account.length>0){
        const {_id}= account[0];
        req.body.ID=_id;
        next();
    }
    else{
        next();
        }
    }


module.exports={auth}