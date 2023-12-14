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
        requried:true
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

module.exports = mongoose.model("events",events)