const express = require("express");
const eventRoutes = require("./routes/eventRoutes");
const userRoutes = require("./routes/userRoutes");
const errorMiddleware = require("./middleware/error");
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
app.use("/api/products", ProductRoutes)
app.use("/api/complaints", complaintRoutes)
app.use("/api/jobs",EmploymentRoutes)
app.use(errorMiddleware);

module.exports = app;