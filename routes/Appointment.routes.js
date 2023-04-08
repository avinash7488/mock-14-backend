const express = require("express");
const bcrypt = require("bcrypt");
const { AppointmentModel } = require("../modal/Appointment.model");




const AppointmentsRouter= express.Router();

// below code can be used to get all products which are added by doctors ---------------->
AppointmentsRouter.get("/get",async(req,res)=>{
    const userID=req.body.userID;
    try{
        const user = await AppointmentModel.find({userID});
        res.send(user)
    }catch(err){
        res.send({"msg":"somthing went wrong! cannot Get User","error":err.message})
    }
})
 


AppointmentsRouter.post("/",async(req,res)=>{
    const payload=req.body;
    try{
        const appointment = new AppointmentModel(payload);
        await appointment.save();
        res.send({"msg":"Appointment Created"})
    }catch(err){
        res.send({"msg":"Cannot Create Appointment","error":err.message})
    }
})






module.exports = {AppointmentsRouter}