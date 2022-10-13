import React from "react";

const Card = ({ meal }) => {
  return (
    <div className="card">
      <h2>{meal.strMeal}</h2>
      <h4>Origin: {meal.strArea}</h4>
      <img src={meal.strMealThumb} alt={"photo de " + meal.strMeal} />
      <p>
        {meal.strInstructions.length > 200
          ? meal.strInstructions.slice(0, 200)
          : meal.strInstructions}
      </p>
    </div>
  );
};

export default Card;
