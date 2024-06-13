const routes = require('express').Router();
const recipes = require('../controllers/recipes.js');
const { isLoggedIn } = require('../middleware/auth.js');
const { saveRecipe } = require('../middleware/validator.js');

routes.get('/', recipes.getAllRoute);
routes.get('/:id', recipes.getByIdRoute);
routes.post('/', isLoggedIn, saveRecipe, recipes.postRecipeRoute);
routes.put('/:id', isLoggedIn, saveRecipe, recipes.putUpdateRecipeRoute);
routes.delete('/:id', isLoggedIn, recipes.deleteRecipeRoute);

module.exports = routes;