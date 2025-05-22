// primitive Data Types: string, number, boolean
// Explicitly type the variable

let myName: string = "Dhrubo"
let myAge : number = 21
let isMarried: boolean = false


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
    address: Address
}


let person1: Person = {
    name: "Dhrubo",
    age: 21,
    isMarried: true,
    address:{
        street: "Dhaka",
        country: "Bd",
        postCode: 1200
    }
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


