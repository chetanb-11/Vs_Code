// let appbtn = document.querySelector(".appbtn");
// appbtn.addEventListener("click", () => {
//     console.log("You just clicked an app button");
//     // document.querySelector("#content").innerText += document.querySelector(".appbtn").innerText;
// })
let str_1 = document.querySelector("#content_1");
let str_2 = document.querySelector("#content_2");
let AC = document.querySelector("#AC");
AC.addEventListener("click", () => {
  console.log("You just clicked one button");
  str_1.innerText = "";
  str_2.innerText = "";
});

let one = document.querySelector("#one");
one.addEventListener("click", () => {
  console.log("You just clicked one button");
  str_1.innerText += document.querySelector("#one").innerText;
});

let two = document.querySelector("#two");
two.addEventListener("click", () => {
  console.log("You just clicked two button");
  str_1.innerText += document.querySelector("#two").innerText;
});

let three = document.querySelector("#three");
three.addEventListener("click", () => {
  console.log("You just clicked three button");
  str_1.innerText += document.querySelector("#three").innerText;
});

let four = document.querySelector("#four");
four.addEventListener("click", () => {
  console.log("You just clicked four button");
  str_1.innerText += document.querySelector("#four").innerText;
});

let five = document.querySelector("#five");
five.addEventListener("click", () => {
  console.log("You just clicked five button");
  str_1.innerText += document.querySelector("#five").innerText;
});

let six = document.querySelector("#six");
six.addEventListener("click", () => {
  console.log("You just clicked six button");
  str_1.innerText += document.querySelector("#six").innerText;
});

let seven = document.querySelector("#seven");
seven.addEventListener("click", () => {
  console.log("You just clicked seven button");
  str_1.innerText += document.querySelector("#seven").innerText;
});

let eight = document.querySelector("#eight");
eight.addEventListener("click", () => {
  console.log("You just clicked eight button");
  str_1.innerText += document.querySelector("#eight").innerText;
});

let nine = document.querySelector("#nine");
nine.addEventListener("click", () => {
  console.log("You just clicked nine button");
  str_1.innerText += document.querySelector("#nine").innerText;
});

let divide = document.querySelector("#divide");
divide.addEventListener("click", () => {
  console.log("You just clicked divide button");
  str_1.innerText += document.querySelector("#divide").innerText;
});

let zero = document.querySelector("#zero");
zero.addEventListener("click", () => {
  console.log("You just clicked zero button");
  str_1.innerText += document.querySelector("#zero").innerText;
});

let percentage = document.querySelector("#percentage");
percentage.addEventListener("click", () => {
  console.log("You just clicked percentage button");
  // str_1.innerText += document.querySelector("#percentage").innerText;
  str_2.innerText = `=> ${(eval(str_1.innerText))/100}`;
});

let mul = document.querySelector("#mul");
mul.addEventListener("click", () => {
  console.log("You just clicked mul button");
  str_1.innerText += document.querySelector("#mul").innerText;
});

let sub = document.querySelector("#sub");
sub.addEventListener("click", () => {
  console.log("You just clicked sub button");
  str_1.innerText += document.querySelector("#sub").innerText;
});

let add = document.querySelector("#add");
add.addEventListener("click", () => {
  console.log("You just clicked add button");
  str_1.innerText += document.querySelector("#add").innerText;
});

let dot = document.querySelector("#dot");
dot.addEventListener("click", () => {
  console.log("You just clicked dot button");
  str_1.innerText += document.querySelector("#dot").innerText;
});

let equal_to = document.querySelector("#equal_to");
equal_to.addEventListener("click", () => {
  console.log("You just clicked equal to button");
  str_2.innerText = `=> ${eval(str_1.innerText)}`;
  console.log(str_2.innerText);
});

let sol = '5+4'
console.log(eval(sol))