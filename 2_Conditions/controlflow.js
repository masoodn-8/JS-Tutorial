if(true){
    console.log("It is executed");    //if is executed only when the value or condition is true...
    
}

if(false){
    return
}else{
    console.log("Printing else because of if false"); 
    
}

if(true){
    console.log("Exeucte if");
    
}else{
    console.log("Execute else");
    
}

switch('D'){
    case 'A':
        console.log("A");
        break;
    case 'B':
        console.log("B");
        break;
    case 'C':
        console.log("C");
        break;
    default:
        console.log("It is default"); //If the case is not matched it will print default..
        break;
}

//Falsy Values

//false, 0, -0, BigInt 0n, "", null, undefined, NaN;

//Truthy values

//true, "0", 'false', " ", [], {}, function(){}, 

// Check if the array is empty or not

let myArray = [1,2,3,4];

if(myArray.length === 0){
    console.log("Arrays is empty");
    
}

//to check if the object is empty or not

let myObj = {};

if(Object.keys(myObj).length === 0){
    console.log("Object is empty");
    
}

//Nullish Coalescing operator (??) 

let val1 = 5 ?? 10;
let val2 = undefined ?? 18;

console.log(val2);


