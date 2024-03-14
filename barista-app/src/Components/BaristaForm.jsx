// BaristaForm.js
import React, { useState } from "react";
import RecipeChoices from "./RecipeChoices";

const BaristaForm = () => {
  const [inputs, setInputs] = useState({
    temperature: "",
    milk: "",
    syrup: "",
    blended: ""
  });

  const ingredients = {
    temperature: ["hot", "lukewarm", "cold"],
    syrup: ["mocha", "vanilla", "toffee", "maple", "caramel", "other", "none"],
    milk: ["cow", "oat", "soy", "goat", "almond", "none"],
    blended: ["yes", "turbo", "no"]
  };

  const onNewDrink = () => {
    // Implement new drink functionality here
  };

  const onCheckAnswer = () => {
    // Implement check answer functionality here
  };

  return (
    <div>
      <h2>Hi, I'd like to order a:</h2>
      <form>
        <RecipeChoices
          label="temperature"
          choices={ingredients.temperature}
          handleChange={(e) =>
            setInputs({ ...inputs, temperature: e.target.value })
          }
          checked={inputs.temperature}
        />
        {/* Render other RecipeChoices components for other ingredients */}
        <button type="submit" className="button submit" onClick={onCheckAnswer}>
          Check Answer
        </button>
        <button
          type="button"
          className="button newdrink"
          onClick={onNewDrink}
        >
          New Drink
        </button>
      </form>
    </div>
  );
};

export default BaristaForm;
