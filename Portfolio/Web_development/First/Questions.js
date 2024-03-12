// TODO: sjkernfsdb
// !fkdsmjflfjsgbhi
// Students with marks more than or equal to 90
let marks = [75, 50, 80, 49, 90, 50, 90, 94, 95, 97, 100, 54, 82, 73];
let A_grade = marks.filter((marks) => {
  return marks >= 90;
});
console.log(A_grade);

// create am array of n integers
let n = prompt("Enter n: ");
let arr = [];
for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}
console.log(arr);

let sum = arr.reduce((res, cur) => {
    return res * cur;
});
console.log(sum);