const { Router } = require("express");
const { getUserHandler } = require("../handlers/userHandler");

const userRoutes = Router();

userRoutes.get("/", getUserHandler);

module.exports = userRoutes;
