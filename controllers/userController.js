const User = require('../database/models/userModel');
const Login = require('../database/models/loginModel');
const bcrypt = require('bcrypt');
const { sendToken } = require('../utils/generateToken');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require("../middleware/catchAsyncError");

exports.userCreate = catchAsyncError( async(req,res,next)=>{
    const {name , mobile ,  email , password , villageName , district , state , houseAddress } = req.body;

    if(!name || ! mobile || !email || !password || !villageName || !district || !state || !houseAddress){
        throw new ErrorHandler("Enter Full Details",401);
    }

    const existingUser = await Login.findOne({email});
    if(existingUser) throw new ErrorHandler("User Already Exists",409);

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password , salt);

    const user = await User.create({
        name , email , villageName , district , state , houseAddress , mobile
    })
    await Login.create({
        email,
        password: hashedPass,
        uid: user["_id"]
    })
    return res.status(200).json({ msg: "Wohhooo !! User Created ", success: true });
});

exports.loginUser = catchAsyncError(async(req,res,next)=>{
    const {email , password } = req.body;

    if(!email || !password ) throw new ErrorHandler("Incomplete Details",401);

    const reqUser = await Login.findOne({email});
    if(!reqUser) throw new ErrorHandler("Invalid Credentials",401);

    const comparePwd = await bcrypt.compare(password,reqUser.password);

    if(!comparePwd) throw new ErrorHandler("Invalid Credentials",401);

    loginUser = await User.findById(reqUser.uid);

    sendToken(loginUser,res);
});