const { createServer } = require('node:http');

const host = '127.0.0.1';
const port = 3000;

const server = createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end("part of the browser");
});

server.listen(port, host, () => {
    console.log(`Running http://${host}:${port}`)
});

