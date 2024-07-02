const routes = require('express').Router();
const recipes = require('../controllers/recipes.js');
const path = require('path')
const { isLoggedIn } = require('../middleware/auth.js');
const { saveRecipe } = require('../middleware/validator.js');

//swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

//Other pages
routes.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'pages/index.html'))
});
routes.get('/recipes/recipe', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'pages/recipe.html'))
});
routes.get('/recipes', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'pages/recipeList.html'))
});
routes.get('/meals/meal', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'pages/meal.html'))
});
routes.get('/meals', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'pages/mealList.html'))});

module.exports = routes;