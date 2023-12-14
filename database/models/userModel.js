const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is Required"],
        minLength:[4,"Minimum 4 Characters are required for Name"],
        maxLength:[30,"Maximum 30 Characters are allowed for Name"]

    },
    mobile:{
        type:Number,
        required:[true,"Mobile Number is Required"],
        length:[10,"Please Enter a Valid Mobile Number"]
    },
    email:{
        type:String,
        required:[true,"Email is Required."]
    },
    password:{
        type:String,
        required:[true,"Password is Mandatory"],
        minLength:[6,"Minimun 6 Characters are required for Password"]
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
    },
    houseAddress:{
        type:String,
        required:[true,"House Address is Required"]
    }
});

userSchema.pre('save',function(next){
    if(this.isModified('villageName') || this.isModified('district') || this.isModified('state')){
        this.villageName = this.villageName.toLowerCase()
        this.district = this.district.toLowerCase()
        this.state = this.state.toLowerCase()
    }
    next();
})
module.exports = mongoose.model("User",userSchema);