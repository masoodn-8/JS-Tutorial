const myDetails = {
    name : "Masood",
    age : 22,
    address: {
        H_No: "#13/3/718",
        street: "Khaja Nagar",
        city: "Anantapur",
        State : {
            st: "Andhra Pradesh",
            pincode: 515001
        }
    }

};

let myAddress = Object.assign(myDetails);

console.log(myDetails.age);
console.log(myDetails.address.H_No);
console.log(myDetails.address.State.pincode);
myDetails.greeting = function(){
    console.log(`Hello myDetails ${this.name} `);
}
console.log(myDetails.greeting());

let user = {
    name: "Masood",
    age: 22,
    qualification: "MCA",
    college: "Presidency University"
};

const {name : n} = user;

console.log(n);



//Same like arrays we can use spread operator to combine two or more objects..


