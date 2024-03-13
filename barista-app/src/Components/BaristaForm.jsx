import React, {Component, useState} from "react";


const onNewDrink = () => {
}

const onCheckAnswer = () => {

}

const BaristaForm = () => {

}
const [inputs, setInputs] = useState({
  'temperature': '',
  'milk': '',
  'syrup': '',
  'blended': ''
});

const ingredients = {
  'temperature' : ['hot', 'lukewarm', 'cold'],
  'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
  'milk': ['cow', 'oat', 'soy','goat', 'almond', 'none'],
  'blended': ['yes', 'turbo', 'no']
}
  

  return (
    <div>
      <h2>Hi, I'd like to order a:</h2>
      <form>

        <button type="submit" className = "button submit"  onClick={onCheckAnswer}>Check Answer</button>

        <button type= "new-drink-button" className = "button newdrink" onClick={onNewDrink}>New Drink</button>
       
        </form>
    </div>
  );
  


export default BaristaForm;