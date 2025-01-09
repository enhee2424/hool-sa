import React from "react";

const MealSearch = ({ searchInput, setSearchInput, fetchMealList }) => {
  const handleInputChange = (e) => setSearchInput(e.target.value);

  return (
    <div className="meal-search">
      <h2 className="title">Find Meals For Your Ingredients</h2>
      <blockquote>
        Real food doesn't have ingredients, real food is ingredients.<br />
        <cite>- Jamie Oliver</cite>
      </blockquote>
      <div className="meal-search-box">
        <input
          type="text"
          className="search-control"
          placeholder="Enter an ingredient"
          value={searchInput}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className=""
          onClick={fetchMealList}
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default MealSearch;
