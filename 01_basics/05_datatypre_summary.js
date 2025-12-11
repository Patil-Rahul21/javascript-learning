// primite datatypes 

// 7 types : String, number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3


const isLoggedID = false
const outsideTemp = null
let userEmail; // undefined

const Id = Symbol('1234')
const anotherId = Symbol('1234')

console.log(Id === anotherId);

const bigNumber = 1234567567543n





// Reference DT (non Primitive)

//Array, Objects, Functions

const heors = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
    
}

// console.log(typeof score)
console.log(typeof scorevalue)
console.log(typeof isLoggedID)
console.log(typeof outsideTemp)
console.log(typeof userEmail)
console.log(typeof Id)
console.log(typeof anotherId)
console.log(typeof bigNumber)
console.log(typeof heors)
console.log(typeof myFunction)