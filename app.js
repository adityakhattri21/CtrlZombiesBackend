const express = require("express");
const eventRoutes = require("./routes/eventRoutes");
const userRoutes = require("./routes/userRoutes");
const errorMiddleware = require("./middleware/error");
const eventRoutes = require("./routes/eventRoutes")
const ProductRoutes = require("./routes/productRoute")
const complaintRoutes = require("./routes/complaintRouter")
const EmploymentRoutes = require("./routes/employmentRoute")
const app = express();

app.use(express.json());

app.get("/",(req,res,next)=>{
    res.status(200).json({message:"Working"});
})

app.use('/api/events', eventRoutes)
app.use('/api/user',userRoutes);
app.use(errorMiddleware);

app.use('/events', eventRoutes)
app.use("/products", ProductRoutes)
app.use("/complaints", complaintRoutes)
app.use("/jobs",EmploymentRoutes)

module.exports = app;