import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ObligatoryTypes from "./Lessons/ObligatoryTypes/";
import PizzaRestaurantApp from "./Lessons/PizzaRestaurantApp";
import DefiningCustomTypes from "./Lessons/DefiningCustomTypes";
import NestedObjectTypes from "./Lessons/NestedObjectTypes";
import OptionalProperties from "./Lessons/OptionalProperties";
import AddingOrderType from "./Lessons/AddingOrderType";
import TypingArrays from "./Lessons/TypingArrays";
import TypeOrderQueue from "./Lessons/TypeOrderQueue";
function App() {
  return (
    <div className="App">
      <PizzaRestaurantApp />
      <ObligatoryTypes />
      <DefiningCustomTypes />
      <NestedObjectTypes />
      <OptionalProperties />
      <AddingOrderType />
      <TypingArrays />
      <TypeOrderQueue />
    </div>
  );
}

export default App;
