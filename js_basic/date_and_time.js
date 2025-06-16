// dates

let myDate = new Date()
console.log(myDate);    // return current date and time

console.log(myDate.toString());
console.log(myDate.toDateString());  // return only date
console.log(myDate.toTimeString());  // return only time
console.log(myDate.toLocaleString());  // return date and time in local format
console.log(myDate.toISOString());  // return date and time in ISO format
console.log(myDate.getFullYear());  // return year
console.log(myDate.getMonth());  // return month (0-11)
console.log(myDate.getDate());  // return date (1-31)

console.log(typeof(myDate));

let mycreatedDate = new Date(2023,0,23)
console.log(mycreatedDate.toDateString());  // return date and time of created date