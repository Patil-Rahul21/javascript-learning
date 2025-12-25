//Immediately Invoke Function Expressions (IIFE)

(function chai() {
    // named IIFE
    console.log(`DB Connected`);
    
})(); //


((name) => {                               // if you run this funtion then end the above code first using semicolon ;
    console.log(`DB Connected tWo ${name}`);
})('Rahul')