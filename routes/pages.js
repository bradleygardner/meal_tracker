const routes = require('express').Router();
const path = require('path')
const { isLoggedInRedirect } = require('../middleware/auth.js');

//swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

//Other pages
routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'pages/index.html'))
});
routes.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'pages/index.html'))
});
routes.get('/recipes/recipe', isLoggedInRedirect, (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'pages/recipe.html'))
});
routes.get('/recipes', isLoggedInRedirect, (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'pages/recipeList.html'))
});
routes.get('/meals/meal', isLoggedInRedirect, (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'pages/meal.html'))
});
routes.get('/meals', isLoggedInRedirect, (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'pages/mealList.html'))});

module.exports = routes;