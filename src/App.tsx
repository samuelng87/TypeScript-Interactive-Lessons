import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ObligatoryTypes from "./Lessons/ObligatoryTypes/";
import PizzaRestaurantApp from "./Lessons/PizzaRestaurantApp";
import DefiningCustomTypes from "./Lessons/DefiningCustomTypes";

function App() {
  return (
    <div className="App">
      <PizzaRestaurantApp />
      <ObligatoryTypes />
      <DefiningCustomTypes />
    </div>
  );
}

export default App;
