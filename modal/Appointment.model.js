const mongoose= require("mongoose");

const AppointmentSchema= mongoose.Schema({
    userID:String,
    name: String,
    image: String,
    specialization: String,
    experience: Number,
    location: String,
    date: String,
    slots : Number,
    fee: Number
},{
    versionKey:false
});

const AppointmentModel=mongoose.model("appointment",AppointmentSchema);

module.exports={AppointmentModel};