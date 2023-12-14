const { Schema, model } = require("mongoose")

const complaints = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    place:{
        type:String,
        require:true
    },
    by: {
        type: String,
        required: true,
        ref:"users"
    },
    villageName: {
        type: String,
        required: true
    },
    user:{
        type:String,
        required:true
    }
})

complaints.pre('save', function (next) {
    if (this.isModified('villageName')) {
        this.villageName = this.villageName.toLowerCase()
    }
    next()
})

module.exports = model("complaints", complaints)