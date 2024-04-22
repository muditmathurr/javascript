function chai() {
    console.log(`DB CONNECTED`);
}
chai();

// function which immediately executed 
// Immediately Invoke Function Expression (IIFE)

// wrap the function in ()
(function chaii() {
    console.log(`Database Connected`);
})();

// used because global scope pollution is a problem, so to discard the variable, declaration etc

// arrow function can also be used
( () => {
    console.log(`connected db`);
})();
