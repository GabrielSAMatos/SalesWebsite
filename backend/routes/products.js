function listProducts(products){
    return products;
}


function addProducts(products){
    products.push({
        id: 3,
        name: "ventilador",
        price: 200.00
    });
}

function remProducts(products){
    products.pop(); 
}

function editProducts(products, productID, productName){
    for(const element of products){
        if(productID === element.id){
            element.name = productName;
        }
    }
}

module.exports = { listProducts, addProducts, remProducts, editProducts };
