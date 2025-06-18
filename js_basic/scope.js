// var has unsertainty it is globly used in code so var is not used in our code

var c = 300
let a = 890
if(true) {
    let a =20
    const b = 40
    var c = 50
    // console.log("inner:",a)
}

// console.log(a)
// console.log(b)
// console.log(c)

// nested scope

function one() {
    const username = "Hitesh"

    function two() {
        const website = "youtube"
        // console.log(username)
    }
    // console.log(website);
    two()
}
// one()

if(true) {
    const username = "Varsha"
    if(username === "Varsha") {
        const website = " Youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)

// +++++++++++++++++++ interesting +++++++++++++++++++++++++

addone(5)
function addone(num) {
    return num +1
}

addone(5)
// addTwo(4)
const addTwo = function(num) {
    return num + 2
}
addTwo(5)