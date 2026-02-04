//promiseOne

const promiseOne = new Promise(function (resolve, reject) {
    // do an Async 
    // DB calls, cryptograpy, network

    setTimeout(function () {
        console.log('Async task is Compelete');
        resolve()
    }, 1000)

})
promiseOne.then(function () {
    console.log('Promise consumed');
})


//PromiseTwo

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 2');
        resolve()
    }, 1000)
}).then(function () {
    console.log('Async 2 resolved');
})


//promiseThree

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Rahul", email: "rahulpatil@gmail.com" })

    }, 1000);
})
promiseThree.then(function (user) {
    console.log(user);

})


//Promise four

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ Id: '12', userName: "Bandu" })
        } else {
            reject('ERROR:something went wrong')
        }

    }, 1000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.userName
    })
    .then((userName) => {
        console.log(userName);

    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(() => (console.log("Promise is either resolved or rejected")
    ))



//PromiseFive

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ R_No: '110', userName: "Rahul Patil" })
        } else {
            reject('ERROR:Promises went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const reponse = await promiseFive
        console.log(reponse);
    } catch (error) {
        console.log(error);

    }
}

consumePromiseFive();

// async function getAllusers() {
//    try {
//      const response = await fetch('https://jsonplaceholder.typicode.com/users')

//      const data = await response.json()
//     console.log(data)
//    } catch (error) {
//     console.log("E", error);
//    }
// }

// getAllusers()


fetch('https://jsonplaceholder.typicode.com/users')
    .then((output) => {
        return output.json()
    })
    .then((data) => {
        console.log(data);

    })
    .catch((error) => console.log(error))
    
