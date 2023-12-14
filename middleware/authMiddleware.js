const jwt = require("jsonwebtoken");
const User = require('../database/models/userModel');

exports.isAuthenticatedUser = async(req,res,next)=>{
    const {authorization:token} = req.header;

    if(!token) throw new Error("Login To Continue");

    const decodedData = await jwt.verify(token , process.env.JWT_SECRET);

    const userData = await User.findById(decodedData.user);

    if(!userData) throw new Error('Invalid Token');

    req.user = userData;

    next();
}