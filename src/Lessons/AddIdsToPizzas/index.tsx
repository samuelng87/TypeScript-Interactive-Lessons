type Pizza = {
  id: number; // Add ids to pizzas
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed";
};

// Add ids to pizzas
const menu: Pizza[] = [
  { id: 1, name: "Margherita", price: 8 },
  { id: 1, name: "Pepperoni", price: 10 },
  { id: 1, name: "Hawaiian", price: 10 },
  { id: 1, name: "Veggie", price: 9 },
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
// Add ids to pizzas
addNewPizza({ id: 1, name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ id: 1, name: "BBQ Chicken", price: 12 });
addNewPizza({ id: 1, name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon Ranch");
placeOrder("Chicken Bacon Ranch");
placeOrder("Spicy Sausage");

console.log("Menu", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
console.log("Next Order ID:", nextOrderId);
console.log("Completed Order", completeOrder(2));

const AddIdsToPizzas = () => {
  return <div>AddIdsToPizzas - Pizza Restaurant App</div>;
};

export default AddIdsToPizzas;
