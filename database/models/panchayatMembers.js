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
    villageName:{
        type:String,
        required:[true,"Village Name is Required"]
    },
    contact:{
        type:Number,
        length:[30,"Enter a valid Mobile Number"]
    }
});

panchayatSchema.pre("save",(next)=>{
    if(this.isModified('villageName') || this.isModified('designation')){
        this.villageName = this.villageName.toLowerCase();
        this.designation = this.designation.toLowerCase();
    }
    next();
})

module.exports = mongoose.model("PanchayatMember",memberSchema);