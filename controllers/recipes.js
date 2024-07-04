const recipes = require('../services/recipes');
const getAllRoute = async (req, res) => {
    try {
        await recipes.allRecipes().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
        });
    }
    catch (error) {
        res.status(500).send(error);
    }
};

const getByIdRoute = async (req, res) => {
    try {
        await recipes.recipe(req.params.id).then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
        });
    }
    catch (error) {
        res.status(500).send(error);
    }
};
const postRecipeRoute = async (req, res) => {
    try {
        var today = new Date().toISOString().substring(0, 10);
        const recipe = {
            userId: req.user._id,
            name: req.body.name,
            date: today,
            servingSize: req.body.servingSize,
            totalTime: req.body.totalTime,
            prepTime: req.body.prepTime,
            cookTime: req.body.cookTime,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
        };
        await recipes.addRecipe(recipe).then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(201).json(lists);
        });
    }
    catch (error) {
        res.status(500).send(error);
    }
};
const putUpdateRecipeRoute = async (req, res) => {
    try {
        var today = new Date().toISOString().substring(0, 10);
        const recipe = {
            name: req.body.name,
            date: today,
            servingSize: req.body.servingSize,
            totalTime: req.body.totalTime,
            prepTime: req.body.prepTime,
            cookTime: req.body.cookTime,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
        };
        await recipes.editRecipe(recipe, req.params.id).then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(204).json(lists);
        });
    }
    catch (error) {
        res.status(500).send(error);
    }
};
const deleteRecipeRoute = async (req, res) => {
    try {
        await recipes.deleteRecipe(req.params.id).then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
        });
    }
    catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    getAllRoute,
    getByIdRoute,
    postRecipeRoute,
    putUpdateRecipeRoute,
    deleteRecipeRoute,
};