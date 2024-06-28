const http = require('http');

const server = http.createServer(() => {
    console.log('request received');
});

// localhost is the default value
server.listen(3000, 'localhost', () => {
    console.log('server is running on port 3000');
})