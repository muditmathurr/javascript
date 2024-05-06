const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network

    setTimeout(() => {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log('Promise consumed');
})

 // without using any variable

new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Async task 2');
        resolve()
    }, 1000);
}).then(() => {
    console.log('Async 2 resolved');
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve({username: "muditmathurr", password: "1234"})    
    }, 1000);
})
.then((user)=>{
    console.log(user);
})

const promiseFour = new Promise((resolve, reject)=> {
    setTimeout(() => {
        let error = true
        if(!error) {
            resolve({first_name: "mudit", last_name: "mathur"})
        } else {
            reject('Error : Something went wrong')
        }    
    }, 2000);
})

promiseFour
.then((user)=> {
    console.log(user);
    return user.first_name
})
.then((user) =>{
    console.log(username);
})
.catch((error) =>{ 
    console.log(error);
})
.finally(() => console.log('The Promise is either resolved or rejected.'))


// Async await 
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error) {
            resolve({car_company: "Tata", model: "Nexon"})
        } else {
            reject('ERROR : Javascript went wrong')
        }    
    }, 2000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// async function getAllUsers() {
//    try {
//        const response = await fetch('https://jsonplaceholder.typicode.com/users')
//        const data = await response.json()
//        console.log(data);

       
//     } catch (error) {
//         console.log("E: ", error)
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error)=> {
    console.log(error);
}) 