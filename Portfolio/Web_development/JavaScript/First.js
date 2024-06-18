// !Chapter 1 -> Introduction to javaScript
// console.log is used to print a message like pop up on webpage.
// js is Dynamically alocated memory
console.log("Edited and pushed succesfully");
console.log("Hello Js!");

// fullName -> Camel Case(Prefered)
// full_name -> Snake Case
// full-name -> kebab Case
// FullName -> Pascal Case

let fullName = "Bucky Barnes";
let price = 99.99;
let age = 24;
// Null meaning nothing in storage
let n = null;
// undefined meaning don't know whats in memory
// Not necessary to write undefined
let u = undefined;
let isfollow = true;
console.log(isfollow);

// var-> Variable can ge re-declared and updated. A golbal variable
// let -> Variable cannot be re-declared but can be updated. A block variable.
// const -> Variable cannot be re-declared or updated. A block variable. Must be initialised.

let a = 5;
let b = 6;
const c = 55.5;
// BigInt to store big integer
let x = BigInt(5);
let y = Symbol("Hello!");

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

// !Chapter 2 -> Operators and conditional Statements:

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

// -Loops
// for loop->
// for-of loop->
let str = [1, 2, 3, 4, 5]
for(let i of str){ console.log("i: ", i); }
// for-in loop->
let student = { name:"Rahul", age: 20 }
for(let key in student){ console.log("key=", key, "value = ", student[key]);}
for (let i = 1; i <= 5; i++) {
  console.log("Hello World!");
}

// -Input -> prompt("message here: ");
// Prompt always input bv string

// let p = 65;
// let i = prompt("Guess Number: ");
// while(Number(i) != p) {
//   alert("You guessed the wrong number, guess again");
//   i = prompt("Guess Number: ");

// }
// alert("You guessed the correct number!");

str = "Hello World!";
console.log(str.length);
console.log(str[0]);

let sentence = `This is a template literal`;

let obj = {
  item: "pen",
  price: 15,
};
let str2 = "Barnes!";
// -Template Literals in JS
// String Interpolation
// Other way of writing this
console.log("the cost of", obj.item, "is", obj.price, "rupees");
// OR
console.log(`the cose of ${obj.item} is ${obj.price} rupees`);
// This is an example of template literal
// ${obj.item} is known as placeholders

// -String Methods in JS
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

// !Chapter 4 -> Arrays
// Arrays is a special type of object
let arr = [20, 50, 80, 70, 40, 10, 30, 60, 90];
console.log(arr);
console.log(arr.length);

// ques 1
let prices = [250, 645, 300, 900, 50];
for (let i = 0; i < 5; i++) {
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

// !Chapter 5 -> Functions in javaScript
function myFunction(msg) {
  console.log(msg);
}

myFunction("Hello, World!!");

// Arrow Function
// part of Modern JS

// Concise body of arrow function
let add = (a, b) => a + b;

// Block body of arrow function
let sub = (a, b) => {
  return a+b;
};
console.log(add(5, 5));
console.log(sub(5, 5));

let strlen = (str) => {
  for (let i of str) {
    if (
      i == "a" ||
      i == "e" ||
      i == "i" ||
      i == "o" ||
      i == "u"
    ) {
      console.log(i);
    }
  }
  // return str.length;
};

// console.log(strlen("Hello World"));
strlen("chetan");

// -ForEach loop in Array
// forEach can only be used for array not for string
// arr.forEach(callBackFunction)
// callback is a function passed as an argument to another function
arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val) {
  // value at each index
  console.log(val);
});
// Usually forEach is used in arrow function
arr.forEach((val, idex, arr) => {
  console.log(val, idex, arr);
});
// Three parameters are usually passed in forEach, value then index and then arr itself
// value is compulsary to be passed rest are optional

// forEach is a Higher order function or method
// Higher order functions are function which take functions as parameters or return them

let calcsquare = (val) => {
  console.log(val * val);
};

