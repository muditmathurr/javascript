const accountId = 133345
let accountEmail = "mudit@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 // not allowed

accountEmail = "mm@gmail.com";
accountPassword = "1122";
accountCity = "Gurgaon";

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);