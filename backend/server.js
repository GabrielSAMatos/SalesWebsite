const { createServer } = require('node:http');
const { listProducts, addProducts, remProducts, editProducts }  = require("./routes/products");


const host = 'localhost';
const port = 3000;
const products = [
    {
        id: 1,
        name: "chinela",
        price: 39.99
    },
    {
        id: 2,
        name: "alpercata",
        price: 99.90
    }
];

const server = createServer((request, response) => {
   


    const { url, method } = request;

    if(url == "/"){
        response.writeHead(200, { 'Content-type': 'text/plain' });
        return response.end("home page");
    }
       
    if(url == "/products"){

        const data = listProducts(products);

        response.writeHead(200, { 'Content-type': 'application/json'});
        return response.end(JSON.stringify(data));
    } 

    if(url == "/products/add"){
        addProducts(products);

        response.writeHead(200, { 'Content-type': 'text/plain'});
        return response.end("Product added.");
    } 

    if(url == "/products/rem"){

        remProducts(products);

        response.writeHead(200, { 'Content-type': 'text/plain'});
        return response.end("Product removed.");
    } 

    if(url == "/products/edit"){

        editProducts(products, 3, "awdikopwaeopid09u3290u8od32d32");

        response.writeHead(200, { 'Content-type': 'text/plain'});
        return response.end("Product edited.");
    } 
    
    response.writeHead(404, { 'Content-type': 'text/plain'});
    return response.end("not found.");

});

server.listen(port, host, () => {
    console.log(`Running http://${host}:${port}`)
});

