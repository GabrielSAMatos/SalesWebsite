const { createServer } = require('node:http');
const Products = require('./routes/products');
const Users = require('./routes/users');
const routes = require('./routes/router');


const host = 'localhost';
const port = 3000;


const server = createServer((request, response) => {
   
    const { url, method } = request;

    if(!routes[url] || !routes[url][method]){
        response.writeHead(404, { 'Content-type': 'text/plain'});
        return response.end("not found.");
    }

    
    response.writeHead(200, { 'Content-type': 'text/plain' });
    return response.end(routes[url][method]());

});


server.listen(port, host, () => {
    console.log(`Running http://${host}:${port}`)
});