
type Pizza = {
    id: 
    name: string
    price: number
}

type Order = {
    id: number 
    pizza: Pizza,
    status: "pending" | "completed" | "canceled" | "ordered"
}


const menu: Pizza[] = [
    { name: 'Margheritac', price: 8},
    { name: 'Marinara', price: 9},
    { name: 'Quattro Stagioni', price: 10},
    { name: 'Carbonara', price: 12},
    { name: 'Frutti di Mare', price: 10},
]



let cashInRegister = 100;
let orderQueue:Order[] = [];
let orderID = 1;

console.log(cashInRegister)

/**
 * Challenge: add a utility function addNewPizza that takes a pizza object
 * and adds it to the menu .
 */


function addNewPizza(pizza:Pizza):void {
    menu.push(pizza);
}



function placeOrder(pizzaName:string):Order|undefined{
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
    const order:Order = {id: orderID++ , pizza: selectedPizza, status: 'ordered'};
    orderQueue.push(order);
    return order;
}



function completeOrder(orderID : number):Order|undefined{
    const order = orderQueue.find(orderobj => orderobj.id === orderID);
    if(!order){
        console.error(`${order} does not exist`)
        return
    }
    order.status = 'completed';
    return order;
}

export function getPizzaDetails(identifier: string|number):Pizza|undefined{

    if(typeof identifier === "string"){
        return menu.find(pizzaObj=> pizzaObj.name.toLowerCase() === identifier.toLowerCase())
    }else if(typeof identifier==='number'){
        return menu.find(pizzaObj=> pizzaObj.id===identifier)
    }else{
        throw new TypeError("Paramerter 'identifier' must be number or string")
    }



//     const selectedPizza = menu.find(p izzaObj => pizzaObj.id === identifier || pizzaObj.name === identifier)
  
//   return selectedPizza

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
console.log(getPizzaDetails("Chicken Bacon"));
// console.log(getPizzaDetails(true));




