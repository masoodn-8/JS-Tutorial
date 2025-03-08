let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let even = numbers.filter((nums)=>{
    return nums % 2 == 0;
})

let odd = numbers.filter((nums)=>{
    return (nums%2 != 0);
})

// console.log(even);

// console.log(odd);

//Filter on strings

const names = ["Masood", "Athira", "Asmitha", "Imam", "Mallika"];

let Anames = names.filter((name)=>{
    return name.charAt(0) === "A";
})

console.log(Anames);

//Filter on objects

const userDetails = [
    {
        name: "Masood",
        age : 22
    },

    {
        name : "Athira",
        age : 23
    }, 

    {
        name : "Asmitha",
        age : 15
    },

    {
        name : "Imam",
        age : 62
    },

    {
        name : "Mallika",
        age : 54
    }

];


let reqObjs = userDetails.filter((obj)=>{
    return obj.age > 50;
})

console.log(reqObjs);

   
    
    
    

