// for in loop

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
} 

const programming = ["js","cpp","ruby","java","py"];

for(const key in programming) {

    // objects pr loop lgane ke liye for in ka use krte hai jbki map par loop lgane ke liye  for of ka use krte hai 

    // console.log(key);
    console.log(programming[key]);
}

const map = new Map()

map.set('IN',"India")
map.set('USA',"United state of America")
map.set('Fr', "France")
map.set('IN',"India")

for(const key in map) {
    console.log(key);
}