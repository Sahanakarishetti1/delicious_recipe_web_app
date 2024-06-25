import React, { useState } from 'react';
import { addRecipe } from '../api'; // Adjust the path if necessary
import './RecipeForm.css';

const RecipeForm = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe = { title, category, image, instructions };
    try {
      await addRecipe(newRecipe);
      onSave(); // Call the onSave callback to reload recipes
      setTitle(''); // Clear the form
      setCategory('');
      setImage('');
      setInstructions('');
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="recipe-form">
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Title" 
        required 
        className="form-input"
      />
      <input 
        type="text" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
        placeholder="Category" 
        required 
        className="form-input"
      />
      <input 
        type="text" 
        value={image} 
        onChange={(e) => setImage(e.target.value)} 
        placeholder="Image URL" 
        required 
        className="form-input"
      />
      <textarea 
        value={instructions} 
        onChange={(e) => setInstructions(e.target.value)} 
        placeholder="Instructions" 
        required 
        className="form-textarea"
      ></textarea>
      <button type="submit" className="form-button">Save Recipe</button>
    </form>
  );
};

export default RecipeForm;
