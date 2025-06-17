// const tinderUser = new Object() 

const tinderUser = {} 

tinderUser.id ="123abc"
tinderUser.name ="Harry Potter"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser ={
    email: "radha@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Anamika",
            lastname: "Tomar"
        }

    }
}

console.log(regularUser.fullname.userfullname.firstname)