const express = require('express');

const app = express();

app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<p>Hello World!</p>');
    res.sendFile('./views/index.html', {root: __dirname});
    // we have to first give current directory or root to give reference to relative path
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {root: __dirname});
});

// redirect
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

// 404 error
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname});
})