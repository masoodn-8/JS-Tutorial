//Display the greet message 

function greet(name){
    console.log(`Hello ${name} welcome`);
    
}

greet("Masood");

//Return the greet message into string
function greetStr(name){
    return  `The ${name} is the greatest`;
}

const grt = greetStr("Nawaz");

console.log(grt);

//Add function

function add(num1, num2) {
    console.log(num1 + " " + num2);
    
}

add(1, 2);


function addRet(num1, num2){
    return num1 + num2;
}

let Add = addRet(10, 20);
console.log(Add);


//Arrays in Function

let myArray = [10,20,30,40,50];

function printArray(array){
    if(array){
        array.forEach(element => {
            console.log(element);
        });
    }
}

printArray(myArray);

//This keyword

let user = {
    name : "Masood",
    age: 22,
    
    skills : ["Java", "Spring", "Python", "Git" ],

    welcome : function(myNmae){
        // this.name = myNmae;
        console.log(`Hello ${this.name}, Welcome!`)
    }

    

}

user.welcome("Nawaaz")

//Arrow function

let greetArrow = () =>{
    console.log("Hello Coder!");
    
}

greetArrow()


let addTwoArrow = (num1, num2)=>{
    return num1 + num2;
}

let added = addTwoArrow(12, 15);
console.log(added);


//Implicit return

const multiply = (num1, num2) => (num1 * num2);

console.log(multiply(10, 3));


//Adding of array elements with arrow function

let myNums = [10, 20, 30, 40];

const addArray = (anyArray) => {
    let sum = 0;
    anyArray.forEach((e)=>{
        sum = sum + e;
    })

    return sum;
}

console.log(addArray(myNums));