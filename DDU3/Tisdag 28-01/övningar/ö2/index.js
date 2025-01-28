class Product {
    get name () { return this._name; }
    set name (value) { this._name = value; } // måste använda _ 
    get price () { return this._price; }
    set price (value) {
        if (value < 0) {
            throw Error("negative prices are not valid");
        }

        this._price = value;
    }
    
    set discount (value) {
    if (value > 100) {
        throw Error("");
    }
        this._discount = value;
    }

    get finalPrice () {
        return (100 - this.discount) * this.price / 100;
    }
}