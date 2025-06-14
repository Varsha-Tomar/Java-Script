const name ="Varsha"
const repoCount =5

console.log(name + repoCount +" Value")

console.log(`Hello my name is ${name}`) // String Interpolation 

const gameName = new String ("Radha")

console.log(gameName[0])

console.log(gameName.__proto__) // String.prototype

console.log(gameName.length) // 5
console.log(gameName.toUpperCase()) // RADHA

console.log(gameName.charAt(2)) // d
console.log(gameName.indexOf("a")) // 1
console.log(gameName.lastIndexOf("a")) // 3
console.log(gameName.slice(1, 4)) // adh
console.log(gameName.substring(1, 4)) // adh
console.log(gameName.split("a")) // [ 'R', 'dh', '' ]
console.log(gameName.replace("a", "o")) // Rodha
console.log(gameName.includes("Rad")) // true
console.log(gameName.startsWith("Ra")) // true
console.log(gameName.endsWith("ha")) // true
console.log(gameName.search("a")) // 1
console.log(gameName.trim()) // Radha (removes whitespace from both ends)
console.log(gameName.valueOf()) // Radha (returns the primitive value of the string)
console.log(gameName.concat(" Sharma")) // Radha Sharma (concatenates strings)
console.log(gameName.repeat(2)) // RadhaRadha (repeats the string)
console.log(gameName.toLowerCase()) // radha
console.log(gameName.toString()) // Radha (converts to string)
console.log(gameName.match(/a/g)) // [ 'a', 'a' ] (returns an array of matches)
console.log(gameName.padStart(10, '*')) // *****Radha (pads the start with '*')
console.log(gameName.padEnd(10, '*')) // Radha***** (pads the end with '*')
console.log(gameName.localeCompare("Radha")) // 0 (compares strings in the current locale)
console.log(gameName.normalize()) // Radha (normalizes the string)
console.log(gameName.toLocaleLowerCase()) // radha (converts to lowercase in the current locale)
console.log(gameName.toLocaleUpperCase()) // RADHA (converts to uppercase in the current locale)
console.log(gameName.anchor("anchorName")) // <a name="anchorName">Radha</a> (creates an anchor element)
console.log(gameName.big()) // <big>Radha</big> (returns a big element)
console.log(gameName.blink()) // <blink>Radha</blink> (returns a blink element)
console.log(gameName.bold()) // <b>Radha</b> (returns a bold element)
console.log(gameName.fixed()) // <tt>Radha</tt> (returns a fixed-width font element)
console.log(gameName.fontcolor("red")) // <font color="red">Radha</font> (returns a font element with color)         

const url ="https://www.google.comjhkjhkhjgjhgjh"

console.log(url.replace('jh','-'))        // https://www.google.com