// BaristaForm.js
import React, { useState } from "react";
import RecipeChoices from "./RecipeChoices";

import drinksJson from "./drinks.json"

const BaristaForm = () => {
  const [inputs, setInputs] = useState({
    temperature: "",
    milk: "",
    syrup: "",
    blended: ""
  });
  
  const [currentDrink, setCurrentDrink] = useState("");
  const [recipe, setRecipe] = useState({});
  
  const ingredients = {
    temperature: ["hot", "lukewarm", "cold"],
    syrup: ["mocha", "vanilla", "toffee", "maple", "caramel", "other", "none"],
    milk: ["cow", "oat", "soy", "goat", "almond", "none"],
    blended: ["yes", "turbo", "no"]
  };

  const getNextDrink =() => {
    let randomDrinkIndex = Math.floor(Math.random() * drinksJson.length);
    setCurrentDrink(drinksJson[randomDrinkIndex].name);
    setTrueRecipe(drinksJson[randomDrinkIndex].ingredients);
  }

  const onNewDrink = () => {

    // Implement new drink functionality here
    setInputs({
      'temperature': '',
      'milk': '',
      'syrup': '',
      'blended': '' 
    });
      
    getNextDrink(); 
  };

  const onCheckAnswer = () => {
    // Implement check answer functionality here
    
  };

  return (
    <div>
      <h2>Hi, I'd like to order a:</h2>
      <h3>Temperature</h3>
<div className="answer-space" >
  {inputs["temperature"]} 
</div>
      <form>
        <RecipeChoices
          label="temperature"
          choices={ingredients.temperature}
          handleChange={(e) =>
            setInputs({ ...inputs, temperature: e.target.value })
          }
          checked={inputs.temperature}
        />
        <h3>Milk</h3>
<div className="answer-space" >
  {inputs["milk"]} 
</div>
        <RecipeChoices
          label="milk"
          choices={ingredients.milk}
          handleChange={(e) => setInputs({ ...inputs, milk: e.target.value })}
          checked={inputs.milk}
        />
        <h3>Syrup</h3>
<div className="answer-space" >
  {inputs["syrup"]} 
</div>
        <RecipeChoices
          label="syrup"
          choices={ingredients.syrup}
          handleChange={(e) => setInputs({ ...inputs, syrup: e.target.value })}
          checked={inputs.syrup}
        />
        <h3>Blended</h3>
<div className="answer-space" >
  {inputs["blend"]} 
</div>
        <RecipeChoices
          label="blended"
          choices={ingredients.blended}
          handleChange={(e) =>
            setInputs({ ...inputs, blended: e.target.value })
          }
          checked={inputs.blended}
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
