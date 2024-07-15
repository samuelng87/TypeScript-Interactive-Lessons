type Pizza = {
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  //UpdateOrderStatusLiteralTypesUnions
  status: "ordered" | "completed";
};

const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

let cashInRegister = 0;
let nextOrderId = 1;
let orderQueue: Order[] = [];

// Add New Pizza
const addNewPizza = (pizzaObj: Pizza) => {
  menu.push(pizzaObj);
};

// Place Order
const placeOrder = (pizzaName: String) => {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (!selectedPizza) {
    console.error(`Custom Error: ${pizzaName} does not exist in the menu`);
    return;
  }
  cashInRegister += selectedPizza.price;
  //UpdateOrderStatusLiteralTypesUnions
  const newOrder: Order = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
};

// Complete Order
const completeOrder = (orderId: number) => {
  const order = orderQueue.find((order) => order.id === orderId);
  if (!order) {
    console.error(`Custom Error: ${orderId} was not found in the order Queue`);
    return;
  }
  order.status = "completed";
  return order;
};

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon Ranch");
placeOrder("Chicken Bacon Ranch");
placeOrder("Spicy Sausage");

console.log("Menu", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
console.log("Next Order ID:", nextOrderId);
console.log("Completed Order", completeOrder(2));

const UpdateOrderStatusLiteralTypesUnions = () => {
  return <div>UpdateOrderStatusLiteralTypesUnions - Pizza Restaurant App</div>;
};

export default UpdateOrderStatusLiteralTypesUnions;
