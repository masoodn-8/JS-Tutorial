// Strings can be declared by using Single quotes ('') or double quotes ("");

// const name = "Masood";
// const age = 22;

// console.log(name + age); //Concatination of String and number "Output: Masood22"

// console.log(`My name is ${name} and my age is ${age}`); //String interpolation method

//Strings are also known as Array of characters or Object.
//Strings will have key value pair type. Such as
/*

    name = "IronMan"
    name[0] // Gives "I" character, because array indexes starts from 0;
*/

// let comicName = new String("BatMan");

// console.log(comicName);
// console.log(comicName.__proto__);


/*
    String methods: 

    1. (name.length)  => Gives length of the string.
    2. (.toUpperCase()) => Changes the case of string to UpperCase.
    3. (.charAt("indexNumber")) => Gives the character at given index.
    4. (.indexOf('charcter')) => Gives the index of the charcter you gave.
    5. (.subString(startIndex, EndIndex)) => It will take the characters from startIndex to endIndex - 1.
    6. (.slice(startIndex, endIndex)) => It is also similar to subString method, but we can provide negative index (-0 to -n).
    7. (.trim()) => It will remove the starting and ending spaces in the string.
    8. (.replace('character-you-want-to-replace', 'new-character-you-want-to-keep')) => It will replace the old character with new character.
    9. (.includes('charcter or string')) => It will check if the character or SubString in the string  and returns "False" or "true".
    10.(.split('character to split from')) => It will split the string from the character which provided.

*/
 
// String methods practice....

let sentence = "Thor is the mighty avenger";
let upperSen = "THOR IS THE MIGHTY aVENGER";

console.log(sentence.substring(2, 25));
console.log(sentence.slice(-5,25));
console.log(sentence.replace('a', 'A'));



// upperSen.forEach(e => {
//     console.log(e);
    
// });

// console.log(sentence.length)



// console.log(sentence)

