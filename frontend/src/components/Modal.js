// src/components/Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, recipe }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{recipe.title}</h2>
        <p><strong>Category:</strong> {recipe.category}</p>
        <h3>Instructions</h3>
        <p>{recipe.instructions.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}</p>
      </div>
    </div>
  );
};

export default Modal;
