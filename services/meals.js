const mongoose = require('mongoose');
const mealSchema = require('../models/meal');
const ObjectId = require('mongodb').ObjectId;

async function allMeals(userId) {
    const result = await mealSchema.find({userId});
    return result;
}
async function meals(id) {
    id = new ObjectId(id);
    const result = await mealSchema.findById(id)
    return result;
}
async function addMeal(meal) {
    //Add meal to db
    const result = await mealSchema.create({
        userId: meal.userId,
        name: meal.name,
        recipeId: meal.recipeId,
        rating: meal.rating,
    });
    return result;
}
async function editMeal(meal, id) {
    //Update meal
    id = new ObjectId(id);
    const item = await mealSchema.findById(id)
    item.name = meal.name;
    item.recipeId = meal.recipeId;
    item.rating = meal.rating;

    const result = await item.save();
    return result;
}
async function deleteMeal(id) {
    id = new ObjectId(id);
    const result = await mealSchema.deleteOne(id)
    return result;
}
module.exports = {
    allMeals,
    meals,
    addMeal,
    editMeal,
    deleteMeal,
}