arr.forEach(calcsquare);

// More Array Methods

// -Map Method
// Three parameters are usually passed in map, value then index and then arr itself
// value is compulsary to be passed rest are optional
let newarr = arr.map((val) => {
  return val * 2;
  // creates new array with modified values
});
console.log(newarr);
// Old array remains same
console.log(arr);

// -Filter Method
newarr = arr.filter((val) => {
  return val > 2;
  // returns values which satisfies this condition
});
console.log(newarr);

// -Reduce Method is used to print 1 value at end
// Syntax
// let result = array.reduce(callback(accumulator, currentValue, index, array), initialValue);
let sum = arr.reduce((res, cur) => {
  return res + cur;
}, 0);
// Initially res is 1st value and cur is 2nd
// After that res is sum of res and cur and cur is next value
console.log(sum);
// Finding larges with reduce method
let lar = arr.reduce((res, cur) => {
  return res > cur ? res : cur;
}, 0);
console.log(lar);

//! Chapter -> DOM
// When a web page is loaded, the browser creates a *Document Object Model (DOM) of page
// For example to access background and manuplate it we have to address it like
// let bg = ;
document.body.style.background = "green";
console.dir((document.body.style.background));
// console.dir is used to output objects in javaScript
// These changes are Dynamic changes or manupulation

// -> DOM Manipulation
// Selecting with id
document.getElementById("myId");

// selecting with class
document.getElementsByClassName("myClass");

// Selecting with tag
document.getElementsByTagName("p");

// Query Delector
// It automatically detects class, Id or tag
let FirstEl = document.querySelector("p");
console.dir(FirstEl);
// returns first element
let AllEl = document.querySelectorAll("p");
console.dir(AllEl);
// returns a NodeList of all tags mentioned

// -DOM are of three parts
// *> text
// *> Comments
// *> Elements
// Properties
console.log(FirstEl.tagName); //returns tag for elements nodes
let dd = document.querySelector("div");
console.dir(dd.innerText); // returns the text content of the element and all its children
console.dir(dd.innerHTML); // returns the plain text or HTML contents in the element
console.dir(dd.textContent); //returns textual content even for hidden elements
// Uses
let pp = document.querySelector("p");
pp.innerText = "This p tags is now changed";
pp.innerHTML = "<i>This is now italic p tag</i>";
let h2 = document.querySelector("h2");
h2.innerText += " From Bucky";
console.log(pp.innerText);
let divs = document.querySelectorAll(".box");
let idx = 0;
for (div of divs) {
  div.innerText = `this is unique id of ${idx}`;
  idx++;
}

// Attributes
let attt = document.querySelector("#att");
console.log(attt);

let iid = attt.getAttribute("iid"); // returns the value of given attribute
console.log(iid);

iid = attt.setAttribute("iid", "attt"); //changes value of given attribute
iid = attt.getAttribute("iid");
console.log(iid);

attt.style.backgroundColor = "blue"; // to change css style from javaScript
attt.style.fontSize = "26px";
attt.innerText = "Hello!";

//Insert Elements
let lst = document.querySelector(".list");
let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
lst.prepend(newBtn); //adds at the start of node(inside)
lst.append(newBtn); //adds at the end of node(inside)
lst.before(newBtn); //adds at the start of node(outside)
lst.after(newBtn); //adds at the end of node(outside)
document.querySelector("body").prepend(newBtn); // other way for the same
newBtn.remove();
// append child
// remove child
console.dir(lst.classList)
lst.classList.add("newclass"); //to add class through class lsit
console.dir(lst.classList);
// lst.classList.remove("newclass"); // to remove class through classList
console.dir(lst.classList);

//! Chapter -> Events
// The change in the state of and object is known as Events
// Events are fired to notify code of "interesting changes" that may affect code execution

// -Some types of events
// Mouse events (click, double click etc.)
// Keyboard events (keypress, keyup, keydown)
// Form events (submit etc.)
// Printfevent & many more
