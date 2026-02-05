const user = {
    _email : 'Rahul@p.com',
    _password : "xyz",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const ram = Object.create(user)
console.log(ram.email);
