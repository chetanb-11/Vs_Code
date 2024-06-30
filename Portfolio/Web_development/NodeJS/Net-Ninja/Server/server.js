const http = require('http');
const fs = require('fs');
const _ = require('lodash');
const server = http.createServer((req, res) => {
    const num = _.random(0, 200);
    console.log(num);

    // Set header content type
    res.setHeader('Content-Type', 'text/html');

    // Passing html file
    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html'
            res.statusCode = 404;
    }
    fs.readFile(path, (err, data) => {
        if (err) console.log(err);
        // else res.write(data);
        else res.end(data);
    })
});

// localhost is the default value
server.listen(3000, 'localhost', () => {
    console.log('server is running on port 3000');
})