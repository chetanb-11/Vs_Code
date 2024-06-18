let marked = false;
function mark(i){
    let sign = document.getElementById(i);
    if (sign.innerHTML === " ")
        if (!marked) { sign.innerText = "X"; marked = true; }
        else { sign.innerText = "O"; marked = false; }
    console.log(marked);
    winner();
}

let winner= () => {
    let winn_X = document.getElementById("win_X"); 
    let winn_O = document.getElementById("win_O"); 
    if(((document.getElementById('a').innerText == document.getElementById('b').innerText) && (document.getElementById('b').innerText == document.getElementById('c').innerText)) || ((document.getElementById('a').innerText == document.getElementById('e').innerText) && (document.getElementById('e').innerText == document.getElementById('i').innerText)) || (document.getElementById('a').innerText == document.getElementById('d').innerText) && (document.getElementById('d').innerText == document.getElementById('g').innerText))
        if(document.getElementById('a').innerText == "X")
            winn_X.style.display = "block";
        else if(document.getElementById('a').innerText == "O")
            winn_O.style.display = "block";
}

let reload = () =>{
    location.reload(); 
}