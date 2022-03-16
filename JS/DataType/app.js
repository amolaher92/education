/**
 * const myHeading = document.querySelector('#object');
 * myHeading.textContent = "Hello World";
 */

//variable declration
var Name = "Amol Aher"; //String
let UndefinedData;  //undefined
let age = 28; //Number
const gender = true; //Boolean
//const hobbies = new Array("Development", "Reading", "Cooking"); //Array
const hobbies = ["Development", "Reading", "Cooking"]; //Array
const education = {
    MCS: "Master Computer Science",
    BCS: "Bacholer Computer Science",
}; //Object

console.log(`My name is ${Name}. I am ${age} year old. I am ${gender}.`);
console.log(`my hobbies are ${hobbies}`);
console.log(`My education are ${education.MCS} and ${education.BCS}`);

const dataType = [Name, age, gender, hobbies, education,UndefinedData];
dataType.forEach((typeData) => {
    console.log(typeof(typeData));
});