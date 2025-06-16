const marvel_heros = ["Thor","Ironman","Spiderman"];
const dc = ["Superman","flash","Batman"]

marvel_heros.push(dc)

console.log(marvel_heros);

const a = marvel_heros.concat(dc)
console.log(a)

// spread operator ...

const all_new_heros = [...marvel_heros,...dc]
console.log(all_new_heros)

const another_array = [2,5,6,[5,6,6],3,[1,2,4]];

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array)
