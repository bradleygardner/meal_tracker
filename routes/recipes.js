const routes = require('express').Router();
const recipes = require('../controllers/recipes.js');
const { saveRecipe } = require('../middleware/validator.js');

routes.get('/', recipes.getAllRoute);
routes.get('/:id', recipes.getByIdRoute);
routes.post('/', saveRecipe, recipes.postRecipeRoute);
routes.put('/:id', saveRecipe, recipes.putUpdateRecipeRoute);
routes.delete('/:id', recipes.deleteRecipeRoute);

module.exports = routes;