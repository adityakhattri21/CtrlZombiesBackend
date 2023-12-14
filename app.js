const express = require("express");
const eventRoutes = require("./routes/eventRoutes");
const userRoutes = require("./routes/userRoutes");
const errorMiddleware = require("./middleware/error");
const app = express();

app.use(express.json());

app.get("/",(req,res,next)=>{
    res.status(200).json({message:"Working"});
})

app.use('/api/events', eventRoutes)
app.use('/api/user',userRoutes);
app.use(errorMiddleware);


module.exports = app;