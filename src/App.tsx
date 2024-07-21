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
import LiteralTypes from "./Lessons/LiteralTypes";
import Unions from "./Lessons/Unions";
import FunctionReturnTypes from "./Lessons/FunctionReturnTypes";
function App() {
  return (
    <div className="App">
      <PizzaRestaurantApp />
      {/* <ObligatoryTypes />
      <DefiningCustomTypes />
      <NestedObjectTypes />
      <OptionalProperties />
      <AddingOrderType />
      <TypingArrays />
      <TypeOrderQueue /> 
      <LiteralTypes />
      <Unions />
      <FunctionReturnTypes /> */}
    </div>
  );
}

export default App;
