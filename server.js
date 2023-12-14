const server = require("./app");
require("dotenv").config();
require("./database/conn");

const port = process.env.PORT || 8000;

server.listen(port,()=>{
    console.log(`Server is up at port : ${port}`);
});