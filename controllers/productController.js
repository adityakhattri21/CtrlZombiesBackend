const Product = require("../database/models/productModel")

exports.addProducts = async (req,res) => {
    try{
        await Product.create(req.body)
        res.status(200).json({msg:"Product Added Successfully", success:true})
    }catch(err){
        res.status(500).json({msg:"Some Error Occured",err, success:false})
    }
}   


exports.getAllProducts = async (req,res) => {
    try{
        const {villageName} = req.params
        if(!villageName) return res.status(400) // send bad req
        const data = await Product.find({villageName})
        res.status(200).json({data, success:true})
    }catch(err){
        res.status(500).json({msg:"Some Error Occured",err, success:false})
    }
}

