const routes = require('express').Router();
const meals = require('../controllers/meals');
const { saveMeal } = require('../middleware/validator');

routes.get('/', meals.getAllRoute);
routes.get('/:id', meals.getByIdRoute);
routes.post('/', saveMeal, meals.postMealRoute);
routes.put('/:id', saveMeal, meals.putUpdateMealRoute);
routes.delete('/:id', meals.deleteMealRoute);

module.exports = routes;