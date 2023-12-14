const express = require("express");
const eventRoutes = require("./routes/eventRoutes")
const ProductRoutes = require("./routes/productRoute")
const complaintRoutes = require("./routes/complaintRouter")
const app = express();

app.use(express.json());

app.get("/",(req,res,next)=>{
    res.status(200).json({message:"Working"});
})

app.use('/events', eventRoutes)
app.use("/products", ProductRoutes)
app.use("/complaints", complaintRoutes)

module.exports = app;