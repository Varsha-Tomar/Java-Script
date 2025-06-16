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


let myTimeStamp = Date.now();  // return current timestamp in milliseconds
console.log(myTimeStamp);  // return current timestamp in milliseconds

console.log(mycreatedDate.getTime());

console.log(Date.now()/1000);

console.log(Math.floor(Date.now()/1000));  // return current timestamp in seconds

let newDate = new Date();

console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getYear());

newDate.toLocaleString('default',{
    weekday: 'long',  // long, short, narrow
    year: 'numeric',  // numeric, 2-digit
    month: 'long',  // numeric, 2-digit, long, short, narrow
    day: 'numeric',  // numeric, 2-digit
    hour: 'numeric',  // numeric, 2-digit
    minute: 'numeric',  // numeric, 2-digit
    second: 'numeric',  // numeric, 2-digit
    timeZoneName: 'short'  // short, long   
})