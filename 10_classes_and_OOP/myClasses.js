// ES6 

// class User {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword() {
//         return `${this.password} abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const Arjun = new User("Arjun", "Pandav5@gmail.com", "Krishna")

// console.log(Arjun.encryptPassword());

// console.log(Arjun.changeUsername());


//behind the scene 

function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}1111`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const Ram = new User("Ram" , "ram@gamil.com", "Hanuman")

console.log(Ram.encryptPassword());
console.log(Ram.changeUsername());
