// singleton
// Object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Mudit",
    "full name" : "Mudit Mathur",
    [mySym] : "mykey1", 
    age : 24,
    location : "Jaipur",
    email : "mudit@google.com",
    isLoggedIn : false,
    lastLoginDay : ["Monday", "Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);  //JsUser.full name is not a option
// console.log(JsUser[mySym]);

JsUser.email = "mudit@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "mudit@contact.com"

// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS User");
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());