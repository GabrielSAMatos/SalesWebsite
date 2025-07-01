class Items {
    //Attributes
    name = '';
    description = '';
    price = '';

    constructor(name, description, price){
        this.name = name;
        this.description = description;
        this.price = price
    }

    //Events

}


const combo1 = new Items("combo 1", "hamburbuer, potato and soda", 30.00);

const comboAux = combo1;

console.log(combo1);

combo1.name = "combo2";

console.log(combo1);

comboAux.name = "combo3";

console.log(combo1);
