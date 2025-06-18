// var has unsertainty it is globly used in code so var is not used in our code

var c = 300
let a = 890
if(true) {
    let a =20
    const b = 40
    var c = 50
    console.log("inner:",a)
}

console.log(a)
// console.log(b)
console.log(c)