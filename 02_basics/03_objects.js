// singleton 
// Object.create

//object literals

const mySymoble = Symbol("#@!")

const JsUser = {
    name: "Rahul", 
    "full name" : "Rahul Patil",
    age: 21,
    [mySymoble] : "Symbole", // '[ ]' act like a key
    location : "Karnataka",
    gmail: "rahul@gmail.com",
    logedIn : true,
 
}

// console.log(JsUser.name);
// console.log(JsUser["gmail"]);
// console.log(JsUser[mySymoble]);

JsUser.gmail = "rahul@youTube.com";
//  Object.freeze(JsUser)

 JsUser.gmail = "rahul@chrome.com"
//  console.log(JsUser);
 

JsUser.greeting = function()
{
    console.log("Hello JS User");
    
}


JsUser.greetingTwo = function()
{
    console.log(`Hello JS User, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


