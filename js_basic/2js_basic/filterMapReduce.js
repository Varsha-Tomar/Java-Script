/*

const coding = ["js","ruby","java","python","cpp"];

 const value = coding.forEach( (item)=> {
    console.log(item);
    return item
})

// for each loop value return nhi krta hai


// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10] 

const newnums = myNums.filter( (num) =>num > 4 )
    console.log(newnums);

    // if we use curli brases then it is compalsory to use return keybord.

    //  otherwise no need to return keybord

const newNums = [] 

myNums.forEach ( (num) => {
    if(num > 4) {
        newNums.push(num);
    }
})

console.log(newNums);

const books = [
    {title: 'Book One' ,genre : 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two' ,genre : 'Non-Fiction', publish: 1992, edition: 2008},
    {title: 'Book Three' ,genre : 'History', publish: 1999, edition: 2007},
    {title: 'Book Four' ,genre : 'Non-Fiction', publish: 1989, edition: 2010},
    {title: 'Book Five' ,genre : 'Science', publish: 2009, edition: 2014},
    {title: 'Book Six' ,genre : 'Fiction', publish: 1987, edition: 2010},
    {title: 'Book Seven' ,genre : 'History', publish: 1986, edition: 1996}
];

let userBooks = books.filter ( (bk) => bk.genre ==='History')


userBooks = books.filter( (bk) => {
    return bk.publish >= 2000})
console.log(userBooks);

//**************************************

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNumbers.map( (num) => {
    // return num+10})

const newNum = myNumbers    
    .map ( (num) => num *10 )
    .map( (num) => num+1)       // multiple map use again and again
    .filter( (num) => num >= 40)
console.log(newNum)

*/

const myNums = [1,2,3] 

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)


// acc = accumulator
// currval = current value

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 3999
    },
    {
        itemName: "java course",
        price: 4999
    },
    {
        itemName: "cpp course",
        price: 1999
    }
]

 const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price,0)

 console.log(priceToPay);