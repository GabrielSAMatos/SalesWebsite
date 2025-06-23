const { createServer } = require('node:http');

const host = 'localhost';
const port = 3000;

const server = createServer((request, response) => {

    console.log("Method: " + request.method);
    console.log("URL: " + request.url);

    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end("part of the browser");
});

server.listen(port, host, () => {
    console.log(`Running http://${host}:${port}`)
});

