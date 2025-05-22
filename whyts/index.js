var menu = [
    { name: 'Margheritac', price: 8 },
    { name: 'Marinara', price: 9 },
    { name: 'Quattro Stagioni', price: 10 },
    { name: 'Carbonara', price: 12 },
    { name: 'Frutti di Mare', price: 10 },
];
var cashInRegister = 100;
var orderQueue = [];
var orderID = 1;
console.log(cashInRegister);
/**
 * Challenge: add a utility function addNewPizza that takes a pizza object
 * and adds it to the menu .
 */
function addNewPizza(pizza) {
    menu.push(pizza);
}
function placeOrder(pizzaName) {
    var selectedPizza = menu.find(function (pizzaObj) { return pizzaObj.name === pizzaName; });
    // add the income to cashInRegister
    // pushes a new order object to the orderQueue
    // {eg{pizza: 'Margheritac', satus:'ordered'}}
    // return the new orderOBject
    if (!selectedPizza) {
        console.error("".concat(pizzaName, " does not exist"));
        return;
    }
    cashInRegister += selectedPizza.price;
    console.log(cashInRegister);
    var order = { id: orderID++, pizza: selectedPizza, status: 'ordered' };
    orderQueue.push(order);
    return order;
}
function completeOrder(orderID) {
    var order = orderQueue.find(function (orderobj) { return orderobj.id === orderID; });
    order.status = 'completed';
    return order;
}
addNewPizza({ name: "Chicken Bacon", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicay Meat", price: 12 });
placeOrder("chicken Bacon");
console.log(placeOrder('Margheritac'));
completeOrder(1);
console.log("Menu", menu);
console.log("Cash In Register:", cashInRegister);
console.log("Order Queue", orderQueue);
