class Products {

    static products = [
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

    static list(){
        return JSON.stringify(Products.products);
    }

    static add(){
        Products.products.push({
            id: 3, 
            name: "3333",
            price: 333
        });

        return "Product added."
    }

    static rem(indice){
        Products.products.splice(indice, 1); 
    }

    static edit(productID, key, content){
        for(const element of Products.products){
            if(productID === element.id){
            element[key] = content;
            }
        }
    }
}

module.exports = Products;
