class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createID(){
        return `123`
    }
}

const Rahul = new User("Rahul")
// console.log(Rahul.createID());


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const  Android = new Teacher("redmi", "redmi@gmail.com")
console.log(Android.createID());
