// primitive Data Types: string, number, boolean
// Explicitly type the variable
var myName = "Dhrubo";
var myAge = 21;
var isMarried = false;
var ages = [100, 230];
var favFood = "Mango";
var person1 = {
    name: "Dhrubo",
    age: 21,
    isMarried: true,
};
var person2 = {
    name: "Roky",
    age: 31,
    isMarried: false,
    address: {
        street: "Dhaka",
        country: "Bd",
        postCode: 1200
    }
};
function displayInfo(person) {
    console.log("".concat(person.name, " lives at ").concat(person.address.street));
}
displayInfo(person1);
// people is array of person object
var people = [person1, person2];
// also can do Array<Person>
