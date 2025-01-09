import React from "react";

const MealDetails = ({ meal, closeDetails }) => {
  return (
    <div className="meal-details showRecipe">
      <button className="btn recipe-close-btn" onClick={closeDetails}>
        <i className="fas fa-times"></i>
      </button>
      <div className="meal-details-content">
        <h2 className="recipe-title">{meal.strMeal}</h2>
        <p className="recipe-category">{meal.strCategory}</p>
        <div className="recipe-instruct">
          <h3>Instructions:</h3>
          <p>{meal.strInstructions}</p>
        </div>
        <div className="recipe-meal-img">
          <img src={meal.strMealThumb} alt={meal.strMeal} />
        </div>
        <div className="recipe-link">
          <a href={meal.strYoutube} target="_blank" rel="noreferrer">
            Watch Video
          </a>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
