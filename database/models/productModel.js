const { Schema, model } = require("mongoose")

const products = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    by: {
        type: String,
        required: true
    },
    villageName: {
        type: String,
        required: true
    }
})

products.pre('save', function (next) {
    if (this.isModified('villageName')) {
        this.villageName = this.villageName.toLowerCase()
    }
    next()
})

module.exports = model("products", products)