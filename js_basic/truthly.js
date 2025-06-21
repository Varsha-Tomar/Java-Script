const userEmail = "v@rsha.ai"

if(userEmail) {
    console.log("Got user email");
}
else {
    console.log("Don't have user email");
}

// false, 0, -0 BigInt 0n, "", null, undefined, NaN 

// truthly values 
// "0", 'false' " ", [], {}, function() {}

// false == 0
// true

// Nullish coalescing Operator (??): null undefined

let val1;
// val1 = 5??10
// val1 = null??10

// val1 = undefined ?? 55

val1 = null ?? 10 ?? 15

console.log(val1);

// Terniary operator

// condition ? true: false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("Less than 80") : console.log("MOre than 80")