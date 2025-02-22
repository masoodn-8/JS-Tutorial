let number = 800; //if we declare like this, sometimes it might be number, sometimes It might not.

// console.log(number);

let num = new Number(800000); // It is definitely number.

// console.log(num);


//Number methods : 

// console.log(num.toString()); //Converts number into string
// console.log(num.toFixed(2)); //Fix the precision value to the two fixed decimals
// console.log(num.toLocaleString()); //outputs the number into US standard type with commas. 
// console.log(num.toLocaleString('en-IN')); //outputs the number into Indian standard type with commas.


// Maths in JavaScript

console.log(Math.abs(-8)); //Converts the negative value into positive, but won't convert positive to negative.
console.log(Math.round(8.2)); //It will round off the 8.2 to 8.
console.log(Math.min(2,3,1,4)); //Outputs the minimum of the given numbers.
console.log(Math.random()); //gives the random value from 0 to 1.
console.log((Math.random() * 10) + 1); //gives the random value from 1 to 10.


const min = 10;
const max  = 20;

console.log(Math.floor(Math.random() * (max - min + 1)+ min));







