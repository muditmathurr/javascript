// const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Mudit"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "mudit@user.in",
    fullname: {
        userfullname: {
            firstname: "Mudit",
            lastname: "Mathur"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}

// const obj3 = {obj1, obj2}                                           // ({}    , obj1, obj2) 
// const obj3 = Object.assign(obj1, obj2) // Object.assign({}, obj1, obj2) =>(target, source)

// Spread Operator
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "mm1@gmail.com"
    },
    {
        id: 2,
        email: "mm2@gmail.com"
    },
    {
        id: 3,
        email: "mm3@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "mudit"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "mudit",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]