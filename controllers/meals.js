const meals = require('../services/meals.js');
const getAllRoute = async (req, res) => {
    try {
        await meals.allMeals(req.user._id).then((lists) => {
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
        await meals.meals(req.params.id).then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
        });
    }
    catch (error) {
        res.status(500).send(error);
    }
};
const postMealRoute = async (req, res) => {
    try {
        var today = new Date().toISOString().substring(0, 10);
        const meal = {
            userId: req.user._id,
            name: req.body.name,
            date: today,
            recipeId: req.body.recipeId,
            rating: req.body.rating
        };
        await meals.addMeal(meal).then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(201).json(lists);
        });
    }
    catch (error) {
        res.status(500).send(error);
    }
};
const putUpdateMealRoute = async (req, res) => {
    try {
        var today = new Date().toISOString().substring(0, 10);
        const meal = {
            name: req.body.name,
            date: today,
            recipeId: req.body.recipeId,
            rating: req.body.rating
        };
        await meals.editMeal(meal, req.params.id).then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(204).json(lists);
        });
    }
    catch (error) {
        res.status(500).send(error);
    }
};
const deleteMealRoute = async (req, res) => {
    try {
        await meals.deleteMeal(req.params.id).then((lists) => {
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
    postMealRoute,
    putUpdateMealRoute,
    deleteMealRoute,
};