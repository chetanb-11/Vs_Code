// Students with marks more than or equal to 90
console.log("This is Questions.js console");
let marks = [75, 50, 80, 49, 90, 50, 90, 94, 95, 97, 100, 54, 82, 73];
let A_grade = marks.filter((marks) => {
  return marks >= 90;
});
console.log(A_grade);

// create am arr1ay of n integers
// let n = prompt("Enter n: ");
let n = 5;
let arr1 = [];
for (let i = 1; i <= n; i++) {
  arr1[i - 1] = i;
}
console.log(arr1);

let sum1 = arr1.reduce((res, cur) => {
  return res * cur;
}, 0);
// initial value is provided as second argument in case if array is empty
console.log(sum1);
let h2 = document.getElementsByTagName("h2");
console.dir(h2.innerText);

let newBtn = document.createElement("Button");
console.log(newBtn);
newBtn.innerText = "click me";
newBtn.style.backgroundColor = "red";
newBtn.style.textDecorationColor = "white";
document.querySelector("body").append(newBtn);


// Ques 2
let para = document.querySelector("p");
console.dir(para.getAttribute("class"));
console.dir(para.classList)