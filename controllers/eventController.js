const Event = require("../database/models/eventModel")

exports.createEvents = async (req,res) => {
    try{
        const {name, place, villageName, type, date} = req.body
        if(!name || !place || !villageName || !type ||!date){
            return res.status(400).json({msg:"Enter valid data", success:false})
        }
        await Event.create(req.body)
        res.status(200).json({msg:"Event Added Successfully", success:true})
    }catch(err){
        res.status(500).json({msg:"Some Error Occured",err, success:false})
    }
}   