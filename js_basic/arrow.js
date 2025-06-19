const user = {
    username: "Varsha",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }

}
user.welcomeMessage()
user.username = "Radhika"
user.welcomeMessage()

// function fruit() {
//     let username ="varsha"
//     console.log(this.username)
// }

// fruit()


const fruit = () => {
    let username ="varsha"
    console.log(this)
}

fruit()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

const addTwo = (num1, num2) =>  num1 + num2
// implicit pass if statement is one line no need to write return keyword

console.log(addTwo(4,7))

