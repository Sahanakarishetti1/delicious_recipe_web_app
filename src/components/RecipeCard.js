import React from 'react';

const RecipeCard = ({ recipe }) => (
  <div className="recipe-card">
    <img src={recipe.image} alt={recipe.title} />
    <h3>{recipe.title}</h3>
    <p>{recipe.category}</p>
  </div>
);

export default RecipeCard;
