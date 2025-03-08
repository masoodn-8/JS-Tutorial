let names = ["Masood Khan", "Nawaz Khan", "Khan", "Athira", "Asmitha"];

names.forEach(element => {
    console.log(element.includes("Khan") ? element: element.concat(" Khan"));
    
});

let numbers = [1,2,3,4,5,6,7,8];

numbers.unshift(25);
numbers.shift();

numbers.forEach(element => {
    console.log(element);
    
});

let strNum = numbers.join("-"); //Convert the array and store as string
console.log(numbers.toString()); //This will also convert the array into string.
let mySplice = numbers.splice(2,4)
console.log(mySplice);
console.log(numbers);


const one = ["Masood, Nawaz", "Khan"];
const two = ["Athira", "Asmitha", "Appu"["Prameela", "Pradeep", "Ajji"]];

console.log(one.concat(two)); //To Merge two arrays into single. We can only assign one array to concat

const all = [...one, ...two.flat(Infinity)]; // We can merge any number of arrays into one.

console.log(all);


let name = ["Masood"]

console.log(Array.isArray(name));
console.log(Array.from(name)); //Creates array from the variable.

let id = 22, id2 = 73, id3 = 74;

const ids = Array.of(id, id2, id3); //Creates array using different set of elements

console.log(ids);



