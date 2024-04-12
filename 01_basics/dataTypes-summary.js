// Datatypes

//1. Premitive

// 7 types : String, Number, Boolean, null, undefined, Symbol(Value ko unique banata deta hai), BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



//2. Reference or Non-Premitive

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "mudit",
    age: 24,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Array, Objects, Functions

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// MEMORY
// Stack, Heap

let myYoutubeName = "muditYT"
let anotherName = myYoutubeName
anotherName = "YTmudit"

console.log(myYoutubeName)
console.log(anotherName)

let userOne = {
    email: "mudit@google.com",
    upi: "mudit@ybl"
}

let userTwo = userOne

console.log(userTwo)