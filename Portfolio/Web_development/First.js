console.log("Edited and pushed succesfully");
console.log("Hello Js!");
fullname = "Bucky Barnes";
price = 99.99;
age = 24;
// Null meaning nothing in storage
n = null;
// undefined meaning don't know whats in memory
u = undefined;
isfollow = true;
console.log(isfollow);
 

let a = 5;
var b = 6;
const c = 55.5;

// Student is object
let Student = {
fullName: "Bucky Barnes", 
age: 19, 
isPass: true
};
console.log(Student.fullName);
console.log(Student["fullName"]);
// changing value in Object "Student"
Student.age = Student.age + 1;
console.log(Student.age);

console.log("a is", a++);
console.log("a is", ++a);

a = 5;
b = "5";
console.log("5 == \"5\"", a == b);

// Logical operators
let cond1 = a == b;
let cond2 = a === b;
console.log(cond1 && cond2);
console.log(!(cond1 && cond2));
console.log(cond1 || cond2);

// alert("Hello World!");
let number = 5;
// let number = prompt("Enter number = ");
if(number % 5 === 0) console.log("Number is multiple of 5");
else console.log("Number is not a multiple of 5");

let scores = 70;
// let scores = prompt("Enter your score: ");
if(scores <= 100 && scores >= 90) console.log("Your grade is A!");
else if(scores <= 89 && scores >= 70) console.log("Your grade is B!");
else if(scores <= 69 && scores >= 60) console.log("Your grade is C!");
else if(scores <= 59 && scores >= 50) console.log("Your grade is D!");
else if(scores <= 49 && scores >= 0) console.log("Your grade is E!");

for(let i = 1; i <= 100; i++){
    console.log("Hello World!")
}

let p = 65;
let i = prompt("Guess Number: ");
while(Number(i) != p) {
  alert("You guessed the wrong number, guess again");
  i = prompt("Guess Number: ");
  
}
alert("You guessed the correct number!");
