const Recipe = require('../models/recipeModel');

exports.getAllRecipes = (req, res) => {
    const recipes = Recipe.getAllRecipes();
    res.json(recipes);
};

exports.getRecipeById = (req, res) => {
    const recipe = Recipe.getRecipeById(req.params.id);
    if (recipe) {
        res.json(recipe);
    } else {
        res.status(404).send('Recipe not found');
    }
};

exports.createRecipe = (req, res) => {
    const newRecipe = Recipe.createRecipe(req.body);
    res.status(201).json(newRecipe);
};