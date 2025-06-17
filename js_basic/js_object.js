// singleton 

//  object literals 

// Object.create

const mySym = Symbol("key1")

const jsUser ={
    name: "Varsha",
    "fullname": "Varsha Tomar",
    [mySym] :"myKey1",    // to refer the symbol use the square breakets.
    mySym:"mykey2", // it is a normal object value here not symbol.
    age: 21,
    location: "Gwalior",
    email: "varsha.tomar@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]
}

// console.log(jsUser["email"])
// console.log(jsUser["fullname"])
// console.log(jsUser.mySym)
// console.log(jsUser[mySym])
// console.log(typeof mySym)

// to change the values

jsUser.email ="barsha.tomar@gmail.com"
Object.freeze(jsUser)
jsUser.email ="radhika@crosoft.com"
console.log(jsUser)

console.log(jsUser["email"])

jsUser.greeting = function(){
    console.log("hello user")
}

console.log(jsUser.greeting);