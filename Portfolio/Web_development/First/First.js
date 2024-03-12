// console.log is used to print a message like pop up on webpage.
// js is Dynamically alocated memory
console.log("Edited and pushed succesfully");
console.log("Hello Js!");

// fullName -> Camel Case(Prefered)
// full_name -> Snake Case
// full-name -> kebab Case
// FullName -> Pascal Case

fullName = "Bucky Barnes";
price = 99.99;
age = 24;
// Null meaning nothing in storage
n = null;
// undefined meaning don't know whats in memory
u = undefined;
isfollow = true;
console.log(isfollow);

// var-> Variable can ge re-declared and updated. A golbal variable
// let -> Variable cannot be re-declared but can be updated. A block variable.
// const -> Variable cannot be re-declared or updated. A block variable. Must be initialised.

let a = 5;
var b = 6;
const c = 55.5;
// bigint to store big integer
x = BigInt(5);
y = Symbol("Hello!");

// mmnt is object
// Object -> Collection of variables
let Student = {
  fullName: "Bucky Barnes",
  age: 19,
  isPass: true,
};
console.log(Student.fullName);
console.log(Student["fullName"]);

// changing value in Object "Student"
Student.age = Student.age + 1;
console.log(Student.age);

// Chapter 2 -> Operators and conditional Statements:

// Equal to ==
// Not equal to !=
// Equal to and type ===
// Not equal to and type !==

console.log("a is", a++);
console.log("a is", ++a);

a = 5;
b = "5";
console.log('5 == "5"', a == b);

// Logical operators
let cond1 = a == b;
let cond2 = a === b;
console.log(cond1 && cond2);
console.log(!(cond1 && cond2));
console.log(cond1 || cond2);

// Ternary Operator -> a ? b : c (Other way to write if else)
// if a is true then b will be performed otherwise c

// alert("Hello World!");
let number = 5;
// let number = prompt("Enter number = ");
if (number % 5 === 0) console.log("Number is multiple of 5");
else console.log("Number is not a multiple of 5");

let scores = 70;
// let scores = prompt("Enter your score: ");
if (scores <= 100 && scores >= 90) console.log("Your grade is A!");
else if (scores <= 89 && scores >= 70) console.log("Your grade is B!");
else if (scores <= 69 && scores >= 60) console.log("Your grade is C!");
else if (scores <= 59 && scores >= 50) console.log("Your grade is D!");
else if (scores <= 49 && scores >= 0) console.log("Your grade is E!");

// Loops
// for loop->
// for-of loop->
// for(let i of str){ console.log("i", i); }
// for-in loop->
// let student = { name:"Rahul", age: 20 }
// for(let key in student){ console.log("key=", key, "value = ", student[key]);}
for (let i = 1; i <= 5; i++) {
  console.log("Hello World!");
}

// Input -> prompt("message here: ");
// Prompt always input bv string

// let p = 65;
// let i = prompt("Guess Number: ");
// while(Number(i) != p) {
//   alert("You guessed the wrong number, guess again");
//   i = prompt("Guess Number: ");

// }
// alert("You guessed the correct number!");

let str = "Hello World!";
console.log(str.length);
console.log(str[0]);

let sentence = `This is a template literal`;

let obj = {
  item: "pen",
  price: 15,
};
let str2 = "Barnes!";
// Template Literals in JS
// String Interpolation
// Other way of writing this
console.log("the cost of", obj.item, "is", obj.price, "rupees");
// OR
console.log(`the cose of ${obj.item} is ${obj.price} rupees`);
// This is an example of template literal
// ${obj.item} is known as placeholders

// String Methods in JS
// Strings are immutable
// Functions to manipulate a string
str.toUpperCase();
str.toLowerCase();
str.trim(); //removes whitespaces from starting and ending
// Never changes original string creates new string with new value
str.slice(2, 5); //returns part of string
str.concat(str2); //conbines two strings
str.replace("H", "Y");
str.replaceAll("H", "Y");
str.charAt(3);

// Chapter 4 -> Arrays
// Arrays is a special type of object
let arr = [20, 50, 80, 70, 40, 10, 30, 60, 90];
console.log(arr);
console.log(arr.length);

// ques 1
let prices = [250, 645, 300, 900, 50];
for (i = 0; i < 5; i++) {
  prices[i] -= prices[i] / 10;
}
console.log(prices);

// .push() add variables to the end of original array
prices.push(55, 840);
console.log(prices);
// .pop() removes variable from the original array
prices.pop();
console.log(prices);
// .toString prints a new string from array
console.log(prices.toString());

// .concat() joins multiple array and return a copy of it
console.log(prices.concat(arr));
// unshift() addes variable to starting in original array
prices.unshift(55);
console.log(prices);
// shift() removes variable from starting in original array
prices.shift();
console.log(prices);
// slice() prints a copy of array from index n to m-1
console.log(prices.slice(1, 4));
// splice() it removes 1 item from index 2 then addes 101 and 102 value at index 2
// It changes original array
console.log(prices);
prices.splice(2, 1, 101, 102);
console.log(prices);

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(`Initials store companies were: ${companies}`);
companies.shift();
console.log(`Companies after first company was removies were: ${companies}`);
companies.splice(1, 1, "Ola");
console.log(`Companies after Uber was replaces with Ola were: ${companies}`);
companies.push("Amazon");
console.log(
  `Companies after Amazon was also added to the store market were: ${companies}`
);

// Chapter 5 -> Functions in javaScript
function myFunction(msg) {
  console.log(msg);
}

myFunction("Hello, World!!");

// Arrow Function
// part of Modern JS

const mmsg = (msg) => {
  return msg;
};
console.log(mmsg("Hello, World!!"));

let strlen = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      console.log(str[i]);
    }
  }
  // return str.length;
};

// console.log(strlen("Hello World"));
strlen("chetan");

// ForEach loop in Array
// forEach can only be used for array not for string
// arr.forEach(callBackFunction)
// callback is a function passed as an argument to another function
arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val) {
  // value at each index
  console.log(val);
});
// usually forEach is used in arrow function
arr.forEach((val, idex, arr) => {
  console.log(val, idex, arr);
});
// Three parameters are usually passed in forEach value then index and then arr itself
// forEach is a Gigher order function or method
// Higher order functions are function which take functions as parameters or return them

let calcsquare = (val) => {
  console.log(val * val);
};

arr.forEach(calcsquare);

// More Array Methods
//* Map Method
let newarr = arr.map((val) => {
  return val * 2;
});
console.log(newarr);
// Old array remains same
console.log(arr);

//* Filter Method
newarr = arr.filter((val) => {
  return val > 2;
});
console.log(newarr);

//* Reduce Method is used to print 1 value at end
let sum = arr.reduce((res, cur) => {
  return res + cur;
});
// Initially res is 1st value and cur is 2nd
// After that res is sum of res and cur and cur is next value
console.log(sum);
// Finding larges with reduce method
let lar = arr.reduce((res, cur)=>{
  return res>cur?res:cur;
})
console.log(lar);