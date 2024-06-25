import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001'; // Ensure this matches your server's URL

export const fetchRecipes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/recipes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

export const addRecipe = async (recipe) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/recipes`, recipe);
    return response.data;
  } catch (error) {
    console.error('Error adding recipe:', error);
    throw error;
  }
};