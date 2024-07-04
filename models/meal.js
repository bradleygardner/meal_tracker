const mongoose = require('mongoose');
const { Schema } = mongoose;

const MealSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  recipeId: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
  }
});

module.exports = mongoose.model('Meals', MealSchema);