import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';
import RecipeForm from '../components/RecipeForm';
import NavBar from '../components/NavBar';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get('/api/recipes');
      setRecipes(response.data);
    };
    fetchRecipes();
  }, []);

  const handleSave = () => {
    fetchRecipes();
  };

  return (
    <div>
      <NavBar />
      <RecipeForm onSave={handleSave} />
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
