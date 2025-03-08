let array = [1,2,3,4,5];

const sum = array.reduce((acc, num)=>{
    return acc + num;

}, 0);


console.log(sum);
