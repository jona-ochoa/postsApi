const express = require("express");
// const mongoose = require("mongoose");
const morgan = require('morgan')
const cors = require('cors');
const http = require('http');
const routes = require('./src/routes/index.routes.js');
const db = require("./src/database/db.js");
require("dotenv").config();

const port = process.env.PORT || 3002;

const server = express();

server.use(morgan("dev"));
server.use(cors({ origin: 'http://localhost:5173' }));
server.use(express.json());

server.use("/api", routes)

const app = http.createServer(server);


app.listen(port, () => {
    console.log("Listening on PORT: ", port);
    db();
})
