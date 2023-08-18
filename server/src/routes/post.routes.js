const { Router } = require("express");
const { getPostHandler } = require("../handlers/postHandler");

const postRoutes = Router();

postRoutes.get("/", getPostHandler);

module.exports = postRoutes;
