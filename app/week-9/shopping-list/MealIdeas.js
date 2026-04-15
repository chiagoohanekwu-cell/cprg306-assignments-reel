"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );

    const data = await response.json();

    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meals:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    if (!ingredient) {
      setMeals([]);
      return;
    }

    const results = await fetchMealIdeas(ingredient);
    setMeals(results);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-2">
        Meal Ideas {ingredient && `for "${ingredient}"`}
      </h2>

      {meals.length === 0 ? (
        <p className="text-gray-500">
          No meal ideas found for this ingredient.
        </p>
      ) : (
        <ul className="space-y-2">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="bg-gray-100 p-2 rounded">
              {meal.strMeal}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}