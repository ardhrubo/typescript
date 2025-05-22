
type Pizza = {
    name: string
    price: number
}

type Order = {
    id: number
    pizza: Pizza,
    status: string
}


const menu = [
    {name: 'Margheritac', price: 8},
    {name: 'Marinara', price: 9},
    {name: 'Quattro Stagioni', price: 10},
    {name: 'Carbonara', price: 12},
    {name: 'Frutti di Mare', price: 10},

]



let cashInRegister = 100;
let orderQueue:Order[] = [];
let orderID = 1;

console.log(cashInRegister)

/**
 * Challenge: add a utility function addNewPizza that takes a pizza object
 * and adds it to the menu .
 */


function addNewPizza(pizza:Pizza) {
    menu.push(pizza);
}



function placeOrder(pizzaName:string){
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);

    // add the income to cashInRegister
    // pushes a new order object to the orderQueue
    // {eg{pizza: 'Margheritac', satus:'ordered'}}
    // return the new orderOBject

    if(!selectedPizza){
        console.error(`${pizzaName} does not exist`)
        return
    }


    cashInRegister += selectedPizza.price;
    console.log(cashInRegister);
    const order = {id: orderID++ ,pizza: selectedPizza, status: 'ordered'};
    orderQueue.push(order);
    return order;
}



function completeOrder(orderID : number){
    const order = orderQueue.find(orderobj => orderobj.id === orderID);
    if(!order){
        console.error(`${order} does not exist`)
        return
    }
    order.status = 'completed';
    return order;
}


addNewPizza({name:"Chicken Bacon", price:12})
addNewPizza({name: "BBQ Chicken", price: 12})
addNewPizza({name: "Spicay Meat", price: 12})

placeOrder("chicken Bacon")

console.log(placeOrder('Margheritac'));
completeOrder(1)

console.log("Menu",menu)
console.log("Cash In Register:", cashInRegister)
console.log("Order Queue", orderQueue)




