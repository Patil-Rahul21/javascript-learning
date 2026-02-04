// let myName = "Rahul      "
// let surName = "PAtil      "
// console.log(myName.truelength);


let myHeros = ["Army", "Farmer"]

let heroPower = {
    Army : "Gun",
    Farmer : "Land",

    getArmyPower : function (){
        console.log(`Army Power is ${this.Army}`);
        
    }
}

Object.prototype.rahul = function(){
    console.log(`rahul is present in all objects`);
    
}

Array.prototype.helloRahul = function(){
    console.log(`Rahul is a best Wicket Kipper in half-fich cricket`);
    
}

// myHeros.rahul();
// heroPower.rahul();
// myHeros.helloRahul();
// heroPower.helloRahul()


// inheritance

const User ={
    username : "Don",
    email : "donNumber1@gmail.com"
}

const Player = {
    playGame : true
}


const cochingSupport = {
    isAvailable : false
}

const MNGSupport = {
    ProvideFund : 'Amounts',
    fullTime: true,
    __proto__: cochingSupport,
}

Player.__proto__ = User


// modern syntax
Object.setPrototypeOf(cochingSupport, Player)

let anotherUsername = "SumitPatil     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True lenght is: ${this.trim().length}`);
    
}

anotherUsername.trueLength()
"Rahul".trueLength()
"pharsan".trueLength()
