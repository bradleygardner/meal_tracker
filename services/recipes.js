const mongodb = require('../db/db');
const ObjectId = require('mongodb').ObjectId;

async function allRecipes() {
    const result = await mongodb.getDb().db().collection('recipes').find().toArray();
    return result;
}
async function recipe(id) {
    id = new ObjectId(id);
    const result = await mongodb.getDb().db().collection('recipes').find({ _id: id }).toArray();
    return result;
}
async function addRecipe(contact) {
    const result = await mongodb.getDb().db().collection('recipes').insertOne(contact);
    return result;
}
async function editRecipe(contact, id) {
    id = new ObjectId(id);
    const result = await mongodb.getDb().db().collection('recipes').replaceOne({ _id: id }, contact);
    return result;
}
async function deleteRecipe(id) {
    id = new ObjectId(id);
    const result = await mongodb.getDb().db().collection('recipes').deleteOne({ _id: id });
    return result;
}
module.exports = {
    allRecipes,
    recipe,
    addRecipe,
    editRecipe,
    deleteRecipe,
}