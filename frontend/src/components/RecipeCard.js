import React, { useState } from 'react';
import Modal from './Modal';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="recipe-card">
      {recipe.image ? (
        <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      ) : (
        <div className="no-image">No Image Available</div>
      )}
      <h3>{recipe.title}</h3>
      <p>{recipe.category}</p>
      <button className="view-recipe-button" onClick={handleOpenModal}>
        View Recipe
      </button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} recipe={recipe} />
    </div>
  );
};

export default RecipeCard;
