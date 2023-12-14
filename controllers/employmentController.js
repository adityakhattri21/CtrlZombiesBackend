const Employments = require("../database/models/employmentModel")

exports.addJobs = async (req,res) => {
    try{
        await Employments.create(req.body)
        res.status(200).json({msg:"Event Added Successfully", success:true})
    }catch(err){
        res.status(500).json({msg:"Some Error Occured",err, success:false})
    }
}   


exports.getAllJobs = async (req,res) => {
    try{
        const {villageName} = req.params
        if(!villageName) return res.status(400) // send bad req
        const data = await Employments.find({villageName})
        res.status(200).json({data, success:true})
    }catch(err){
        res.status(500).json({msg:"Some Error Occured",err, success:false})
    }
}
