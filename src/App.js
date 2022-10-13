import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [mealData, setMealData] = useState([]);
  const [search, setSearch] = useState("beef");

  const searchApp = (search) => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search)
      .then((res) => setMealData(res.data.meals));
  };
  useEffect(() => {
    searchApp(search);
  }, []);

  const handleSubmit = (e) => {
    setSearch(e.target.value);
    searchApp(search);
  };

  return (
    <div className="app">
      <h1> Cooking App</h1>
      <input
        type="text"
        placeholder="Tapez le nom d'un aliment (en anglais)"
        onChange={(e) => handleSubmit(e)}
      />
      <ul>
        {mealData.map((meal) => (
          <Card key={meal.idMeal} meal={meal} />
        ))}
      </ul>
    </div>
  );
};

export default App;
