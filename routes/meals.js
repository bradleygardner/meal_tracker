const routes = require('express').Router();
const meals = require('../controllers/meals');

routes.get('/', meals.getAllRoute);
routes.get('/:id', meals.getByIdRoute);
routes.post('/', meals.postMealRoute);
routes.put('/:id', meals.putUpdateMealRoute);
routes.delete('/:id', meals.deleteMealRoute);

module.exports = routes;