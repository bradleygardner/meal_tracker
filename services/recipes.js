const mongoose = require('mongoose');
const recipeSchema = require('../models/recipe');
const { postRecipeRoute } = require('../controllers/recipes');
const ObjectId = require('mongodb').ObjectId;

async function allRecipes() {
    const result = await recipeSchema.find();
    return result;
}
async function recipe(id) {
    id = new ObjectId(id);
    const result = await recipeSchema.findById(id)
    return result;
}
async function addRecipe(recipe) {
    const result = await recipeSchema.create({
        userId: recipe.userId,
        name: recipe.name,
        servingSize: recipe.servingSize,
        totalTime: recipe.totalTime,
        prepTime: recipe.prepTime,
        cookTime: recipe.cookTime,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions
    });
    return result;
}
async function editRecipe(recipe, id) {
    id = new ObjectId(id);
    const item = await recipeSchema.findById(id)
    item.name = recipe.name;
    item.servingSize = recipe.servingSize;
    item.totalTime = recipe.totalTime;
    item.prepTime = recipe.prepTime;
    item.cookTime = recipe.cookTime;
    item.ingredients = recipe.ingredients;
    item.instructions = recipe.instructions;

    const result = await item.save();
    return result;
}
async function deleteRecipe(id) {
    id = new ObjectId(id);
    const result = await recipeSchema.deleteOne(id)    
    return result;
}

function sortByName(items, container) {
    items.sort((a, b) => a.Name.localeCompare(b.Name));
    const icon = qs("#sort_name_icon");
    qs("#sort_price_icon").textContent = "";
    if (nameReverse) {
        items.reverse();
        nameReverse = false;
        icon.textContent = "↓";
    } else {
        nameReverse = true;
        icon.textContent = "↑";
    }
    renderListWithTemplate(productCardTemplate, container, items);
    modalSetup();
}

module.exports = {
    allRecipes,
    recipe,
    addRecipe,
    editRecipe,
    deleteRecipe,
}