import React, { useState } from "react";
import MealDetails from "./component/mealdetails";
import MealList from "./component/meallist";
import MealSearch from "./component/mealsearch";
import "./App.css";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const fetchMealList = async () => {
    if (searchInput.trim() === "") return;

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`
      );
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  };

  const fetchMealDetails = async (id) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      setSelectedMeal(data.meals[0]);
    } catch (error) {
      console.error("Error fetching meal details:", error);
    }
  };

  return (
    <div className="container">
      <MealSearch
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        fetchMealList={fetchMealList}
      />
      <MealList meals={meals} fetchMealDetails={fetchMealDetails} />
      {selectedMeal && (
        <MealDetails
          meal={selectedMeal}
          closeDetails={() => setSelectedMeal(null)}
        />
      )}
    </div>
  );
}

export default App;

