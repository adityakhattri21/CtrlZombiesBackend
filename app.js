const express = require("express");
const eventRoutes = require("./routes/eventRoutes")
const app = express();

app.use(express.json());

app.get("/",(req,res,next)=>{
    res.status(200).json({message:"Working"});
})

app.use('/events', eventRoutes)


module.exports = app;