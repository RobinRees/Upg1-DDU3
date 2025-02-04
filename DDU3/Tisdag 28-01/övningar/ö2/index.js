class Product {
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        if (value >= 0) {
            this._price = value;
        } else {
            console.error("Priset kan inte vara negativt")
        }
    }

    get discount () {
        return this._discount;
    }

    set discount(value) {
        if (value >= 0 && value <= 100) {
            this._discount = value;
        } else {
            console.error("rabatten måste vara mellan 0 och 100");
        }
    } 

    get finalPrice() {
        return this._price * (1 - this._discount / 100);
    }
    
}

const product1 = new Product();
product1.name = "Laptop";
product1.price = 10000;
product1.discount = 10;

console.log(product1.finalPrice);