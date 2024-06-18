let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
    console.log("Button 1 was clicked!-Handler1");
});
btn1.addEventListener("click", () => {
    console.log("Button 1 was clicked!-Handler2");
});
let Handler3 = () => {
    console.log("Button 1 was clicked!-Handler3");
};
btn1.addEventListener("click", Handler3);
btn1.addEventListener("click", () => {
    console.log("Button 1 was clicked!-Handler4");
});
btn1.removeEventListener("click", Handler3);
let btn2 = document.querySelector("#btn2");
btn2.ondblclick = () => {
    console.log("A Button was clicked 2 times!!(JS)");
};

let box = document.querySelector("#box");
box.onmouseover = () => {
    console.log("Your mouse is on div(JS)");
};
box.onclick = () => {
    console.log("You clicked on div(JS) - handler2");
};

let evt_details = document.querySelector("#evt_details");
evt_details.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};
let currmode = "light";;
let toggle = document.querySelector("#toggle");
toggle.addEventListener("click", () => {
    if(currmode === "light"){
        currmode = "dark";
        // document.querySelector("body").style.backgroundColor = "lightgray";
        document.querySelector("body").classList.add("dark");
    }
    else if(currmode === "dark"){
        currmode = "light";
        document.querySelector("body").classList.add("light");
    }
})