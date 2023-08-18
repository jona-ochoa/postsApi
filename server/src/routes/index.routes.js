const { Router } = require('express');
const postRoutes = require('./post.routes.js')

const routes = Router();

routes.use('/posts', postRoutes)

module.exports = routes;
