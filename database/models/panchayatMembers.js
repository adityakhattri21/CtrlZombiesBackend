const mongoose = require("mongoose");

const memberSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is Required"]
    },
    designation:{
        type:String,
        required:[true,"Designation is Required"]
    },
    village:{
        type:String,
        required:[true,"Village Name is Required"]
    },
    contact:{
        type:Number,
        length:[30,"Enter a valid Mobile Number"]
    }
});

module.exports = mongoose.Model("PanchayatMember",memberSchema);