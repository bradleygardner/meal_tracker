const routes = require('express').Router();

routes.use('/', require('./pages'));
routes.use('/auth', require('./auth'));
routes.use('/recipe', require('./recipes'));
routes.use('/meals', require('./meals'));

module.exports = routes;