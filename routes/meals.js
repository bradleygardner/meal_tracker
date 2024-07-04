const routes = require('express').Router();
const meals = require('../controllers/meals');
const { isLoggedIn } = require('../middleware/auth.js');
const { saveMeal } = require('../middleware/validator');

routes.get('/', isLoggedIn, meals.getAllRoute);
routes.get('/:id', isLoggedIn, meals.getByIdRoute);
routes.post('/', isLoggedIn, saveMeal, meals.postMealRoute);
routes.put('/:id', isLoggedIn, saveMeal, meals.putUpdateMealRoute);
routes.delete('/:id', isLoggedIn, meals.deleteMealRoute);

module.exports = routes;