const  Complaints = require("../database/models/complaintModel")

exports.addComplaints = async (req,res) => {
    try {
        await Complaints.create(req.body)
        res.status(200).json({msg:"Added Successfully", success:true})
    } catch (error) {
        res.status(500).json({error, success:true})
    }
}
exports.getUserComplaints = async (req,res) => {
    try {
        const {userId:_id} = req.params
        const data = await Complaints.find({user:_id})
        res.status(200).json({sucess:true, data})
    } catch (error) {
        res.status(500).json({error, success:true})
    }
}
exports.getAllComplaints = async (req,res) => {
    try {
        const {villageName} = req.params
        const data = await Complaints.find({villageName})
        res.status(200).json({sucess:true, data})
    } catch (error) {
        res.status(500).json({error, success:true})
    }
}