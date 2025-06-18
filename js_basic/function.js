
function addTwoNumbers(num1,num2) {
    let result = num1+num2;
    return result   
    // result ke baad kuch bhi print nhi hota hai

}

console.log(addTwoNumbers(6,8))
addTwoNumbers(89,65)


function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(20,56,45))

const user = {
    username: "Hitesh",
    price: 199
}
function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

handleObject({      // here also used the object and it directly return the value(output)
    username: "sam",
    price: 799
})

const myNewArray = [400,300,200,100]
function returnSecondValue(getArray) {
    return getArray[3]
}

// console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue(4400,3300,8800,900));

