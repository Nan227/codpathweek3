// BaristaForm.js
import React, { useState } from "react";
import RecipeChoices from "./RecipeChoices";

import drinksJson from "./drinks.json"
import "./BaristaForm.css";

const BaristaForm = () => {
  const [inputs, setInputs] = useState({
    temperature: "",
    milk: "",
    syrup: "",
    blended: ""
  });
  
  const [currentDrink, setCurrentDrink] = useState("");
  const [trueRecipe, setTrueRecipe] = useState({});
  
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

    setCheckedTemperature('');
    setCheckedSyrup('');
    setCheckedMilk('');
    setCheckedBlended('');
  };

  const [correct_temp, setCheckedTemperature] = useState('');
  const [correct_syrup, setCheckedSyrup] = useState('');
  const [correct_milk, setCheckedMilk] = useState('');
  const [correct_blended, setCheckedBlended] = useState('');


  const onCheckAnswer = () => {
    // Implement check answer functionality here
    if (trueRecipe.temp != inputs['temperature']){
      setCheckedTemperature('wrong');
    }
    else {
      setCheckedTemperature("correct");
    }
    if (trueRecipe.milk != inputs['milk']){
      setCheckedMilk('wrong');
    }
    else {
      setCheckedMilk("correct");
    }
    if (trueRecipe.syrup != inputs['syrup']){
      setCheckedSyrup('wrong');
    }
    else {
      setCheckedSyrup("correct");
    }
    if (trueRecipe.blended != inputs['blended']){
      setCheckedBlended('wrong');
    }
    else {
      setCheckedBlended("correct");
    }

  };

  return (
    <div>
      <h2>Hi, I'd like to order a:</h2>
      <div className = "container"> 
      <h2 className = "mini-header">{currentDrink}</h2>
      <button 
        type="new-drink-button" 
        className="button newdrink" 
        onClick={onNewDrink}
        >
      🔄
     </button> 
      </div> 
      <div className="mini-container">
      <h3>Temperature</h3>
      <div className="answer-space" id = {correct_temp} >
        {inputs["temperature"]} 
      </div>

        <RecipeChoices
          label="temperature"
          choices={ingredients.temperature}
          handleChange={(e) =>
            setInputs({ ...inputs, temperature: e.target.value })
          }
          checked={inputs.temperature}
        />
        </div>
        <h3>Milk</h3>
<div className="answer-space" id ={correct_milk}>
  {inputs["milk"]} 
</div>
        <RecipeChoices
          label="milk"
          choices={ingredients.milk}
          handleChange={(e) => setInputs({ ...inputs, milk: e.target.value })}
          checked={inputs.milk}
        />
        <h3>Syrup</h3>
<div className="answer-space" id = {correct_syrup}>
  {inputs["syrup"]} 
</div>
        <RecipeChoices
          label="syrup"
          choices={ingredients.syrup}
          handleChange={(e) => setInputs({ ...inputs, syrup: e.target.value })}
          checked={inputs.syrup}
        />
        <h3>Blended</h3>
<div className="answer-space" id = {correct_blended}>
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
        <form className="container">
        <div className="mini-container">
        <h3>Temperature</h3>
        <div className="answer-space" id={correct_temp}>
          {inputs["temperature"]}
        </div>
        <RecipeChoices
          handleChange={(e) =>
          setInputs((prevState) => ({
           ...prevState,
          [e.target.name]: e.target.value,
           }))
          }
          label="temperature"
          choices={ingredients["temperature"]}
          currentVal={inputs["temperature"]}
         />
       </div>
      <div className="mini-container">
      <h3>Milk</h3>
      <div className="answer-space" id={correct_milk}>
        {inputs["milk"]}
     </div>
     <RecipeChoices
      handleChange={(e) =>
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
  
      }))
    }
      label="milk"
      choices={ingredients["milk"]}
      currentVal={inputs["milk"]}
     />  
    </div>

  <div className="mini-container">
  <h3>Syrup</h3>
  <div className="answer-space" id={correct_syrup}>
    {inputs["syrup"]}
    </div>
     <RecipeChoices
      handleChange={(e) =>
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
  
      }))
    }
      label="syrup"
      choices={ingredients["syrup"]}
      currentVal={inputs["syrup"]}
     />  
    </div>

    <div className="mini-container">
  <h3>Blended</h3>
  <div className="answer-space" id={correct_blended}>
    {inputs["blended"]}
    </div>
     <RecipeChoices
      handleChange={(e) =>
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
  
      }))
    }
      label="blended"
      choices={ingredients["blended"]}
      currentVal={inputs["blended"]}
     />  
    </div>


        </form>
        <button type="submit" className="button submit" onClick={onCheckAnswer}>
          Check Answer
        </button>
        <button
          type="new-drink-button"
          className="button newdrink"
          onClick={onNewDrink}
        >
          New Drink
        </button>
      
    </div>
  );
};

export default BaristaForm;
