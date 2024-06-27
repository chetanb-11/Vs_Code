setTimeout(() => {
    console.log("Hello in setTimeout()");
    clearInterval(int);
}, 3000);

let int = setInterval(() => {
    console.log('Now your in setInterval loop...')
}, 1000);