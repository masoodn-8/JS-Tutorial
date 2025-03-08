//Immediately Invoked Function Expressions (IIFE)

//We will have some problem with the global scope pollution, that will cause sometimes the functions to output error. So we use IIFE to immediately execute the fun once it is created.

(function greet() {
    console.log("Hello Coder !");
    
})();

(function greetTwo(name) {
    console.log(`Hello Coder ${name} !`);
    
})("Masood")