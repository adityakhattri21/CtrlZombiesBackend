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
    villageName:{
        type:String,
        required:[true,"Village Name is Required"],
    },
    district:{
        type:String,
        required:[true,"District Name is Required"]
    },
    state:{
        type:String,
        required:[true,"State Name is Required"]
    }
});

panchayatSchema.pre("save",(next)=>{
    if(this.isModified('villageName') || this.isModified('district') || this.isModified('state')){
        this.villageName = this.villageName.toLowerCase();
        this.district = this.district.toLowerCase();
        this.state = this.state.toLowerCase();
    }
    next();
})


module.exports = mongoose.model("Panchayat",panchayatSchema);