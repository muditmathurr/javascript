// console.log("M");
// console.log("U");
// console.log("D");
// console.log("I");
// console.log("T");

// function sayMyName(parameters) {
//     console.log("M");
//     console.log("U");
//     console.log("D");
//     console.log("I");
//     console.log("T");
// }

// sayMyName(arguments)


//console
function addTwoNumber(n1, n2) {
    console.log(n1 + n2);
}

// return
function addTwoNumber(n1, n2) {
    let result = n1 + n2
    return result
}
const result = addTwoNumber(5, 6)
console.log("Result: ", result);

function userLogIn(username) {
    return `${username} just logged in`
}

// console.log(userLogIn("MUDIT"));
// console.log(userLogIn()); // WILL GIVE undefined


// if else
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Mudit"))
// console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "mudit",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));