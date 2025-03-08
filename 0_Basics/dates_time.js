let date = new Date() //Current date & time it will fetch 

// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleDateString());
// console.log(date.toISOString());

let myCreateDate = new Date(2025, 1, 1); //Customized date and time it will fetch
// console.log(myCreateDate);
// console.log(myCreateDate.toDateString());
// console.log(myCreateDate.toLocaleDateString());
// console.log(myCreateDate.toLocaleString());


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));
console.log(new Date().toLocaleString('default',{
    timeZone: "Asia/India"
}))





