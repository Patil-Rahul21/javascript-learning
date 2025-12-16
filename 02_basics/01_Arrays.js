//Array

const myArray = [0, 1, 2, 3, 4]
const myMovies = ["CID", "Thriller"]

const myArray2 = new Array(1, 2, 3, 4, 5)
// console.log(myArray[1]);


//Arrays Methods

// myArray.push(5) // add element at end
// myArray.push(7) // remove element from end
// myArray.pop()

// myArray.unshift(33) // [ 33, 0, 1, 2, 3, 4 ]
// myArray.shift()    // [ 0, 1, 2, 3, 4 ]


// console.log(myArray.includes(2)); // true or false if element is present or absent.
// console.log(myArray.indexOf(4)); // it's return  index value.


// const newArr = myArray.join() // it's converts into string type 
// console.log(myArray);
// console.log(newArr); //0,1,2,3,4
// console.log(typeof newArr); //string




// * slice, splice


console.log("A ", myArray); //  [ 0, 1, 2, 3, 4 ]
console.log(myArray);


console.log("B ", myArray);
const myarr1 = myArray.slice(1, 3) // [ 1, 2]
console.log(myarr1);



const myarr2 = myArray.splice(1, 3) // [ 1, 2, 3 ]

console.log("C ", myArray); // [0, 4]  remain elemets in origenal array afetr slice and splice.
console.log(myarr2);




