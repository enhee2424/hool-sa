import React from "react";

const MealList = ({ meals, fetchMealDetails }) => {
  if (meals.length === 0) {
    return <div className="notFound">Sorry, we didn't find any meal!</div>;
  }

  return (
    <div id="meal">
      {meals.map((meal) => (
        <div
          className="meal-item"
          key={meal.idMeal}
          onClick={() => fetchMealDetails(meal.idMeal)}
        >
          <div className="meal-img">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
          </div>
          <div className="meal-name">
            <h3>{meal.strMeal}</h3>
            <button className="recipe-btn">Get Recipe</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MealList;
