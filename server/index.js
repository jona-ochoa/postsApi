const express = require("express");
require("dotenv").config();

const port = process.env.PORT || 3002;

const server = express();
server.use("/api", ()=>{
    console.log("API")
})

server.listen(port, () => {
    console.log("Listening on PORT: ", port);
})
