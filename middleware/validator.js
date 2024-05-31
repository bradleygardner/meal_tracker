const Validator = require('validatorjs');
const validator = (body, rules, customMessages, callback) => {
  const validation = new Validator(body, rules, customMessages);
  validation.passes(() => callback(null, true));
  validation.fails(() => callback(validation.errors, false));
};

const saveMeal = (req, res, next) => {
  const validationRule = {
    name: 'required|string',
    recipeId: 'required|string',
    rating: 'required|string'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

const saveRecipe = (req, res, next) => {
    const validationRule = {
      name: 'required|string',
      servingSize: 'required|string',
      totalTime: 'required|string',
      prepTime: 'required|string',
      cookTime: 'required|string',
      ingredients: 'required|string',
      instructions: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
      if (!status) {
        res.status(412).send({
          success: false,
          message: 'Validation failed',
          data: err
        });
      } else {
        next();
      }
    });
  };

module.exports = {
    saveMeal,
    saveRecipe
};