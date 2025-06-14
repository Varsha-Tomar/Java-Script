// Stact (primitive), Heap (non-primitive)

let user = {
    email: "user@google.com",
    upi : "user@ybl"
}  


let serTwo = user
// userTwo is a reference to the same object in memory as

console.log(user.email) 
console.log(userTwo.email)
// Changing userTwo will also change user
userTwo.email = " "// userTwo is a reference to the same object in memory as user
console.log(user.email) // userTwo is a reference to the same object in memory as user
console.log(userTwo.email) // userTwo is a reference to the same object in memory as user
// userTwo is a reference to the same object in memory as user
// userTwo is a reference to the same object in memory as user
// userTwo is a reference to the same object in memory as user
