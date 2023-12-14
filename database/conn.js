const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URI)
.then(()=>{
    console.log("Connected to Database");
})
.catch((error)=>{
    console.log("Error in connection with DB" , error);
})