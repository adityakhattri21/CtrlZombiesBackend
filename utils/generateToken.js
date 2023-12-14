const jwt = require("jsonwebtoken");

exports.sendToken = (user,res)=>{
    const token =  jwt.sign({user:user._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES
    });

    res.status(200).json({
        success:true,
        token:token,
        user
    });
};