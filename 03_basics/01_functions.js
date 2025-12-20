function functionName (){
    console.log("R");
    console.log("A");
    console.log("H");
    console.log("U");
    console.log("L");
}

// functionName ()


// function addTwoNumber(num1, num2) {

//     console.log(num1 + num2);
    
// }


function addTwoNumber(num1, num2) {

    // let result = num1 + num2
    // console.log("Rahul");
    // return result; 
    
    return num1 + num2;
    console.log("Rahul")   // if call return then nothing else will be execute. 
    

}

const result = addTwoNumber(3, 8)

// console.log("Result : ", result);


function loginUseMessage(username = "sam"){
    if(!username ){
        console.log("Please enter Username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUseMessage("Rahul"))   outputs: //Rahul just logged in
// console.log(loginUseMessage(""))                 // just logged in
// console.log(loginUseMessage("Bandu"))   // undefined just logged in



//    function calculateCartPrice(num1) // 299
//    function calculateCartPrice(...num1) // [ 299, 399, 499, 1999 ]
   function calculateCartPrice(val1, val2, ...num1) // [ 499, 1999 ]
   {
    return num1
   }

//    console.log(calculateCartPrice(299, 399, 499, 1999));
   
const user = {
    userName: "Rahul", 
    price : "@1999"
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
    
}
// handleObject(user)

handleObject({
    userName : "sam",
    price : 399
})

const myNewArray = [200, 400, 500, 399]

function returnThirdValue(arrayValue)
{
    return arrayValue[2]
}
// console.log(returnThirdValue(myNewArray));
console.log(returnThirdValue([200, 400, 500, 1000]));
