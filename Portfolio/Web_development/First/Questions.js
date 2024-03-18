// TODO: sjkernfsdb
// !fkdsmjflfjsgbhi
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
});
console.log(sum1);
let h2 = document.getElementsByTagName("h2");
console.dir(h2.innerText);
// h2.innerText = "Hello javaScript from Bucky!";
// h2.innerText = "Hello";
