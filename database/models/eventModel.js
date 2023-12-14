const {Schema, default: mongoose} = require("mongoose")

const events = new Schema({
    name:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    villageName:{
        type:String,
        requried:true,
        
    },
    type:{
        type:String,
        required:true
    },
    volunteer:{
        type:[String],
        ref:"users",
        default:[]
    }
})

events.pre('save',function(next){
    if(this.isModified('villageName')){
        this.villageName = this.villageName.toLowerCase()
    }
    next()
})

module.exports = mongoose.model("events",events)