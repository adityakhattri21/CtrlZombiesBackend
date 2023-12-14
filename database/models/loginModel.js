const {Schema , model} = require('mongoose')

const login = Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    uid:{
        type:Schema.Types.ObjectId,
        required:true
    }
});

module.exports = model('Login',login);