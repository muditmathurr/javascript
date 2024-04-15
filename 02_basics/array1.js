const marvel_heros = ["Thor", "Ironman", "Hulk"]
const dc_heros = ["Superman", "Batman", "Wonder Women"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);


// Concat operator
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


// Spread Operator --> Mostly used
const allNewHero = [...marvel_heros, ...dc_heros]
// console.log(allNewHero);


const another_array = [1,2,3, [4,5,6],7,[8,9,[10,11]]]
const new_another_array = another_array.flat(Infinity)
// console.log(new_another_array);


console.log(Array.isArray("Mudit"))
console.log(Array.from("Mudit"))
console.log(Array.from({name: "Mudit"})) // intereting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));