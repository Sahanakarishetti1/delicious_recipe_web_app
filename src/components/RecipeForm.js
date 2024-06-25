import React, { useState } from 'react';
import axios from 'axios';

const RecipeForm = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe = { title, category, image, instructions };
    // Assuming a save endpoint exists
    await axios.post('/api/recipes', newRecipe);
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" required />
      <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} placeholder="Instructions" required></textarea>
      <button type="submit">Save Recipe</button>
    </form>
  );
};

export default RecipeForm;
