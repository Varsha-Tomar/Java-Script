// Primitive

// 7 types : String,Number,Boolean,null, undefined, symbol, Bigint

// Refrence type (non primitive):

const score =100
const scoreValue = 100.5
const isLoggedIn = false
const outsideTemp = null

const id = Symbol('123')
const anotherId = Symbol('123') 

console.log(id === anotherId);   // false, symbols are unique

const BigNumber = 1234567890123456789012345678901234567890n;     // BigInt

// Array, Obects, Functions

const heros = ["shiva","Naaga", "Allu Arjun", "NTR  Rama Rao"]


    let myObj = {
        name :"Varsha",
        age : 21
    }

const myFunction = function() {
    console.log("hello world");
}

console.log(typeof myFunction)

