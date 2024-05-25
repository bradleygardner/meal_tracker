const routes = require('express').Router();

routes.use('/', require('./swagger'));
routes.use('/recipe', require('./recipes'));
routes.use('/meals', require('./meals'));

module.exports = routes;