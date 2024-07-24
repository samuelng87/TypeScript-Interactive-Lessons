type Pizza = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed";
};

const menu: Pizza[] = [
  { id: 1, name: "Margherita", price: 8 },
  { id: 2, name: "Pepperoni", price: 10 },
  { id: 3, name: "Hawaiian", price: 10 },
  { id: 4, name: "Veggie", price: 9 },
];

let cashInRegister = 0;
let nextOrderId = 1;
let orderQueue: Order[] = [];

// Add New Pizza
const addNewPizza = (pizzaObj: Pizza): void => {
  //VoidReturnType
  menu.push(pizzaObj);
};

// Place Order
const placeOrder = (pizzaName: String): Order | undefined => {
  //VoidReturnType
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (!selectedPizza) {
    console.error(`Custom Error: ${pizzaName} does not exist in the menu`);
    return;
  }
  cashInRegister += selectedPizza.price;
  const newOrder: Order = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
};

// Complete Order
const completeOrder = (orderId: number): Order | undefined => {
  //VoidReturnType
  const order = orderQueue.find((order) => order.id === orderId);
  if (!order) {
    console.error(`Custom Error: ${orderId} was not found in the order Queue`);
    return;
  }
  order.status = "completed";
  return order;
};

export const getPizzaDetail = (
  identifier: string | number
): Pizza | undefined => {
  //FunctionReturnTypes

  if (typeof identifier === "string") {
    return menu.find(
      (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase()
    );
  } else if (typeof identifier === "number") {
    return menu.find((pizza) => pizza.id === identifier);
  } else {
    throw new TypeError(
      "Parameter `identifier` must be either a string or a number"
    );
  }
};

addNewPizza({ id: 5, name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ id: 6, name: "BBQ Chicken", price: 12 });
addNewPizza({ id: 7, name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon Ranch");
placeOrder("Chicken Bacon Ranch");
placeOrder("Spicy Sausage");

// console.log("Menu", menu);
// console.log("Cash in register:", cashInRegister);
// console.log("Order queue:", orderQueue);
// console.log("Next Order ID:", nextOrderId);
// console.log("Completed Order", completeOrder(3));
console.log(getPizzaDetail(1));

const PizzaRestaurantApp = () => {
  return <div>PizzaRestaurantApp</div>;
};

export default PizzaRestaurantApp;
