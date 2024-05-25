const routes = require('express').Router();
const recipes = require('../controllers/recipes.js');

routes.get('/', recipes.getAllRoute);
routes.get('/:id', recipes.getByIdRoute);
routes.post('/', recipes.postRecipeRoute);
routes.put('/:id', recipes.putUpdateRecipeRoute);
routes.delete('/:id', recipes.deleteRecipeRoute);

module.exports = routes;