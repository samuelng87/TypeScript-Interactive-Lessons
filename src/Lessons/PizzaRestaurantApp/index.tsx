const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

let cashInRegister = 100;
let nextOrderId = 1;
let orderQueue: any = [];

// const addNewPizza = (pizzaObj) => {
//   menu.push(pizzaObj);
// };

// const placeOrder = (pizzaName) => {
//   const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
//   if (!selectedPizza) {
//     console.error(`${pizzaName} does not exist in the menu`);
//     return;
//   }
//   cashInRegister += selectedPizza.price;
//   const newOrder = {
//     id: nextOrderId++,
//     pizza: selectedPizza,
//     status: "ordered",
//   };
//   orderQueue.push(newOrder);
//   return newOrder;
// };

// const completeOrder = (orderId: number) => {
//   const order = orderQueue.find(
//     (order: { id: number }) => order.id === orderId
//   );
//   order.status = "completed";
//   return order;
// };

// addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 });
// addNewPizza({ name: "BBQ Chicken", cost: 12 });
// addNewPizza({ name: "Spicy Sausage", cost: 11 });

// placeOrder("Chicken Bacon Ranch");
// completeOrder(1);

// console.log("Menu", menu);
// console.log("Cash in register:", cashInRegister);
// console.log("Order queue:", orderQueue);

const index = () => {
  return <div>PizzaRestaurantApp</div>;
};

export default index;
