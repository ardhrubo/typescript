// let myName: "Bob" = "Booby"
// const myName2: "Bob" = "Booby"


// union type - kind of enums


type UserRole = "guest" | "member" | "admin"

// let userRole: UserRole = "dfsadfhs" // show error

type User = {
    username: string,
    role: UserRole
}



