import React, { useState, useEffect } from "react";
import { fetchRecipes } from "../api"; // Ensure the path to your API functions is correct
import RecipeCard from "../components/RecipeCard";
import RecipeForm from "../components/RecipeForm";
import Footer from "./Footer"; // Ensure the path is correct
import "./HomePage.css"; // Styles specific to the Home Page

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  const loadRecipes = async () => {
    try {
      const recipesData = await fetchRecipes();
      setRecipes(recipesData);
    } catch (error) {
      console.error("Error loading recipes:", error);
    }
  };

  useEffect(() => {
    loadRecipes();
  }, []);

  return (
    <>
      <div className="homePage">
        <RecipeForm onSave={loadRecipes} />
        <div className="recipe-list">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <p className="no-recipes">No recipes available.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
