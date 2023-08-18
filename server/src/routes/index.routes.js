const { Router } = require('express');
const postRoutes = require('./post.routes.js');
const userRoutes = require('./user.routes.js');

const routes = Router();

routes.use('/posts', postRoutes)
routes.use('/users', userRoutes)

module.exports = routes;
