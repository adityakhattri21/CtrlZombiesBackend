const mongoose = require("mongoose");

const panchayatSchema = mongoose.Schema({
    email:{
        type:String,
        required:[true,"Panchayat Email is Required"]
    },
    password:{
        type:String,
        required:[true,"Password is Required"],
        minLength:[6,"Minimum 6 Characters are required in Password"]
    },
    officeAddress:{
        type:String,
        required:[true,"Office Address Is Required"],
    },
    Village:{
        type:String,
        required:[true,"Village Name is Required"],
    },
    District:{
        type:String,
        required:[true,"District Name is Required"]
    },
    State:{
        type:String,
        required:[true,"State Name is Required"]
    }
});

module.exports = mongoose.Model("Panchayat",panchayatSchema);