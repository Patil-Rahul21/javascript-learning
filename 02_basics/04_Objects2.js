// const tinderUser = new Object()  // singleton object

const tinderUser = {} // non- singleton object


tinderUser.id = "123tfdsx"
tinderUser.name = "Rahul"
tinderUser.email = "rahulspatil@345"
tinderUser.isloggedIn = false

// console.log(tinderUser);


const regularUsers = {
    email: "Banduemail.com",
    fullname : {
        userFullname : {
            firstname : "Rahul",
            lastname : "Patil",
        }
    }
}
// console.log(regularUsers.fullname.userFullname.firstname);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}
const obj4 = {5 : "c", 6 : "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1 , obj2, obj4) // it's help to marging 

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);


const Users = [
    {
        id : 20,
        email : "Rahul@google.com"

    },
    {
        id : 20,
        email : "Rahul@google.com"

    },
    {
        id : 20,
        email : "Rahul@google.com"

    }
]
 
Users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('rollNo'));


const course = {
    coursename: "JS in hindi",
    price: "9999",
    courseInstructor : "Hitesh"
}
// course.courseInstructor

const  {courseInstructor:Instructor} = course  // {} to create de-structure in react

// console.log(courseInstructor);

console.log(Instructor);


//JSON Syntax.
// {
//     "Name": "Rahul",
//     "Std_id":"210",
//     "course": "BCA"
// }

// {
//   "array": [
//     1,
//     2,
//     3
//   ],
//   "boolean": true,
//   "color": "gold",
//   "null": null,
//   "number": 123,
//   "object": {
//     "a": "b",
//     "c": "d"
//   },
//   "string": "Hello World"
// }