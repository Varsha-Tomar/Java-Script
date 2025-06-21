const programming = ["js","cpp","ruby","java","py"];
// call back have no name

// programming.forEach( function (item) {
//     console.log(item)
// })

// arrow function

// programming.forEach((item) => {
//     console.log(item)
// })

// function printMe(item) {
//     console.log(item);
// }
// programming.forEach(printMe)


//**** arrow function has three parameters (item,index,complete array)

// programming.forEach( (item,index,arr) => {
//     console.log(item,index, arr);
// })

const myCoding = [
    {
    languageName: "javascript",
    languageFileName: "js"
},
    {
    languageName: "java",
    languageFileName: "java"
},
    {
    languageName: "python",
    languageFileName: "py"
}

]

myCoding.forEach( (item) => {
    console.log(item.languageFileName)
    console.log(item.languageName)
})