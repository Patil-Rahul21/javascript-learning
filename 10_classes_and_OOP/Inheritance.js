class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME IS ${this.username}`);  
    }
}

class Teacher extends User{
    constructor(username, email, password){
    super(username)
    this.email = email
    this.password = password
    }

    addCourse(){
        console.log(`A new Course was added by ${this.username}`)
    }
}

const Rahul = new Teacher("Rahul", "rahul@gmail.com", 1234)
Rahul.addCourse();

Rahul.logMe()

const Bandya = new User("Bandyaa")

Bandya.logMe()

console.log(Rahul instanceof Teacher);