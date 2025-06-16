// let myName: "Bob" = "Booby"
// const myName2: "Bob" = "Booby"


// union type - kind of enums


type UserRole = "guest" | "member" | "admin"

// let userRole: UserRole = "dfsadfhs" // show error

type User = {
    username: string,
    role: UserRole
}

const users:User[] = [
    {username: "Atik",role: "member"},
    {username:"Ifty",role:"admin"},
    {username:"Roky",role:"guest"}
]


function fetchUserDetails(username:string):User {
    const user = users.find(user=>user.username===username)
    if(!user){
        throw new Error(`User with username ${username} not found`)

    }
    return user
}



console.log(fetchUserDetails("aik"))
console.log(fetchUserDetails("Atik"));



let val:any = 1
val = "d"
