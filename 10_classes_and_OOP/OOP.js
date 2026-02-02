// Object literal

const user = {
    username : "Rahul", 
    loginID : "bandupatil@gmail.com",
    city : 'Karnatak',

    getUserdetails: function(){
        // console.log("Find out the user details");
        // console.log(`Username : ${this.username}`);
         console.log(this);
        
        
    }
}   

// console.log(user.city);
// console.log(user.getUserdetails());
//  console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username; 
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    greetting = function (){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

const userOne = new User("Rahul", 22, true)
const userTwo = new User("Bandya", 21, false)

// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);
console.log(userTwo instanceof User); // true
