const { createServer } = require('node:http');
const listProducts = require("./routes/products");


const host = 'localhost';
const port = 3000;

const server = createServer((request, response) => {

    const { url, method } = request;

    if(url == "/"){
        response.writeHead(200, { 'Content-type': 'text/plain' });
        return response.end("home page");
    }
       
    if(url == "/products"){

        const data = listProducts();

        response.writeHead(200, { 'Content-type': 'application/json'});
        return response.end(JSON.stringify(data));
    } 

    if(url == "/products/add"){
        products.push({
            id: 3,
            name: "ventilador",
            price: 200.00
        });

        response.writeHead(200, { 'Content-type': 'text/plain'});
        return response.end("Product added.");
    } 

    if(url == "/products/rem"){
        products.pop();
        response.writeHead(200, { 'Content-type': 'text/plain'});
        return response.end("Product removed.");
    } 

    response.writeHead(404, { 'Content-type': 'text/plain'});
    return response.end("not found.");

});

server.listen(port, host, () => {
    console.log(`Running http://${host}:${port}`)
});

