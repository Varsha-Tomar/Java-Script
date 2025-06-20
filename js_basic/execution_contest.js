/* 
Function Execution Context 

1. Global execution Context
2. function execution Context
3. eval execution Context

{} memoy (creation phase) phase

execution phase 

Global execution phase is (This)

memory phase 

val1 = undefined
val2 = undefined
addnum =defination
result1 = undefined
result2 = undefined

execution phase

val1 = 10
val2 = 5



*/

function one() {
    console.log("one")
    two()
}

function two() {
    console.log("Two")
    three()
}

function three() {
    console.log("Three")
}

one()
two()
three()