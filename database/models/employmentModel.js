const { Schema, model } = require("mongoose")

const employments = new Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    place:{
        type:String,
        require:true
    },
    by: {
        type: String,
        required: true
    },
    type:{
        type:String,
        required:true
    },
    villageName: {
        type: String,
        required: true
    },
})

employments.pre('save', function (next) {
    if (this.isModified('villageName')) {
        this.villageName = this.villageName.toLowerCase()
    }
    next()
})

module.exports = model("employments", employments)