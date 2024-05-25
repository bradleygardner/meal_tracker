const mongodb = require('../db/db');
const ObjectId = require('mongodb').ObjectId;

async function allMeals() {
    const result = await mongodb.getDb().db().collection('meals').find().toArray();
    return result;
}
async function meals(id) {
    id = new ObjectId(id);
    const result = await mongodb.getDb().db().collection('meals').find({ _id: id }).toArray();
    return result;
}
async function addMeal(contact) {
    //Add contact to db
    const result = await mongodb.getDb().db().collection('meals').insertOne(contact);
    return result;
}
async function editMeal(contact, id) {
    //Update contact
    id = new ObjectId(id);
    const result = await mongodb.getDb().db().collection('meals').replaceOne({ _id: id }, contact);
    return result;
}
async function deleteMeal(id) {
    id = new ObjectId(id);
    const result = await mongodb.getDb().db().collection('meals').deleteOne({ _id: id });
    return result;
}
module.exports = {
    allMeals,
    meals,
    addMeal,
    editMeal,
    deleteMeal,
}