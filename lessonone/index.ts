// primitive Data Types: string, number, boolean
// Explicitly type the variable

let myName: string = "Dhrubo"
let myAge : number = 21
let isMarried: boolean = false

let ages =  [100,230]


// creating new type

type Food = string

let favFood: Food = "Mango"

// object type 

type Address = {
    street: string
    country: string
    postCode: number
}

type Person = {
    name: string
    age: number
    isMarried: boolean
    // nested object
    address?: Address
}


let person1: Person = {
    name: "Dhrubo",
    age: 21,
    isMarried: true,
}

let person2:Person = {
    name: "Roky",
    age: 31,
    isMarried: false,
    address:{
        street: "Dhaka",
        country: "Bd",
        postCode: 1200
    }
}

function displayInfo(person){
    console.log(`${person.name} lives at ${person.address.street}`);
    
}

displayInfo(person1)


// people is array of person object

let people: Person[] = [person1,person2]

// also can do Array<Person>





