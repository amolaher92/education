//JS Data-Types
const num = 23; //Number
let typeData = typeof num;
console.log(`${num} : This is Data Type : \" ${typeData} \"`);

const decimal = 23.1; //Number
typeData = typeof decimal;
console.log(`${decimal} : This is Data Type : \" ${typeData} \"`);

const str = "This is string"; //string
typeData = typeof str;
console.log(`${str} : This is Data Type : \" ${typeData} \"`);

const right = true; //Boolean
typeData = typeof right;
console.log(`${right} : This is Data Type : \" ${typeData} \"`);

const left = false; //Boolean
typeData = typeof left;
console.log(`${left} : This is Data Type : \" ${typeData} \"`);

let empty; //undefined
typeData = typeof empty;
console.log(`${empty} : This is Data Type : \" ${typeData} \"`);

let zero = null; //null
typeData = typeof zero;
console.log(`${zero} : This is Data Type : \" ${typeData} \"`);

const myArray = ["A", "B", "C", "D", "E"]; //Array
typeData = typeof myArray;
console.log(`${myArray} : This is Data Type : \" ${typeData} \"`);

const myObject = { A: "Apple", B: "Ball", C: "Cat", D: "Dog", E: "Eagle" }; //Object
typeData = typeof myObject;
console.log(`${myObject} : This is Data Type : \" ${typeData} \"`);

let firstNumber = 34;
let secondNumber = 50;
let thirdNumber = 70;
let fourthNumber = 2;
function arithmeticOperations() {
  console.log("Welcome to the Arithmetic Operations");
  if (firstNumber <= secondNumber) {
    let Add = firstNumber + secondNumber;
    console.log(`Addition ${firstNumber} + ${secondNumber} = ${Add}`);
  }
  if (thirdNumber >= secondNumber) {
    let Sub = thirdNumber - secondNumber;
    console.log(`Subtraction ${thirdNumber} - ${secondNumber} = ${Sub}`);
  }
  if (fourthNumber <= firstNumber) {
    let Mul = fourthNumber * firstNumber;
    console.log(`Multiplication ${fourthNumber} * ${firstNumber} = ${Mul}`);
  }
  if (thirdNumber >= firstNumber) {
    let Div = thirdNumber / firstNumber;
    console.log(`Division ${thirdNumber} / ${firstNumber} = ${Div}`);
  }
  if (fourthNumber > 0) {
    let Expo = fourthNumber ** 2;
    console.log(`Exponential ${fourthNumber} is ${Expo}`);
  }
  if (firstNumber >= 0) {
    let Mod = firstNumber % 2;
    console.log(`Remaning ${firstNumber} is ${Mod}`);
  }
}
arithmeticOperations();
console.log(`This is pre-increment of ${firstNumber} is ` + ++firstNumber);
console.log(`This is post-increment of ${secondNumber} is ` + secondNumber++);
console.log(`This is post-decrement of ${thirdNumber} is ` + --thirdNumber);
console.log(`This is post-decrement of ${firstNumber} is ` + firstNumber--);

const operation = "ADD";
switch (operation) {
  case "ADD":
    let number = [10, 20, 30];
    let sum = 0;
    for (let Nums of number) {
      sum += Nums;
    }
    console.log(`Addition of Array is ${sum}`);
    break;

  default:
    console.log(`Hello Amol You incoorect entered`);
}

/**
 * Promise in JavaScript ES6
 */
//promise start
const myPromise = new Promise((resolve, reject) => {
  let number = [900, 500, 593];
  if (typeof number === "object") {
    let sum = 0;
    for (let Nums of number) {
      sum += Nums;
    }
    resolve(sum);
  } else {
    let number1 = [1, 2, 3];
    let sum1 = 0;
    for (let Nums of number1) {
      sum1 += Nums;
    }
    reject(`Addition of Array is ${sum1}`);
  }
});

myPromise
  .then((m) => {
    if (m === 1993) {
      console.log("This is my Birth Year " + m);
    }
  })
  .catch((err) => {
    console.log(err);
  });
//Promise end

/**
 * Array push and pop method in dynamically
 */
let myArrays = [1, 2, 3];
arrayLen = myArrays.length;
//console.log(arrayLen);
if (arrayLen < 5) {
  for (let i = arrayLen; i <= 10; i++) {
    if (i == 3) {
      continue;
    }
    myArrays.push(i);
  }
  console.log(myArrays);
  if (myArrays.length >= 10) {
    for (let i = myArrays.length; i > 5; i--) {
      myArrays.pop(i);
    }
  }
  console.log(myArrays);
}
