// Constant dataType used to declare the variable which we cannot change once we create that.
const StudID = 320074;

let stuMail = "mnwzz@gmail.com";

var stuPass = "msnwzz";

stuCity = "Bangalore";

/*

    let and var are the most common variable declarations for declaring variables in JS.
    But Var has some problems such as A variable declared with var is defined throughout the program. One of the issues with using the var keyword was redeclaring a variable inside a block will also redeclare the variable outside the block. 

    So most of the developer's uses the let declaration.

    stuCity = "Bangalore"; // We can declare variable without any dataType before it. 

*/

let stuState; // variable has been declared but value hasn't given. So it will give Undefined result.


// StudID = 0077; // It will give error because of updating const variable..

stuMail = "msn@gmail.com"; // It wont give error

stuPass = "password"; // It wont give error

stuCity = "Anantapur" // It wont give error


console.log(StudID);
console.log(stuMail);
console.log(stuPass);
console.log(stuCity);



console.table([StudID, stuMail, stuPass, stuCity, stuState])  // This command will print the data in tabular format.

